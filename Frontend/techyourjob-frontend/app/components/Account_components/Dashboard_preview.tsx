"use client";
import { useState, useEffect } from "react";

import { CiViewTable } from "react-icons/ci";

function Rond({
  couleur,
  nombre,
  preview1,
  preview2,
}: {
  couleur: string;
  nombre: string;
  preview1: string;
  preview2: string;
}) {
  return (
    <div>
      <div className="grid grid-cols-[0.9fr_2.1fr] gap-20">
        <div className="w-24 h-24 rounded-full border-8 border-blue-700">
          <h3 className="mt-7 ml-8">{nombre}</h3>
        </div>
        <div className="flex flex-col">
          <h2>Candidature Soumises</h2>
          <div className="flex flex-col">
            <h6>{preview1}</h6>
            <h6>{preview2}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashBoard_Preview() {
  // date
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // candidature soumise
  const [CandidatureSoumise, setCandidatureSoumise] = useState(1);
  const [Offre1, setOffre1] = useState("Aplle iso sdsd");
  const [Offre2, setOffre2] = useState("Google analuyse dta");

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
      <h1 className="flex items-center gap-4">
        Aperçu du Dashboard
        <span>
          <CiViewTable />
        </span>
      </h1>

      {/* Partie date  */}
      <div className="flex flex-row items-center gap-2">
        <h2>Du</h2>
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          className={`
                     rounded-lg px-3 py-1.5 text-xs border outline-none
                    transition-all cursor-pointer [color-scheme:dark]
                    ${
                      startDate
                        ? "bg-purple-950/50 border-purple-800/60 text-purple-300"
                        : "bg-white/5 border-white/10 text-gray-300 focus:border-purple-700/50 focus:bg-purple-950/20"
                    }
                    `}
        />
        <h2>au</h2>
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
          className={`
                     rounded-lg px-3 py-1.5 text-xs border outline-none
                    transition-all cursor-pointer [color-scheme:dark]
                    ${
                      startDate
                        ? "bg-purple-950/50 border-purple-800/60 text-purple-300"
                        : "bg-white/5 border-white/10 text-gray-300 focus:border-purple-700/50 focus:bg-purple-950/20"
                    }
                    `}
        />
      </div>
      <div>
        <Rond nombre="15" preview1="sdsfsdsdsddd" preview2="dddddddddddsds" />
        <Rond nombre="15" preview1="sdsfsdsdsddd" preview2="dddddddddddsds" />
        <Rond nombre="15" preview1="sdsfsdsdsddd" preview2="dddddddddddsds" />
      </div>
      <div className="bg-amber-50 w-[80%] py-0.5"></div>
      <h6>Consulter l'integralite du Dashboard</h6>
    </div>
  );
}
