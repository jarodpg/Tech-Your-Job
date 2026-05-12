"use client";
import { useState } from "react";

import { IoBookOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";

export default function Biographie_account() {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur. Malesuada lacus nunc vitae in. Rutrum et ipsum tincidunt quis aliquet id libero sit pretium. Diam metus feugiat nunc mauris risus felis. Erat viverra sociis pellentesque non at. Id nullam porttitor et non sed.\n\nElit lectus dictum eu fermentum at habitasse. Neque nunc justo ullamcorper nunc tellus nam. Ut a viverra risus mi...",
  );

  return (
    <div className="flex flex-col bg-[#242424] rounded-3xl p-5 gap-4">
      <h1 className="flex items-center gap-3 text-white font-bold">
        Biographie
        <span>
          <FaPencil className="text-gray-500 text-sm" />
        </span>
      </h1>

      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {description}
      </p>

      <div className="bg-white/12 h-px w-full"></div>

      <button className="flex items-center justify-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
        <IoBookOutline className="text-base" />
        Voir plus
      </button>
    </div>
  );
}
