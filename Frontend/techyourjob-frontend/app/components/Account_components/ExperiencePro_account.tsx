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

interface Info {
  nom_établissement: string;
  id: number;
  titre: string;
  date_debut: string;
  date_fin: string;
  description: string;

  nom_entreprise: string;
}

export default function ExperiencePro_account({ infos }: { infos: Info[] }) {
  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 gap-5">
      <h1 className="flex items-center gap-3 text-white font-bold">
        Expériences Professionnelles
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>
      {infos.map((exp, i) => (
        <div key={exp.id_experience}>
          <Experience_Pro
            img="/img/default.png"
            titre={exp.titre}
            Lieu={exp.nom_entreprise}
            Date={`${exp.date_debut} - ${exp.date_fin}`}
            Description={exp.description}
          />
          {i < infos.length - 1 && (
            <div className="bg-white/12 h-px w-full mt-4" />
          )}
        </div>
      ))}
      <div className="bg-white/12 h-px w-full"></div>

      <button className="flex items-center justify-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
        <IoBookOutline className="text-base" />
        Voir plus
      </button>
    </div>
  );
}
