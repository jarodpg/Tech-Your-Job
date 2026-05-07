"use client";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import Postlite from "../components/post-lite";
import SideBareFiltre from "../components/SideBareFiltre";
import Offre_Preview from "../components/Offre_Preview";

import { useState } from "react";

const test = [
  {
    PP: "/logo.png", // imageUrl
    Entreprise: "TechCorp", // companyName
    SinceAgo: "Il y a 3 jours", // postedDaysAgo
    Titre: "Développeur React", // title
    Description: "Développement d'interfaces modernes.",

    Skills: ["React", "Frontend"], // tags[].text

    TypeContract: "CDI", // valeur par défaut (à adapter)
    Pays: "France", // valeur par défaut
    Salaire: 45, // extrait de "45€/h"
    Type: "Temps plein", // valeur par défaut
    TypeRemote: "Hybride", // valeur par défaut
    JourRemote: 2, // valeur par défaut
    AnneExperience: 2, // valeur par défaut
    DevisMoney: "€/h", // extrait de "45€/h"
  },
  {
    id: 2,
    title: "Développeur test",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
];

export default function Offre_Page() {
  const [open, setOpen] = useState(false);

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
            <SideBareFiltre />
          </div>

          {/* Liste des offres */}
          <div className="bg-[#242424]">
            <div className="grid grid-cols-3 gap-10 px-5 mr-8">
              {test.map((item, i) => (
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

          <button onClick={() => setOpen(true)}>OPEN</button>

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
