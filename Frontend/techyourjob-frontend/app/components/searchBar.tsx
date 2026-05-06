import { CiMap } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <div className="bg-white w-400 h-16 rounded-full flex flex-row items-center px-4 gap-5">
        <img
          src="/Search.svg"
          alt="search"
          className="w-6 h-6 ml-8 text-[#717171]"
        />
        <input
          type="text"
          placeholder={"Metier, titre, mot clé, ..."}
          className="text-[#717171] font-bold text-xl ml-5"
        ></input>

        <div className="h-2/3 w-[1px] bg-gray-200 items-centerf">|</div>

        <CiMap className="text-[#717171]" />
        <input
          type="text"
          placeholder={"Pays ou ville"}
          className="text-[#717171] font-bold text-xl"
        ></input>

        <div className="bg-[#8308D4] px-6 py-3 rounded-xl">
          <button>Recherche</button>
        </div>
      </div>
    </div>
  );
}
