"use client";
import { useState } from "react";

const secteurs = ["SaaS", "FinTech", "Cybersécurité", "IA / Data", "DevTools"];
const types = ["Startup", "Scale-up", "Grand groupe", "Agence", "ESN"];
const remotes = ["Présentiel", "Hybride", "Full remote"];

export default function SideBareEntreprise({ onFilterChange }) {
  const [secteur, setSecteur] = useState(null);
  const [type, setType] = useState(null);
  const [remote, setRemote] = useState(null);

  const Item = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all
        ${
          active
            ? "bg-purple-900/20 text-purple-300"
            : "text-gray-300 hover:bg-purple-700/20"
        }
        hover:scale-102
        `}
    >
      {label}
    </button>
  );

  return (
    <div className="px-3 py-5 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 px-3 mb-1">
          Secteur
        </p>
        {secteurs.map((s) => (
          <Item
            key={s}
            label={s}
            active={secteur === s}
            onClick={() => {
              const val = secteur === s ? null : s;
              setSecteur(val);
              onFilterChange({ secteur: val });
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 px-3 mb-1">
          Type d'entreprise
        </p>
        {types.map((t) => (
          <Item
            key={t}
            label={t}
            active={type === t}
            onClick={() => {
              const val = type === t ? null : t;
              setType(val);
              onFilterChange({ type: val });
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 px-3 mb-1">
          Remote
        </p>
        {remotes.map((r) => (
          <Item
            key={r}
            label={r}
            active={remote === r}
            onClick={() => {
              const val = remote === r ? null : r;
              setRemote(val);
              onFilterChange({ remote: val });
            }}
          />
        ))}
      </div>

      <button
        onClick={() => {
          setSecteur(null);
          setType(null);
          setRemote(null);
          onFilterChange({ secteur: null, type: null, remote: null });
        }}
        className="text-xs text-white-500 border border-white/10 px-4 py-2 rounded-full hover:border-white/20 transition-colors w-fit mx-auto mt-2"
      >
        Reset
      </button>
    </div>
  );
}
