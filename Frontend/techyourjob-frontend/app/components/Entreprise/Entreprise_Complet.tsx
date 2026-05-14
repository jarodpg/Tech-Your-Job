"use client";

const offres_exemple = [
  {
    id: 1,
    titre: "Développeur Fullstack",
    contrat: "CDI",
    ville: "Lille",
    salaire: "45-60k",
  },
  {
    id: 2,
    titre: "Lead Developer",
    contrat: "CDI",
    ville: "Remote",
    salaire: "55-70k",
  },
  {
    id: 3,
    titre: "DevOps Engineer",
    contrat: "CDI",
    ville: "Paris",
    salaire: "50-65k",
  },
];

export default function Entreprise_Preview({ entreprise, onClose }) {
  if (!entreprise) return null;

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
              <div className="w-14 h-14 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-300 font-bold text-xl shrink-0">
                {entreprise.logo}
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-100">
                  {entreprise.name}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {entreprise.type_entreprise} - {entreprise.ville[0]}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-300 transition-colors text-xl p-1"
            >
              ✕
            </button>
          </div>

          {/* Secteurs */}
          <div className="flex gap-2 flex-wrap">
            {entreprise.secteur_entreprise.map((s, i) => (
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
            { label: "Offres actives", value: entreprise.nbr_offre },
            { label: "Ranking", value: `#${entreprise.ranking}` },
            { label: "Ville", value: entreprise.ville[0] },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center py-4 border-r border-white/08 last:border-r-0"
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
            {entreprise.name} est une entreprise spécialisée dans le secteur{" "}
            {entreprise.secteur_entreprise[0]}, basée à {entreprise.ville[0]}.
            Elle propose actuellement {entreprise.nbr_offre} offres actives sur
            la plateforme.
          </p>
        </div>

        {/* Offres */}
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
            Offres disponibles{" "}
            <span className="text-purple-400 ml-1">
              {offres_exemple.length}
            </span>
          </p>

          {offres_exemple.map((offre) => (
            <div
              key={offre.id}
              className="bg-[#1a1a1c] border border-white/06 rounded-xl px-4 py-3 flex items-center justify-between hover:border-white/12 cursor-pointer transition-all"
            >
              <div>
                <p className="text-sm font-semibold text-gray-200">
                  {offre.titre}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {offre.ville} - {offre.contrat}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-purple-400 font-semibold">
                  {offre.salaire}
                </p>
                <p className="text-[10px] text-gray-600">/ an</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
