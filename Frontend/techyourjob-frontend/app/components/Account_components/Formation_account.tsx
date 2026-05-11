"use client";
import { useState, useEffect } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { LuBookPlus } from "react-icons/lu";

function Experience_Pro({
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
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-start gap-4 w-full">
        <img src={img} alt={Nom} className="w-16 h-16 object-cover" />
        <div className="flex flex-col flex-1">
          <div className="flex flex-row justify-between items-center w-full">
            <span className="flex items-center gap-2">
              <MdOutlineMapsHomeWork />
              <h1 className="font-bold">{Nom}</h1>
            </span>
            <div className="felx flex-col cursor-pointer">
              <h4 className="flex items-center gap-1 text-sm text-gray-400">
                Diplome{" "}
                <span>
                  <RiFilePaper2Line />
                </span>
              </h4>
              <h4 className="flex items-center gap-1 text-sm text-gray-400">
                Competences{" "}
                <span>
                  <LiaBuromobelexperte />
                </span>
              </h4>
            </div>
          </div>

          <h6 className="text-gray-400">{Titre}</h6>
          <h6 className="text-gray-500 text-sm">{Date}</h6>
        </div>
      </div>
      <p className="mt-5 w-full text-gray-300">{Description}</p>
    </div>
  );
}

export default function Formation_Account() {
  const [Phone, setPhone] = useState("0636114556");
  const [Email, setEmail] = useState("gabin.sosniak@gmail.com");

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
      <h1 className="flex items-center gap-4">
        Formation
        <span>
          <FaPencil />
        </span>
      </h1>
      <Experience_Pro
        img="img"
        Nom="Passe avenir souteien"
        Titre="Ambleteuse"
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
