"use client";
import { useState } from "react";

import { FaPencil } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface Info {
  nom: string;
  prenom: string;
  profession_actuelle: string;
  localisation: string;
  pays: string;
  banniere: string;
  PP: string;
}

export default function Infos_generale({ infos }: { infos: Info }) {
  const [banniere, setBanniere] = useState("d");
  const [pp, setPp] = useState("d");
  const [name, setName] = useState("Nathan Sosniak");
  const [Status, setStatus] = useState(
    "Étudiant à Epitech, l'école de l'excellence informatique",
  );
  const [emplacement, setEmplacement] = useState("Lille, France");
  const [logo, setLogo] = useState("d");
  const [Ecole_emplacement, setEcole_emplacement] = useState(
    "Epitech, l'école de l'excellence informatique",
  );
  const [Date, setDate] = useState("2025 - 2028");

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 gap-3">
      <h1 className="flex items-center gap-3 text-white font-bold">
        Informations Générales
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>

      <div className="relative mb-8">
        <img
          className="w-full h-36 object-cover rounded-2xl bg-[#1e3a4a]"
          src={infos.banniere}
        />
        <img
          className="absolute -bottom-8 left-4 w-20 h-20 object-cover rounded-xl border-[3px] border-[#242424]"
          src={infos.PP}
        />
      </div>

      <div className="flex flex-row items-start gap-6 pl-24 pb-2">
        <div className="flex flex-col flex-1">
          <h1 className="text-white font-bold text-base">
            {infos.nom} {infos.prenom}
          </h1>
          <p className="text-gray-400 text-xs leading-snug">
            {infos.profession_actuelle}
          </p>
        </div>
        <span className="flex items-center gap-1 pt-0.5 whitespace-nowrap flex-shrink-0">
          <HiOutlineLocationMarker className="text-purple-400" />
          <h2 className="text-gray-300 text-sm">
            {infos.localisation} {infos.pays}
          </h2>
        </span>
        <div className="grid grid-cols-[32px_1fr] gap-2 items-start flex-shrink-0">
          <img src={logo} className="w-8 h-8 object-cover rounded-lg" />
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-xs leading-snug">
              {Ecole_emplacement}
            </h2>
            <h6 className="text-gray-400 text-xs font-normal">{Date}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
