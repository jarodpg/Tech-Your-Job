"use client";
import { useState } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { PiGraduationCap } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";

function Formation({
  img,
  Nom,
  Titre,
  Date,
  Description,
}: {
  img: string;
  Nom: string;
  Titre: string;
  Date: string;
  Description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row items-start gap-4 w-full">
        <img
          src={img}
          alt={Nom}
          className="w-16 h-16 object-cover rounded-xl border border-white/10 bg-[#333] flex-shrink-0"
        />
        <div className="flex flex-col flex-1">
          <div className="flex flex-row justify-between items-start w-full">
            <span className="flex items-center gap-2">
              <PiGraduationCap className="text-teal-400 text-lg" />
              <h1 className="text-white font-bold text-sm">{Nom}</h1>
            </span>
            <div className="flex flex-col items-end gap-0.5 cursor-pointer">
              <h4 className="flex items-center gap-1 text-sm text-gray-300">
                Diplôme <RiFilePaper2Line className="text-teal-400 text-base" />
              </h4>
              <h4 className="flex items-center gap-1 text-sm text-gray-300">
                Compétences{" "}
                <LiaBuromobelexperte className="text-teal-400 text-base" />
              </h4>
            </div>
          </div>
          <h6 className="text-gray-400 text-sm">{Titre}</h6>
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

export default function Formation_Account() {
  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 gap-5">
      <h1 className="flex items-center gap-3 text-white font-bold">
        Formations
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>

      <Formation
        img="/img/epitech.png"
        Nom="Epitech, l'école de l'excellence informatique"
        Titre="Bachelor Informatique - Spécialité IA/Data"
        Date="2025 - 2028"
        Description="Lorem ipsum dolor sit amet consectetur. Vitae sollicitudin at mauris mauris interdum quis elementum mi ac. Penatibus sed ut a nunc vitae volutpat orci at orci. Eu in blandit nibh ac. Eget ipsum sapien nibh blandit facilisi libero ultricies tortor ut. Faucibus tristique ornare imperdiet quis quisque et elementum id eget. Felis sagittis commodo lectus non elementum pellentesque elit quis. Sapien lectus pretium eu nec. Commodo elit diam urna neque aliquam vivamus scelerisque. Enim dignissim maecenas velit nunc nisl tortor. Tortor felis purus hac"
      />
      <div className="bg-white/12 h-px w-full"></div>
      <Formation
        img="/img/mireille.png"
        Nom="Lycée Mireille Grenet"
        Titre="Baccalauréat Général - Spécialité Mathématiques, Physique-Chimie"
        Date="2022 - 2025"
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
