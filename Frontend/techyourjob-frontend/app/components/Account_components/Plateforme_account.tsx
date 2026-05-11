"use client";
import { useState, useEffect } from "react";

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

function renderLogo(type) {
  switch (type) {
    case "git":
      return <FaGithub />;
    case "yt":
      return <FaYoutube />;
    case "ld":
      return <FaLinkedin />;
    case "pf":
      return <FaAddressBook />;
    case "insta":
      return <FaInstagram />;
    case "Sover":
      return <FaStackOverflow />;
    case "redd":
      return <FaReddit />;
    default:
      return <FaLink />;
  }
}

function Plateforme({ icon, lien }: { icon: string; lien: string }) {
  return (
    <div>
      <div className="flex flex-row gap-6">
        <div>{renderLogo(icon)}</div>
        <h6>{lien}</h6>
      </div>
    </div>
  );
}

export default function Plateforme_Account() {
  const [Phone, setPhone] = useState("0636114556");
  const [Email, setEmail] = useState("gabin.sosniak@gmail.com");

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
      <h1 className="flex items-center gap-4">
        PLateformes
        <span>
          <FaPencil />
        </span>
      </h1>
      <div className="flex flex-col gap-3">
        <Plateforme icon="git" lien="https://google.com" />
        <Plateforme icon="redd" lien="https://google.com" />
      </div>
    </div>
  );
}
