"use client";

interface Entreprise {
  id: number;
  name: string;
  logo: string;
  type_entreprise: string;
  secteur_entreprise: string[];
  ville: string[];
  nbr_offre: number;
}

export default function Entreprise_lite({
  entreprise,
  onClick,
}: {
  entreprise: Entreprise;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-[#111113] rounded-xl px-4 py-3 grid grid-cols-[40px_1fr_auto] gap-4 items-center cursor-pointer hover:border-white/12 hover:scale-101 hover:bg-[#161618] transition-all"
    >
      {/* Logo */}
      <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-300 font-bold text-sm shrink-0">
        {entreprise.logo}
      </div>

      {/* Infos */}
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-sm font-semibold text-gray-100 truncate">
          {entreprise.name}
          <span className="text-gray-500 font-normal ml-2 text-xs">
            {entreprise.ville[0]}
          </span>
        </p>
        <div className="flex gap-2">
          {entreprise.secteur_entreprise.map((s, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Offres */}
      <div className="text-right shrink-0">
        <p className="text-sm font-bold text-purple-400">
          {entreprise.nbr_offre}
        </p>
        <p className="text-[10px] text-gray-500">offres</p>
      </div>
    </div>
  );
}
