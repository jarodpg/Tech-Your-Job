import { MdOutlinePlace, MdHomeWork } from "react-icons/md";
import { TbBrandDaysCounter } from "react-icons/tb";
import { IoFileTray } from "react-icons/io5";

export default function Offre_Preview({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Flou */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-black/40"
        onClick={onClose}
      />
      {/* Card */}
      <div className="relative z-10 w-[65%] bg-amber-400 rounded-2xl p-8">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center">
            <div className="bg-blue-200 rounded-full p-5">PP</div>
            <div className="border border-b-blue-900 border- rounded-2xl text-center px-5 py-2">
              Save
            </div>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <h2>ENtreprise</h2>
            <h4>17h ago</h4>
          </div>

          <div className="grid grid-cols-[2.1fr_0.9fr]">
            {/* Partie de Gauche */}
            <div className="max-w-[70ch]">
              <h1>Titre poste</h1>
              <p>
                sdsd sd sd s ds ds ds d sdsjgsdhgshd shdgsh dghsdg hsdg hsgdhs
                gdhsghd sgdh s ds gdh sgdshdg shdghs dghsdg sh dghsd hsgd h
                sdghsdsjds sd shdjshdss{" "}
              </p>
              <h2>Les skills</h2>
              <div className="flex flex-col"></div>
            </div>

            {/* Partie de droite avec la poup */}
            <div className="bg-gray-900 rounded-xl">
              <div className="flex flex-col gap-1 ml-4">
                <div className="flex flex-row items-center">
                  <MdOutlinePlace /> France
                </div>
                <h1 className="mt-1">$123,400</h1>
                <h6>Salaire annuel</h6>
                <h1 className="mt-3">Detail</h1>
                <div className="grid grid-cols-[0.6fr_2.4fr] ml-2">
                  {/* COl gauche de la popup */}
                  <div className="flex flex-col gap-4">
                    <IoFileTray />
                    <MdHomeWork />
                    <TbBrandDaysCounter />
                  </div>
                  {/* COl droite de la popup */}
                  <div className="flex flex-col gap-4">
                    <h6>Backend</h6>
                    <h6>Frequency</h6>
                    <h6>2 j</h6>
                  </div>
                  <button className="bg-purple-400 rounded-2xl px-3 py-2">
                    Postuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onClose}></button>
      </div>
    </div>
  );
}
