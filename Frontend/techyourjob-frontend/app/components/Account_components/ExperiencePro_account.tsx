"use client";
import { useState } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

function Experience_Pro({
  img,
  titre,
  Lieu,
  Date,
  Description,
}: {
  img: string;
  titre: string;
  Lieu: string;
  Date: string;
  Description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row items-start gap-4 w-full">
        <img
          src={img}
          alt={titre}
          className="w-16 h-16 object-cover rounded-xl border border-white/10 bg-[#333] flex-shrink-0"
        />
        <div className="flex flex-col flex-1">
          <div className="flex flex-row justify-between items-center w-full">
            <span className="flex items-center gap-2">
              <MdOutlineMapsHomeWork className="text-teal-400" />
              <h1 className="text-white font-bold text-sm">{titre}</h1>
            </span>
            <h4 className="flex items-center gap-1 text-sm text-gray-300">
              Compétences
              <LiaBuromobelexperte className="text-teal-400 text-base" />
            </h4>
          </div>
          <h6 className="text-gray-400 text-sm">{Lieu}</h6>
          <h6 className="text-gray-500 text-xs">{Date}</h6>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        {expanded ? Description : Description.slice(0, 280)}
        {!expanded && Description.length > 280 && (
          <span>
            {" "}
            hac{" "}
            <button
              onClick={() => setExpanded(true)}
              className="text-gray-300 underline cursor-pointer"
            >
              ...voir plus
            </button>
          </span>
        )}
      </p>
    </div>
  );
}

export default function ExperiencePro_account() {
  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 gap-5">
      <h1 className="flex items-center gap-3 text-white font-bold">
        Expériences Professionnelles
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>

      <Experience_Pro
        img="/img/passCitoyen.png"
        titre="Pass Avenir Citoyen | Département de l'Oise"
        Lieu="Le Jardin Des Deux Vallées"
        Date="décembre 2025, 1 semaine"
        Description="Lorem ipsum dolor sit amet consectetur. Vitae sollicitudin at mauris mauris interdum quis elementum mi ac. Penatibus sed ut a nunc vitae volutpat orci at orci. Eu in blandit nibh ac. Eget ipsum sapien nibh blandit facilisi libero ultricies tortor ut. Faucibus tristique ornare imperdiet quis quisque et elementum id eget. Felis sagittis commodo lectus non elementum pellentesque elit quis. Sapien lectus pretium eu nec. Commodo elit diam urna neque aliquam vivamus scelerisque. Enim dignissim maecenas velit nunc nisl tortor. Tortor felis purus hac"
      />
      <div className="bg-white/12 h-px w-full"></div>
      <Experience_Pro
        img="/img/caisseEpargne.png"
        titre="Auxiliaire été"
        Lieu="Caisse d'Epargne de Ressons-sur-Matz"
        Date="juillet 2025 - août 2025, 5 semaines"
        Description="Lorem ipsum dolor sit amet consectetur. Vitae sollicitudin at mauris mauris interdum quis elementum mi ac. Penatibus sed ut a nunc vitae volutpat orci at orci. Eu in blandit nibh ac. Eget ipsum sapien nibh blandit facilisi libero ultricies tortor ut. Faucibus tristique ornare imperdiet quis quisque et elementum id eget. Felis sagittis commodo lectus non elementum pellentesque elit quis. Sapien lectus pretium eu nec. Commodo elit diam urna neque aliquam vivamus scelerisque. Enim dignissim maecenas velit nunc nisl tortor. Tortor felis purus hac"
      />
      <div className="bg-white/12 h-px w-full"></div>

      <button className="flex items-center justify-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
        <IoBookOutline className="text-base" />
        Voir plus
      </button>
    </div>
  );
}
