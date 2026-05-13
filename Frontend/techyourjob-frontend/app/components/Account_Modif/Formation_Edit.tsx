"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  enterprise_name: string;
  title: string;
  start: string;
  end: string;
  description: string;
  skills: CompetenceItem[];
  onSave: (data: any) => void;
}

export default function Formation_Edit({
  isOpen,
  onClose,
  enterprise_name,
  title,
  start,
  end,
  description,
  skills,
  onSave,
}: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-[60%] bg-[#242424] rounded-3xl p-8 shadow-2xl border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <IoClose size={28} />
        </button>

        <h1 className="text-xl font-bold text-white mb-5">
          Modifier le contact
        </h1>
        <div></div>
      </div>
    </div>
  );
}
