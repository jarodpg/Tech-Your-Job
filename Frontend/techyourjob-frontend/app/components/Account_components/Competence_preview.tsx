"use client";

import { FaPencil } from "react-icons/fa6";

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
    <div>
      <div className="grid grid-cols-[0.9fr_2.1fr] gap-5">
        <div>
          <img src={image}></img>
        </div>
        <div className="flex flex-col">
          <h2>{titre}</h2>
          <h6>{emplacement}</h6>
        </div>
      </div>
    </div>
  );
}

export default function Competence_Preview() {
  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
      <h1 className="flex items-center gap-4">
        Competences
        <span>
          <FaPencil />
        </span>
      </h1>
      <Competence image="test" titre="design uui" emplacement="Epitech" />
      <div className="bg-[#47AD95] py-[1px] w-[70%]"></div>
      <Competence image="test" titre="CV" emplacement="dsdssd" />

      <div className="bg-[#47AD95] py-[1px] w-[70%]"></div>
      <button className="cursor-pointer">Voir plus</button>
    </div>
  );
}
