"use client";
import { useState, useEffect } from "react";

import { FaPencil } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Infos_generale() {
  const [banniere, setBanniere] = useState("d");
  const [pp, setPp] = useState("d");
  const [name, setName] = useState("Hannier Gabin");
  const [Status, setStatus] = useState("dsdsds dsdsd sd sd sds d dd ");
  const [emplacement, setEmplacement] = useState("France Lille");
  const [logo, setLogo] = useState("d");
  const [Ecole_emplacement, setEcole_emplacement] = useState(
    "EPitech ecole de l'execellence",
  );
  const [Date, setDate] = useState("2025-2028");

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
      <h1 className="flex items-center gap-4">
        Informations generale
        <span>
          <FaPencil />
        </span>
      </h1>
      <img className="w-[80%] h-[20%] rounded-2xl" src={banniere}></img>
      <img
        className="relative w-[10%] h-[10%] rounded-2xl -left-100 -top-20"
        src={pp}
      ></img>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1>{name}</h1>
          <p>{Status}</p>
        </div>
        <span className="flex items-center">
          <HiOutlineLocationMarker />
          <h2>{emplacement}</h2>
        </span>
        <div>
          <div className="grid grid-cols-[0.9fr_2.1fr]">
            <div>
              <img src={logo}></img>
            </div>
            <div className="flex flex-col">
              <h2>{Ecole_emplacement}</h2>
              <h6>{Date}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
