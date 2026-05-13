"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GoTrash } from "react-icons/go";

interface CompetenceItem {
  competence: string;
  source: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  competences: CompetenceItem[];
}

function Competence({
  titre,
  emplacement,
  onDelete,
}: {
  titre: string;
  emplacement: string;
  onDelete: () => void;
}) {
  return (
    <div className="grid grid-cols-[64px_1fr_28px] gap-4 items-center py-3">
      <img className="w-16 h-16 object-cover rounded-xl border border-white/10 bg-[#333]" />
      <div className="flex flex-col">
        <h2 className="text-white text-[15px] font-bold">{titre}</h2>
        <h6 className="text-gray-400 text-[13px]">{emplacement}</h6>
      </div>
      <button
        onClick={onDelete}
        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
      >
        <GoTrash className="text-red-400 text-base" />
      </button>
    </div>
  );
}

export default function Competence_Edit({
  isOpen,
  onClose,
  competences,
}: Props) {
  const [liste, setListe] = useState(competences);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-[60%] bg-[#242424] rounded-3xl p-8 shadow-2xl border border-white/10 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <IoClose size={28} />
        </button>

        <h1 className="text-xl font-bold text-white mb-5">
          Modifier les compétences
        </h1>

        {liste.map(({ competence, source }, i) => (
          <div key={i}>
            <div className="bg-white/12 h-px w-full" />
            <Competence
              titre={competence}
              emplacement={source}
              onDelete={() =>
                setListe((prev) => prev.filter((_, idx) => idx !== i))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
