"use client";
import { IoClose } from "react-icons/io5";

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
}: {
  titre: string;
  emplacement: string;
}) {
  return (
    <div className="grid grid-cols-[64px_1fr] gap-4 items-center py-3">
      <img className="w-16 h-16 object-cover rounded-xl border border-white/10 bg-[#333]" />
      <div className="flex flex-col">
        <h2 className="text-white text-[15px] font-bold">{titre}</h2>
        <h6 className="text-gray-400 text-[13px]">{emplacement}</h6>
      </div>
    </div>
  );
}

export default function Competences_Plus({
  isOpen,
  onClose,
  competences,
}: Props) {
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
          Toutes les compétences
        </h1>

        {competences.map(({ competence, source }, i) => (
          <div key={i}>
            <div className="bg-white/12 h-px w-full" />
            <Competence titre={competence} emplacement={source} />
          </div>
        ))}
      </div>
    </div>
  );
}
