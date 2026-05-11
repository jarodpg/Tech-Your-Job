"use client";
import { useState, useEffect } from "react";

import { IoBookOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";

export default function Biographie_account() {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur. Malesuada lacus nunc vitae in. Rutrum et ipsum tincidunt quis aliquet id libero sit pretium.",
  );

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl">
      <h1>
        Biographie{" "}
        <span>
          <FaPencil />
        </span>
      </h1>
      <p>{description}</p>
      <span>
        <IoBookOutline />
        <button className="cursor-pointer">Voir plus</button>
      </span>
    </div>
  );
}
