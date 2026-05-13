"use client";

import { FaPencil } from "react-icons/fa6";
import { TbTarget } from "react-icons/tb";
import { useState } from "react";

import Competences_Plus from "../Voir_Plus_Account/Competence_Plus";
import Competence_Edit from "../Account_Modif/Competence_Edit";

function Competence({
  image,
  titre,
  emplacement,
}: {
  image: string;
  titre: string;
  emplacement: string;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[64px_1fr] gap-4 items-center py-3">
        <img
          src={image}
          className="w-16 h-16 object-cover rounded-xl border border-white/10 bg-[#333]"
        />
        <div className="flex flex-col">
          <h2 className="text-white text-[15px] font-bold">{titre}</h2>
          <h6 className="text-gray-400 text-[13px] font-normal">
            {emplacement}
          </h6>
        </div>
      </div>
    </div>
  );
}

interface CompetenceItem {
  competence: string;
  source: string;
}

interface Info {
  competences_experience: CompetenceItem[];
  competences_formation: CompetenceItem[];
}

export default function Competence_Preview({ infos }: { infos: Info }) {
  // poup voir tt competences
  const [isOpen, setIsOpen] = useState(false);
  // popup de modif
  const [isEditOpen, setIsEditOpen] = useState(false);

  // affichage 3 dernieres
  const toutes = [
    ...infos.competences_experience,
    ...infos.competences_formation,
  ];
  const apercu = toutes.slice(-3);

  return (
    <div className="flex flex-col bg-[#2a2a2a] rounded-3xl p-6 w-[340px]">
      <Competences_Plus
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        competences={toutes}
      />
      <Competence_Edit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        competences={toutes}
      />
      <h1 className="flex items-center gap-3 text-white text-xl font-bold mb-2">
        Compétences
        <span onClick={() => setIsEditOpen(true)} className="cursor-pointer">
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>
      {apercu.map(({ competence, source }, i) => (
        <div key={i}>
          <div className="bg-white/12 h-px w-full"></div>
          <Competence
            image="/img/epitech.png"
            titre={competence}
            emplacement={source}
          />
        </div>
      ))}
      <div className="bg-white/12 h-px w-full"></div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 text-gray-400 text-sm py-3 cursor-pointer hover:text-white transition-colors"
      >
        <TbTarget className="text-base" />
        Voir plus
      </button>
    </div>
  );
}
