"use client";

import { useEffect, useState } from "react";
import { Get_Fichier_Candidature } from "@/app/services/Test_Feature/Get_Fichier_Candidature";

import { Get_Enterprise } from "@/app/services/Test_Feature/Get_Poste_Entreprise";

// pour toute les offres
interface Poste {
  id_poste: number;
  display_name_fr: string;
}

export default function Reponse_candidats() {
  //pr les postes
  const [postes, setPostes] = useState<Poste[]>([]);
  const [selectedPoste, setSelectedPoste] = useState<number | null>(null);

  // tt les candidats
  const [candidats, setCandidats] = useState<Record<string, string[]>>({});

  // poste des l'entreprise
  useEffect(() => {
    const fetchPostes = async () => {
      const data = await Get_Enterprise(2);
      setPostes(data?.offre ?? []);
    };
    fetchPostes();
  }, []);

  // au lancement on va chercher les fichiers de s candidats pour le le moment on prend que le poste numero 1
  useEffect(() => {
    if (selectedPoste === null) {
      setCandidats({});
      return;
    }
    const fetchCandidats = async () => {
      const data = await Get_Fichier_Candidature(selectedPoste);
      const fichiers: string[] = data?.fichier_candidats ?? [];

      const grouped: Record<string, string[]> = {};
      for (const f of fichiers) {
        const parts = f.split("/");
        const userKey = parts.slice(1, 2).join("/");
        if (!grouped[userKey]) grouped[userKey] = [];
        grouped[userKey].push(f);
      }
      setCandidats(grouped);
    };
    fetchCandidats();
  }, [selectedPoste]);

  // pour laner le test d'un utilisateur
  const handleLancer = async (fichierPaths: string[]) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/docker/start`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fichierPaths }),
      },
    );
    const { url } = await res.json();
    window.open(url, "_blank");
  };

  // les user donc les datas
  const users = Object.entries(candidats);

  return (
    <div className="flex flex-col lg:flex-row bg-[#242424] rounded-3xl p-6 w-full max-w-[900px] gap-5">
      {/* liste des offrea gauche */}
      <div className="lg:w-[280px] shrink-0 flex flex-col gap-2">
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
          Offres
        </span>
        <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto">
          {postes.length === 0 ? (
            <p className="text-white/15 text-xs text-center py-4">
              Aucune offre
            </p>
          ) : (
            postes.map((poste) => (
              <button
                key={poste.id_poste}
                onClick={() => setSelectedPoste(poste.id_poste)}
                className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                  selectedPoste === poste.id_poste
                    ? "bg-white/10 border-white/20 text-white font-semibold"
                    : "bg-white/5 border-white/10 text-white/50 hover:text-white/80 hover:border-white/20"
                }`}
              >
                {poste.display_name_fr}
              </button>
            ))
          )}
        </div>
      </div>

      {/* partie des candidature */}
      <div className="flex-1">
        {selectedPoste === null ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-white/15 text-sm">Sélectionnez une offre</p>
          </div>
        ) : (
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
              users.map(([userKey, fichiers]) => {
                const userId = userKey.split("_")[1];
                return (
                  <div
                    key={userKey}
                    className="grid grid-cols-[1fr_auto_80px] gap-3 px-4 py-3 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-white/80 text-sm font-medium truncate">
                        {userKey}
                      </span>
                      <button
                        onClick={() =>
                          window.open(`/account?user=${userId}`, "_blank")
                        }
                        className="bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 text-[10px] font-bold uppercase tracking-wider py-1.5 rounded-lg border border-emerald-500/20 transition-all"
                      >
                        Voir l'utilisateur
                      </button>
                    </div>
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
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
