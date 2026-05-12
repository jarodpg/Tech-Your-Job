// "use client";
// import { useState, useEffect } from "react";

// import { FaPencil } from "react-icons/fa6";
// import { MdLocalPhone } from "react-icons/md";
// import { AiOutlineMail } from "react-icons/ai";

// export default function Contact_account() {
//   const [Phone, setPhone] = useState("0636114556");
//   const [Email, setEmail] = useState("gabin.sosniak@gmail.com");

//   return (
//     <div className="flex flex-col bg-[#242424] rounded-3xl items-center gap-5">
//       <h1 className="flex items-center gap-4">
//         Contact
//         <span>
//           <FaPencil />
//         </span>
//       </h1>
//       <div className="flex flex-row justify-between px-5">
//         <span>
//           <MdLocalPhone />
//           <h2>{Phone}</h2>
//         </span>
//         <span>
//           <AiOutlineMail />
//           <h2>{Email}</h2>
//         </span>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

import { FaPencil } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact_account() {
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
          <h2 className="text-gray-300 text-sm">{Phone}</h2>
        </span>
        <span className="flex items-center gap-2">
          <AiOutlineMail className="text-teal-400 text-lg" />
          <h2 className="text-gray-300 text-sm">{Email}</h2>
        </span>
      </div>
    </div>
  );
}
