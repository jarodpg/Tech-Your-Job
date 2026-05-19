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
    
    <div className="flex justify-center w-full px-3">
      
      <div className="bg-[#1C1C1C] border border-white/15 w-full max-w-[750px] h-12 md:h-14 rounded-full flex items-center px-2 md:px-3 pl-3 md:pl-5 gap-1.5 md:gap-3 shadow-2xl">
        
        
        <CiSearch className="text-[#717171] text-lg md:text-xl shrink-0" />
        <input
          type="text"
          placeholder="Métier, Mots clés, Job ..." 
          className="bg-transparent text-white placeholder-[#717171] text-xs md:text-sm flex-1 outline-none min-w-0"
        />

        <div className="h-5 md:h-6 w-px bg-white/20 shrink-0" />

        
        <CiMap className="text-[#717171] text-lg md:text-xl shrink-0" />
        <input
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLocationSubmit()}
          placeholder="Ville, Région..."
          className="bg-transparent text-white placeholder-[#717171] text-xs md:text-sm flex-1 outline-none min-w-0"
        />

        <button
          onClick={handleLocationSubmit}
          className="bg-[#8308D4] text-white text-xs md:text-sm font-semibold px-3 md:px-6 h-8 md:h-10 rounded-full shrink-0 hover:bg-[#9a0af5] transition-colors cursor-pointer"
        >
          <span className="hidden xs:inline">Recherche</span>
          <span className="xs:hidden">Rechercher</span> 
        </button>
      </div>
    </div>
  );
}