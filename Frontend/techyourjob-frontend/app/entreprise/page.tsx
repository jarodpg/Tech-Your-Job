"use client";

import { useState, useEffect } from "react";

import Header from "../components/NavBar/header";
import Entreprise_Preview from "../components/Entreprise/Entreprise_Complet";
import SideBareEntreprise from "../components/Entreprise/FIltre_entreprise";
import Entreprise_lite from "../components/Entreprise/Entreprise_lite";
import SearchBar from "../components/Autre/searchBar";

// data pour tester comme route du back
const Data = [
  {
    id: 1,
    ranking: 15,
    name: "entreprise1",
    logo: "LG",
    type_entreprise: "software",
    secteur_entreprise: ["Saas"],
    ville: ["lille", "France"],
    nbr_offre: 5,
  },
  {
    id: 2,
    ranking: 15,
    name: "entreprise2",
    logo: "LG",
    type_entreprise: "software",
    secteur_entreprise: ["Saas", "LOL"],
    ville: ["lille", "France"],
    nbr_offre: 15,
  },
  {
    id: 3,
    ranking: 17,
    name: "entreprise3",
    logo: "LG",
    type_entreprise: "software",
    secteur_entreprise: ["Saas"],
    ville: ["lille", "France"],
    nbr_offre: 98,
  },
  {
    id: 4,
    ranking: 3,
    name: "entreprise4",
    logo: "LG",
    type_entreprise: "software",
    secteur_entreprise: ["Saas"],
    ville: ["lille", "France"],
    nbr_offre: 1,
  },
  {
    id: 5,
    ranking: 1,
    name: "entreprise44",
    logo: "LG",
    type_entreprise: "software",
    secteur_entreprise: ["Saas"],
    ville: ["lille", "France"],
    nbr_offre: 1,
  },
];

export default function Entreprise_All() {
  // top 5 calculer
  const top3 = [...Data].sort((a, b) => b.ranking - a.ranking).slice(0, 5);
  const [hero, ...smalls] = top3;

  // entreprise qu'on selectionne
  const [selectedEntreprise, setSelectedEntreprise] = useState(null);
  return (
    <div className="flex flex-col bg-[#1a1a1a] min-h-screen">
      <Header />

      {/* Entreprises à la une */}
      <div className="px-6 py-5 border-b border-white/06">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">
          - Entreprises à la une
        </p>

        <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-3 h-32">
          {/* Grande card pour la top 1 */}
          <div className="bg-[#111113] border border-purple-500/25 rounded-2xl p-4 flex flex-col justify-between cursor-pointer hover:border-purple-500/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-900/40 flex items-center justify-center text-purple-300 font-bold text-base shrink-0">
                {hero.logo}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-100">
                  {hero.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {hero.type_entreprise} - {hero.ville[0]}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {hero.secteur_entreprise.map((s, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-semibold uppercase tracking-wider"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                <span className="text-purple-400 font-semibold">
                  {hero.nbr_offre}
                </span>{" "}
                offres actives
              </span>
            </div>
          </div>

          {/* Petites cards pur le top 2 et 3 */}
          {smalls.map((e) => (
            <div
              key={e.id}
              className="bg-[#111113] rounded-2xl p-4 flex flex-col justify-between cursor-pointer hover:scale-102"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-300 font-bold text-sm">
                {e.logo}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-100">{e.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {e.ville[0]} -{" "}
                  <span className="text-purple-400">{e.nbr_offre} offres</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[0.4fr_2.6fr] bg-[#2C2C2C] mt-2">
        <div className="border-r border-white/10">
          <SideBareEntreprise />
        </div>
        <div className="flex flex-col">
          <SearchBar />
          <div className="flex flex-row justify-between items-center px-9 mt-4 mb-2">
            <h2 className="text-sm font-semibold text-gray-200">
              Toutes les entreprises
            </h2>
            <span className="text-xs text-gray-500">150 entreprises</span>
          </div>
          <div className="flex flex-col gap-2 px-5">
            {Data.map((item, i) => (
              <Entreprise_lite
                onClick={() => setSelectedEntreprise(item)}
                key={i}
                entreprise={item}
              />
            ))}
            {selectedEntreprise && (
              <Entreprise_Preview
                entreprise={selectedEntreprise}
                onClose={() => setSelectedEntreprise(null)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
