"use client";

import { useEffect, useState } from "react";

import { Get_Fichier_Candidature } from "@/app/services/Test_Feature/Get_Fichier_Candidature";

interface Candidat {
  id: string;
  nom: string;
  prenom: string;
  dateRendu: string;
}

export default function Reponse_candidats() {
  const [candidats, setCandidats] = useState<string[]>([]);

  // on va chercher les cnadidatures
  useEffect(() => {
    const fetchFile = async () => {
      const data = await Get_Fichier_Candidature(1);
      setCandidats(data?.fichier_candidats ?? []);
    };
    fetchFile();
  }, []);

  // pour lancer le dockre sur le fichier
  const handleLancer = async (fichierPath: string) => {
    // on va call l'api
    const res = await fetch("http://localhost:5000/api/docker/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fichierPath }),
    });
    const { url } = await res.json();
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-6 w-full max-w-[520px]">
      <h1 className="text-white font-bold text-base tracking-wide mb-5">
        Résultats candidats
      </h1>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {/* header */}
        <div className="grid grid-cols-[1fr_1fr_90px_80px] gap-3 px-4 py-3 border-b border-white/10">
          {["Nom", "Prénom", "Rendu", ""].map((h) => (
            <span
              key={h}
              className="text-[10px] text-white/30 uppercase tracking-widest font-bold"
            >
              {h}
            </span>
          ))}
        </div>

        {/* lignes */}
        {candidats.length === 0 ? (
          <p className="text-white/15 text-xs text-center py-8">
            Aucun candidat
          </p>
        ) : (
          candidats.map((c, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1fr_90px_80px] gap-3 px-4 py-3 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-white/80 text-sm font-medium truncate">
                {c}
              </span>
              {/* <span className="text-white/80 text-sm truncate">{c.prenom}</span>
              <span className="text-white/40 text-xs font-mono">{c.dateRendu}</span> */}
              <button
                onClick={() => handleLancer(c)}
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
