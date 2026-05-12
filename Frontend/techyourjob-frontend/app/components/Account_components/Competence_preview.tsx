"use client";

import { FaPencil } from "react-icons/fa6";
import { TbTarget } from "react-icons/tb";

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

export default function Competence_Preview() {
  return (
    <div className="flex flex-col bg-[#2a2a2a] rounded-3xl p-6 w-[340px]">
      <h1 className="flex items-center gap-3 text-white text-xl font-bold mb-2">
        Compétences
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>
      <Competence
        image="/img/epitech.png"
        titre="Design UI/UX"
        emplacement="Epitech, l'école de l'excellence informatique"
      />
      <div className="bg-white/12 h-px w-full"></div>
      <Competence
        image="/img/caisse.png"
        titre="Gestion de la clientèle"
        emplacement="Caisse d'Epargne de Ressons-sur-Matz"
      />
      <div className="bg-white/12 h-px w-full"></div>
      <Competence
        image="/img/forme.png"
        titre="Premiers Secours"
        emplacement="Association FORME"
      />
      <div className="bg-white/12 h-px w-full"></div>
      <button className="flex items-center justify-center gap-2 text-gray-400 text-sm py-3 cursor-pointer hover:text-white transition-colors">
        <TbTarget className="text-base" />
        Voir plus
      </button>
    </div>
  );
}
