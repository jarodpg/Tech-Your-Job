"use client";
import { useState } from "react";

import { FaPencil } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

interface Info {
  email: string;
  telephone: string;
}

export default function Contact_account({ infos }: { infos: Info }) {
  const [Phone, setPhone] = useState("+33 7 87 93 47 91");
  const [Email, setEmail] = useState("nathan.sosniak@epitech.eu");

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 gap-4">
      <h1 className="flex items-center gap-3 text-white font-bold">
        Contact
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>

      <div className="flex flex-row gap-10">
        <span className="flex items-center gap-2">
          <MdLocalPhone className="text-teal-400 text-lg" />
          <h2 className="text-gray-300 text-sm">{infos.telephone}</h2>
        </span>
        <span className="flex items-center gap-2">
          <AiOutlineMail className="text-teal-400 text-lg" />
          <h2 className="text-gray-300 text-sm">{infos.email}</h2>
        </span>
      </div>
    </div>
  );
}
