"use client";

import { useState } from "react";

import { CiMap } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ onFilterChange }) {
  const [locationInput, setLocationInput] = useState("");

  const handleLocationSubmit = () => {
    onFilterChange({ location: locationInput || null });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#1C1C1C] border border-white/15 w-[750px] h-14 rounded-full flex items-center px-2 pl-5 gap-3">
        <CiSearch className="text-[#717171] text-xl shrink-0" />
        <input
          type="text"
          placeholder="Métier, titre, mot clé..."
          className="bg-transparent text-white placeholder-[#717171] text-sm flex-1 outline-none"
        />

        <div className="h-6 w-px bg-white/20 shrink-0" />

        <CiMap className="text-[#717171] text-xl shrink-0" />
        <input
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLocationSubmit()}
          placeholder="Ville, région..."
          className="bg-transparent text-white placeholder-[#717171] text-sm flex-1 outline-none"
        />

        <button
          onClick={handleLocationSubmit}
          className="bg-[#8308D4] text-white text-sm font-semibold px-6 h-10 rounded-full shrink-0 hover:bg-[#9a0af5] transition-colors"
        >
          Recherche
        </button>
      </div>
    </div>
  );
}
