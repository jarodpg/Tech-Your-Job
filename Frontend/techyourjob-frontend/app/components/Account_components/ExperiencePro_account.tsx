"use client";
import { useState, useEffect } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { LuBookPlus } from "react-icons/lu";

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
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-start gap-4 w-full">
        <img src={img} alt={titre} className="w-16 h-16 object-cover" />
        <div className="flex flex-col flex-1">
          <div className="flex flex-row justify-between items-center w-full">
            <span className="flex items-center gap-2">
              <MdOutlineMapsHomeWork />
              <h1 className="font-bold">{titre}</h1>
            </span>
            <h4 className="flex items-center gap-1 text-sm text-gray-400">
              Competences{" "}
              <span>
                <LiaBuromobelexperte />
              </span>
            </h4>
          </div>

          <h6 className="text-gray-400">{Lieu}</h6>
          <h6 className="text-gray-500 text-sm">{Date}</h6>
        </div>
      </div>
      <p className="mt-5 w-full text-gray-300">{Description}</p>
    </div>
  );
}

export default function ExperiencePro_account() {
  const [Phone, setPhone] = useState("0636114556");
  const [Email, setEmail] = useState("gabin.sosniak@gmail.com");

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
      <h1 className="flex items-center gap-4">
        Experience Professionnelles
        <span>
          <FaPencil />
        </span>
      </h1>
      <Experience_Pro
        img="img"
        titre="Passe avenir souteien"
        Lieu="Ambleteuse"
        Date="15/07/2007 sdsd"
        Description="dsds dsdsddsdsddsdsddsdsddsdsddsdsddsdsddsdsds d sd sdsdsdsdss ds sd sd sd d sdd s ds ds dsd s d sds ds"
      />
      <button className="flex gap-3 items-center cursor-pointer">
        <span>
          <LuBookPlus />
        </span>
        Voir plus
      </button>
    </div>
  );
}
