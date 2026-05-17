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
  // on save ceux qu'on cauche
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
    <div className="px-3 py-5 flex flex-col gap-8">
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

      {(secteurs.length > 0 || types.length > 0) && (
        <button
          onClick={handleReset}
          className="text-xs text-gray-500 border border-white/10 px-4 py-2 rounded-full hover:border-white/20 transition-colors w-fit mx-auto mt-2"
        >
          Reset
        </button>
      )}
    </div>
  );
}

function FilterGroup({ label, items, active, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* le name cliquable */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-3 py-3 hover:bg-white/5 rounded-lg transition-colors"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500">
          {label}
          {active.length > 0 && (
            <span className="text-purple-400 ml-1">({active.length})</span>
          )}
        </p>
        <span
          className={`text-gray-500 text-sm transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          v
        </span>
      </button>

      {/* cjhips des filtres */}
      {active.length > 0 && !open && (
        <div className="flex flex-wrap gap-2 px-2">
          {active.map((item) => (
            <button
              key={item}
              onClick={() => onToggle(item)}
              className="text-xs px-3 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 hover:bg-red-900/20 hover:border-red-500/30 hover:text-red-300 transition-all"
            >
              {item} x
            </button>
          ))}
        </div>
      )}

      {/* petit grille pour affiche ceux selectionner quand on ferme */}
      {open && (
        <div className="flex flex-wrap gap-2 px-2">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => onToggle(item)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                active.includes(item)
                  ? "bg-purple-900/30 border-purple-500/30 text-purple-300"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300"
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
