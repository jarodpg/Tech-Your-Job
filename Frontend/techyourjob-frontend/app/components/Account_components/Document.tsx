"use client";

import { FaPencil } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { GrView } from "react-icons/gr";

function Document({ image, titre }: { image: string; titre: string }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[90px_1fr_28px] gap-3 items-center py-3">
        <div>
          <img
            src={image}
            className="w-[90px] h-[65px] object-cover rounded-md border border-white/15 bg-white"
          />
        </div>
        <div>
          <h2 className="text-white text-[13px] font-medium leading-snug">
            {titre}
          </h2>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <GoDownload className="text-[#8208D4] text-lg" />
          <GrView className="text-teal-400 text-lg" />
        </div>
      </div>
    </div>
  );
}

export default function Document_priview() {
  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 w-[300px]">
      <h1 className="flex items-center gap-3 text-white font-semibold mb-3">
        Documents
        <span>
          <FaPencil className="text-gray-400 text-sm" />
        </span>
      </h1>
      <Document
        image="/img/bnssa.jpg"
        titre="Brevet National de Sécurité et de Sauvetage Aquatique"
      />
      <div className="bg-white/12 h-px w-full"></div>
      <Document
        image="/img/pse1.jpg"
        titre="Premiers Secours en Équipe de Niveau 1"
      />
      <div className="bg-white/12 h-px w-full"></div>
      <Document image="/img/bac.jpg" titre="Baccalauréat Général" />
      <div className="bg-white/12 h-px w-full"></div>
      <Document image="/img/cv.jpg" titre="CV" />
    </div>
  );
}
