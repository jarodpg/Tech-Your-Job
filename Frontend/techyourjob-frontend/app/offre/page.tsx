"use client";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import Postlite from "../components/post-lite";
import SideBareFiltre from "../components/SideBareFiltre";
import Offre_Preview from "../components/Offre_Preview";

import { useState, useEffect } from "react";
import { Get_Offre } from "../services/Offre_Service";

export default function Offre_Page() {
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

  useEffect(() => {
    console.log("Filtres mis à jour :", FIltre);
    async function load() {
      try {
        setLoading(true);
        const data =
          (await Get_Offre(
            FIltre.reverse,
            FIltre.page,
            FIltre.minsalary ?? null,
            FIltre.maxsalary ?? null,
            FIltre.location ?? null,
            FIltre.distance ?? null,
            FIltre.contract ?? null,
            FIltre.remote ?? null,
            FIltre.language ?? null,
            FIltre.experience ?? null,
            FIltre.age ?? null,
          )) || [];
        console.log("DATA :", data);
        setTest(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erreur API :", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [FIltre]);

  const [selectedPost, setSelectedPost] = useState(null);
  return (
    <div className="flex flex-col bg-[#242424] min-h-screen">
      <Header />
      <div className="flex bg-[#1A1A1A] py-8">
        <div className="mx-auto">
          <SearchBar />
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between px-15 py-5">
          <h1 className="font-bold text-4xl">Recommandation Job</h1>
          <button>Filtres</button>
        </div>
        <div className="mt-[2%] grid grid-cols-[0.6fr_2.4fr]">
          {/* Sidebar filtres — Client Component */}
          <div className="bg-[#242424]">
            <SideBareFiltre
              onFilterChange={(newFilters) =>
                setFIltre((prev) => ({
                  ...prev,
                  ...newFilters,
                }))
              }
            />
          </div>

          {/* Liste des offres */}
          <div className="bg-[#242424]">
            <div className="grid grid-cols-3 gap-10 px-5 mr-8">
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
          </div>

          {open && selectedPost && (
            <Offre_Preview
              onClose={() => setOpen(false)}
              Poste={selectedPost}
            />
          )}
        </div>
      </div>
    </div>
  );
}
