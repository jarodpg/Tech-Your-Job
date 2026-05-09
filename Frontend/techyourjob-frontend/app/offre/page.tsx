"use client";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import Postlite from "../components/post-lite";
import SideBareFiltre from "../components/SideBareFiltre";
import Offre_Preview from "../components/Offre_Preview";

import { useState, useEffect } from "react";
import { Get_Offre } from "../services/Offre_Service";

// test
import dynamic from "next/dynamic";
const MapView = dynamic(() => import("../components/map_offre"), {
  ssr: false,
});

export default function Offre_Page() {
  // pour connaitre le dernier ID
  const [actuelId, setactuelId] = useState(1);

  const [open, setOpen] = useState(false);
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(true);

  const [FIltre, setFIltre] = useState({
    reverse: "false",
    page: 1,
    remote: null,
    contract: null,
    minsalary: null,
    maxsalary: null,
    location: null,
    distance: null,
    language: null,
    experience: null,
    age: null,
  });

  // affichage de la map ou non selon si filtre loc ou distance active
  const showMap = FIltre.location !== null || FIltre.distance !== null;

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data =
          (await Get_Offre(
            FIltre.reverse,
            actuelId,
            FIltre.minsalary,
            FIltre.maxsalary,
            FIltre.location,
            FIltre.distance,
            FIltre.contract,
            FIltre.remote,
            FIltre.language,
            FIltre.experience,
            FIltre.age,
          )) || [];
        setTest(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erreur API :", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [FIltre, actuelId]);

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="flex flex-col bg-[#242424] min-h-screen">
      <Header />

      {/* Barre de recherche */}
      <div className="flex bg-[#1A1A1A] py-8 border-b border-white/10">
        <div className="mx-auto">
          <SearchBar
            onFilterChange={(newFilters) => {
              setactuelId(1);
              setFIltre((prev) => ({ ...prev, ...newFilters }));
            }}
          />
        </div>
      </div>

      {/* Titre + bouton Filtres */}
      <div className="flex flex-row justify-between items-center px-15 py-5">
        <h1 className="font-bold text-4xl">Recommandation Job</h1>
        <button className="text-sm text-gray-400 border border-white/15 px-4 py-2 rounded-full hover:border-white/30 transition-colors">
          Filtres
        </button>
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-[0.6fr_2.4fr] mt-2">
        {/* Sidebar */}
        <div className="border-r border-white/10">
          <SideBareFiltre
            onFilterChange={(newFilters) =>
              setFIltre((prev) => ({ ...prev, ...newFilters }))
            }
          />
        </div>

        {showMap ? (
          <div className="px-5 py-2 h-[75vh]">
            <MapView
              location={FIltre.location ?? [48.8566, 2.3522]} // Paris par default
              distance={FIltre.distance}
            />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-10 px-5 mr-8 py-2">
            {(test ?? []).map((item, i) => (
              <Postlite
                key={i}
                job={item}
                onClick={() => {
                  setSelectedPost(item);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        )}
      </div>
      {!showMap && (
        <div className="flex flex-row">
          <button
            onClick={() => {
              setFIltre((prev) => ({ ...prev, reverse: "true" }));
              setactuelId(test[0]?.id_poste - 1);
            }}
          >
            Page précédente
          </button>

          <button
            onClick={() => {
              setFIltre((prev) => ({ ...prev, reverse: "false" }));
              setactuelId(test[test.length - 1]?.id_poste);
            }}
          >
            Page suivante
          </button>
        </div>
      )}

      {open && selectedPost && (
        <Offre_Preview onClose={() => setOpen(false)} Poste={selectedPost} />
      )}
    </div>
  );
}
