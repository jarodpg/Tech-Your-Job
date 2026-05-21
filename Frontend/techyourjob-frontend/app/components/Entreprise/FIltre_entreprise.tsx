"use client";
import { useState } from "react";
const SECTEURS = [
  "Automobile",
  "Banque",
  "B2B",
  "B2C",
  "Cloud",
  "Hardware",
  "Construction",
  "Consultant",
  "E-Commerce",
  "Finance",
  "Transport",
  "Medicale",
  "Ressources Humaine",
  "Import Export",
  "Industrie",
  "Assurance",
  "Media",
  "Reseau",
  "Imprimerie",
  "Publication",
  "Immobilier",
  "Revente",
  "Robotique",
  "SAAS",
  "Service",
  "Software",
  "Telecommunication",
  "Voyage",
];

const TYPES = [
  "Software",
  "Web",
  "Consultant",
  "Startup",
  "Produit",
  "Service",
];

export default function SideBareEntreprise({ onFilterChange }) {
  // on save ceux qu'on coche
  const [secteurs, setSecteurs] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  // quand on active un item
  const toggleItem = (list: string[], item: string) =>
    list.includes(item) ? list.filter((i) => i !== item) : [...list, item];

  //chanegemnt de secteur
  const handleSecteur = (s: string) => {
    const updated = toggleItem(secteurs, s);
    setSecteurs(updated);
    onFilterChange({ sectors: updated.length ? updated : null });
  };

  //changement de type
  const handleType = (t: string) => {
    const updated = toggleItem(types, t);
    setTypes(updated);
    onFilterChange({ types: updated.length ? updated : null });
  };

  // pour le reset
  const handleReset = () => {
    setSecteurs([]);
    setTypes([]);
    onFilterChange({ sectors: null, types: null });
  };

  return (
    <div className="px-6 py-8 flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-bold text-zinc-100 tracking-tight">
          Filtres
        </h3>
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
          Affinez votre recherche
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <FilterGroup
          label="Secteur"
          items={SECTEURS}
          active={secteurs}
          onToggle={handleSecteur}
        />

        <FilterGroup
          label="Type d'entreprise"
          items={TYPES}
          active={types}
          onToggle={handleType}
        />
      </div>

      {(secteurs.length > 0 || types.length > 0) && (
        <button
          onClick={handleReset}
          className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.05] bg-zinc-900/50 px-6 py-3 rounded-xl hover:bg-zinc-800 hover:text-zinc-100 transition-all w-full mt-4"
        >
          Réinitialiser
        </button>
      )}
    </div>
  );
}

function FilterGroup({ label, items, active, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      {/* le name cliquable */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between group transition-colors"
      >
        <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {label}
          {active.length > 0 && (
            <span className="text-purple-500 ml-2">({active.length})</span>
          )}
        </p>
        <div
          className={`p-1 rounded-md bg-zinc-900/50 border border-white/[0.05] group-hover:bg-zinc-800 transition-all ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* chips des filtres */}
      {active.length > 0 && !open && (
        <div className="flex flex-wrap gap-2">
          {active.map((item) => (
            <button
              key={item}
              onClick={() => onToggle(item)}
              className="text-[10px] px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400 transition-all font-bold uppercase tracking-wider"
            >
              {item} <span className="ml-1 opacity-50">×</span>
            </button>
          ))}
        </div>
      )}

      {/* petit grille pour affiche ceux selectionner quand on ferme */}
      {open && (
        <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => onToggle(item)}
              className={`text-[10px] px-3 py-1.5 rounded-lg border font-bold uppercase tracking-wider transition-all ${
                active.includes(item)
                  ? "bg-purple-500/20 border-purple-500/40 text-purple-400"
                  : "bg-zinc-900/30 border-white/[0.05] text-zinc-500 hover:border-zinc-700 hover:text-zinc-300 hover:bg-zinc-800/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
