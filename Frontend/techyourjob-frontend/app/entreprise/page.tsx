"use client";

import { useState, useEffect } from "react";

import Header from "../components/NavBar/header";
import Entreprise_Preview from "../components/Entreprise/Entreprise_Complet";
import SideBareEntreprise from "../components/Entreprise/FIltre_entreprise";
import Entreprise_lite from "../components/Entreprise/Entreprise_lite";
import SearchBar from "../components/Autre/searchBar";

import { Get_Enterprises } from "../services/Entreprise/Get_Enterprises";
import { Get_Enterprise_Top } from "../services/Entreprise/Top_X_entreprise";

export default function Entreprise_All() {
  // const entreprise
  const [entreprises, setEntreprises] = useState([]);
  const [topEntreprises, setTopEntreprises] = useState([]);
  const [selectedEntreprise, setSelectedEntreprise] = useState(null);

  // pour les filtres
  const [filters, setFilters] = useState({
    secteur: null,
    type: null,
    remote: null,
  });

  // pour le top des entreprises
  useEffect(() => {
    const fetchTop = async () => {
      const top = await Get_Enterprise_Top(5);
      setTopEntreprises(top);
    };
    fetchTop();
  }, []);

  // on va recuperer X entreprise et on gere les filtres pour aller recharger
  useEffect(() => {
    const fetchEntreprises = async () => {
      const data = await Get_Enterprises(
        false,
        0,
        filters.sectors,
        filters.types,
      );
      setEntreprises(data);
    };
    fetchEntreprises();
  }, [filters]);

  const handleFilterChange = (newFilter) => {
    setFilters((prev) => ({ ...prev, ...newFilter }));
  };

  const Top = topEntreprises[0];
  const petite = topEntreprises.slice(1);

  return (
    <div className="flex flex-col bg-[#1a1a1a] min-h-screen">
      <Header />

      {/* Entreprises à la une */}
      <div className="px-6 py-5 border-b border-white/06">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">
          - Entreprises à la une
        </p>

        {Top && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-3 md:h-32">
            <div className="bg-[#111113] border border-purple-500/25 rounded-2xl p-4 flex flex-col justify-between cursor-pointer hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-900/40 flex items-center justify-center shrink-0 overflow-hidden">
                  {Top.logo ? (
                    <img
                      src={Top.logo}
                      alt={Top.nom_compagnie}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <span className="text-purple-300 font-bold text-base">
                      {Top.nom_compagnie?.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-100">
                    {Top.nom_compagnie}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {Top.type_entreprise} - {Top.ville}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {(Top.secteur_entreprise || []).map(
                    (s: string, i: number) => (
                      <span
                        key={i}
                        className="text-[10px] px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-semibold uppercase tracking-wider"
                      >
                        {s}
                      </span>
                    ),
                  )}
                </div>
                <span className="text-xs text-gray-500">
                  <span className="text-purple-400 font-semibold">
                    {Top.nb_offre ?? 0}
                  </span>{" "}
                  offres actives
                </span>
              </div>
            </div>

            {petite.map((e: any) => (
              <div
                key={e.id_entreprise}
                className="bg-[#111113] rounded-2xl p-4 flex flex-col justify-between cursor-pointer hover:scale-102"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-900/30 flex items-center justify-center overflow-hidden">
                  {e.logo ? (
                    <img
                      src={e.logo}
                      alt={e.nom_compagnie}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-purple-300 font-bold text-sm">
                      {e.nom_compagnie?.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-100">
                    {e.nom_compagnie}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {e.ville} -{" "}
                    <span className="text-purple-400">
                      {e.nb_offre ?? 0} offres
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-[0.4fr_2.6fr] bg-[#2C2C2C] mt-2">
        <div className="border-r border-white/10">
          <SideBareEntreprise onFilterChange={handleFilterChange} />
        </div>
        <div className="flex flex-col">
          {/* <SearchBar {...}/> */}
          <div className="flex flex-row justify-between items-center px-9 mt-4 mb-2">
            <h2 className="text-sm font-semibold text-gray-200">
              Toutes les entreprises
            </h2>
            <span className="text-xs text-gray-500">
              {entreprises.length} entreprises
            </span>
          </div>
          <div className="flex flex-col gap-2 px-5">
            {entreprises.map((item: any) => (
              <Entreprise_lite
                onClick={() => setSelectedEntreprise(item)}
                key={item.id_entreprise}
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
