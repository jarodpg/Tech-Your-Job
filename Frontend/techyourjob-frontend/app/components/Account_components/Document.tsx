"use client";

import { FaPencil } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { GrView } from "react-icons/gr";

function Document({ image, titre }: { image: string; titre: string }) {
  return (
    <div>
      <div className="grid grid-cols-[0.9fr_1.9fr_0.2fr] gap-5">
        <div>
          <img src={image}></img>
        </div>
        <div>
          <h2>{titre}</h2>
        </div>
        <div className="flex flex-col">
          <GoDownload />
          <GrView />
        </div>
      </div>
    </div>
  );
}

export default function Document_priview() {
  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
      <h1 className="flex items-center gap-4">
        Document
        <span>
          <FaPencil />
        </span>
      </h1>
      <Document image="test" titre="CV" />
      <div className="bg-amber-50 py-[1px] w-[70%]"></div>
      <Document image="test" titre="CV" />
    </div>
  );
}
