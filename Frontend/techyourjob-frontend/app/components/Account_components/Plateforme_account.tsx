"use client";
// import { useState } from "react";

import {
  FaPencil,
  FaGithub,
  FaYoutube,
  FaAddressBook,
  FaInstagram,
  FaStackOverflow,
  FaReddit,
  FaLink,
  FaLinkedin,
} from "react-icons/fa6";

//github, yt, linkdine, pf, insta, stackoverflow, autre, reddit
// git, yt, ld, pf, insta, Sover, other, redd

function renderLogo(type: string) {
  switch (type) {
    case "git":
      return <FaGithub className="text-teal-400 text-lg" />;
    case "yt":
      return <FaYoutube className="text-teal-400 text-lg" />;
    case "ld":
      return <FaLinkedin className="text-teal-400 text-lg" />;
    case "pf":
      return <FaAddressBook className="text-teal-400 text-lg" />;
    case "insta":
      return <FaInstagram className="text-teal-400 text-lg" />;
    case "Sover":
      return <FaStackOverflow className="text-teal-400 text-lg" />;
    case "redd":
      return <FaReddit className="text-teal-400 text-lg" />;
    default:
      return <FaLink className="text-teal-400 text-lg" />;
  }
}

function Plateforme({ icon, lien }: { icon: string; lien: string }) {
  return (
    <div className="flex items-center gap-3">
      {renderLogo(icon)}
      <h6 className="text-gray-300 text-sm">{lien}</h6>
    </div>
  );
}

export default function Plateforme_Account() {
  const plateformes = [
    { icon: "git", lien: "https://github.com/NathanSosniak" },
    { icon: "redd", lien: "https://github.com/NathanSosniak" },
  ];

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 gap-4">
      <h1 className="flex items-center gap-3 text-white font-bold">
        Plateformes
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>

      <div className="flex flex-col gap-3">
        {plateformes.map((p, i) => (
          <Plateforme key={i} icon={p.icon} lien={p.lien} />
        ))}
      </div>
    </div>
  );
}
