"use client";

import { useEffect, useState } from "react";
import { Get_Fichier_Candidature } from "@/app/services/Test_Feature/Get_Fichier_Candidature";

export default function Reponse_candidats() {
  // tt les candidats
  const [candidats, setCandidats] = useState<Record<string, string[]>>({});

  // au lancement on va chercher les fichiers de s candidats pour le ll=moment on prend que le poste numero 1
  useEffect(() => {
    const fetchFile = async () => {
      const data = await Get_Fichier_Candidature(1);
      const fichiers: string[] = data?.fichier_candidats ?? [];

      const grouped: Record<string, string[]> = {};
      for (const f of fichiers) {
        const parts = f.split("/");
        const userKey = parts.slice(0, 2).join("/");
        if (!grouped[userKey]) grouped[userKey] = [];
        grouped[userKey].push(f);
      }
      setCandidats(grouped);
    };
    fetchFile();
  }, []);

  // pour laner le test d'un utilisateur
  const handleLancer = async (fichierPaths: string[]) => {
    const res = await fetch("http://localhost:5000/api/docker/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fichierPaths }),
    });
    const { url } = await res.json();
    window.open(url, "_blank");
  };

  // les user donc les datas
  const users = Object.entries(candidats);

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-6 w-full max-w-[520px]">
      <h1 className="text-white font-bold text-base tracking-wide mb-5">
        Résultats candidats
      </h1>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_80px] gap-3 px-4 py-3 border-b border-white/10">
          <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
            Candidat
          </span>
          <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
            Fichiers
          </span>
          <span></span>
        </div>

        {users.length === 0 ? (
          <p className="text-white/15 text-xs text-center py-8">
            Aucun candidat
          </p>
        ) : (
          users.map(([userKey, fichiers]) => (
            <div
              key={userKey}
              className="grid grid-cols-[1fr_auto_80px] gap-3 px-4 py-3 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-white/80 text-sm font-medium truncate">
                {userKey}
              </span>
              <span className="text-white/40 text-xs">
                {fichiers.length} fichier(s)
              </span>
              <button
                onClick={() => handleLancer(fichiers)}
                className="bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 text-[10px] font-bold uppercase tracking-wider py-1.5 rounded-lg border border-emerald-500/20 transition-all"
              >
                Lancer
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
