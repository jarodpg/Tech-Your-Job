"use client";
import { useState } from "react";
import Offre_Preview from "../Offre/Offre_Preview";

export default function Entreprise_Preview({ entreprise, onClose }) {
  if (!entreprise) return null;

  const offres = entreprise.offre || [];

  // poste selectionner
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-end"
      onClick={onClose}
    >
      <div
        className="bg-[#111113] h-full w-[520px] flex flex-col border-l border-white/08 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/08">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-900/40 flex items-center justify-center shrink-0 overflow-hidden">
                {entreprise.logo ? (
                  <img
                    src={entreprise.logo}
                    alt={entreprise.nom_compagnie}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-purple-300 font-bold text-xl">
                    {entreprise.nom_compagnie?.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-100">
                  {entreprise.nom_compagnie}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {entreprise.type_entreprise} - {entreprise.ville.slice(2, -2)}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-300 transition-colors text-xl p-1"
            >
              x
            </button>
          </div>

          {/* Secteurs */}
          <div className="flex gap-2 flex-wrap">
            {(entreprise.secteur_entreprise || []).map((s, i) => (
              <span
                key={i}
                className="text-[10px] px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-semibold uppercase tracking-wider"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-b border-white/08">
          {[
            {
              label: "Offres actives",
              value: entreprise.nb_offre || "Non reseigné",
            },
            {
              label: "Ranking",
              value: entreprise.rank ? `#${entreprise.rank}` : "Non reseigné",
            },
            {
              label: "Ville",
              value: entreprise.ville.slice(2, -2) || "Non reseigné",
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center py-4 border-r border-white/08 last:border-r-0 justify-center text-center"
            >
              <p className="text-base font-bold text-purple-400">{value}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="p-6 border-b border-white/08">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
            À propos
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            {entreprise.nom_compagnie} est une entreprise spécialisée dans le
            secteur{" "}
            {(entreprise.secteur_entreprise || [])[0] || "non renseigné"}, basée
            à {entreprise.ville.slice(2, -2) || "Non reseigné"}. Elle propose
            actuellement {entreprise.nb_offre ?? 0} offres actives sur la
            plateforme.
          </p>
        </div>

        {/* Offres */}
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
            Offres disponibles{" "}
            <span className="text-purple-400 ml-1">{offres.length}</span>
          </p>

          {offres.length === 0 ? (
            <p className="text-white/15 text-xs text-center py-4">
              Aucune offre
            </p>
          ) : (
            offres.map((offre) => (
              <div
                key={offre.id_poste}
                // on ouvre le poste de l'entreprise
                onClick={() => {
                  setSelectedPost(offre);
                  setOpen(true);
                }}
                className="bg-[#1a1a1c] border border-white/06 rounded-xl px-4 py-3 flex items-center justify-between hover:scale-102 cursor-pointer transition-all"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    {offre.display_name_fr}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {offre.since_posted}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-purple-400 font-semibold">
                    {offre.salaire_annuel_moyen}
                  </p>
                  <p className="text-[10px] text-gray-600">/ an</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {open && selectedPost && (
        <div onClick={(e) => e.stopPropagation()}>
          <Offre_Preview onClose={() => setOpen(false)} Poste={selectedPost} />
        </div>
      )}
    </div>
  );
}
