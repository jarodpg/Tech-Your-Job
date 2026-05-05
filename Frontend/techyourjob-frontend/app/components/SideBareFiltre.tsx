"use client";

import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown, FaCalendarAlt, FaTimes } from "react-icons/fa";

import * as Slider from "@radix-ui/react-slider";

// Type de contrat disponible
const TypeContrat = [
  "CDD",
  "CDI",
  "Temps partiel",
  "Temps plein",
  "Alternance",
  "Stage",
];

const NombreAnnee = ["Bac", "Bac+1", "Bac+2", "Bac+3", "Master"];

export default function SideBareFiltre() {
  // Value double curseur
  const [value, setValue] = useState([20, 80]);

  // Value simple experience curseur
  const [valueExperience, setValueExperience] = useState([50]);

  const [selected, setSelected] = useState<string[]>([]);

  const [ActivePresentiel, setActivePresentiel] = useState(false);
  const [ActiveRemote, setActiveRemote] = useState(false);

  // Date
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // ouverture date
  const [OpenDate, setOpenDate] = useState(false);

  const formatDate = (d: string) =>
    new Date(d + "T00:00:00").toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const Jour_entre_date =
    startDate && endDate
      ? Math.round(
          (new Date(endDate).getTime() - new Date(startDate).getTime()) /
            86400000,
        )
      : null;

  // Toggle pour un filtre cliquer pour les type de contrat
  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item],
    );

  const toggleYears = (item: string) => {
    setSelected([item]);
  };

  return (
    <div className="px-3 flex flex-col gap-6">
      {/* Dropdown langue */}
      {/* <div className="ml-[50%]">
        <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
            Langue demandée
            <FaChevronDown
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#francais"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Français
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#anglais"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Anglais
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div> */}

      {/* Chips type de contrat */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
          Type de contrat
        </p>
        <div className="flex flex-wrap gap-2">
          {/* // On affiche ici tout nos flitres */}
          {TypeContrat.map((item) => {
            const isActive = selected.includes(item);
            return (
              <button
                key={item}
                onClick={() => toggle(item)}
                className={`
                    inline-flex items-center gap-1.5 rounded-full px-4 py-1.5
                    text-sm border transition-all duration-150 active:scale-95
                    ${
                      isActive
                        ? "bg-purple-50 border-purple-400 text-purple-800"
                        : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30"
                    }`}
              >
                {/* Si on clique sur un des filtres */}
                {isActive && (
                  <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-purple-400">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      {/* Petite coche en svg, st-ce que un icon c'est plus simple ? oui */}
                      <path
                        d="M1.5 4L3.2 5.8L6.5 2.2"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dates */}
      <div className="border-t border-white/10 pt-3">
        {/* Header cliquable */}
        <button
          onClick={() => setOpenDate(!OpenDate)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-gray-200">
            <FaCalendarAlt size={12} className="text-gray-500" />
            Période
          </span>
          <FaChevronDown
            size={10}
            className={`text-gray-500 transition-transform duration-200 ${
              OpenDate ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Contenu */}
        {OpenDate && (
          <div className="px-1 pt-2 pb-3 flex flex-col gap-2">
            <div className="flex items-end gap-2">
              {/* Début */}
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Début
                </span>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    if (endDate && e.target.value > endDate) setEndDate("");
                  }}
                  className={`
                    w-full rounded-lg px-3 py-1.5 text-xs border outline-none
                    transition-all cursor-pointer [color-scheme:dark]
                    ${
                      startDate
                        ? "bg-blupurplee-950/50 border-pruple-800/60 text-purple-300"
                        : "bg-white/5 border-white/10 text-gray-300 focus:border-purple-700/50 focus:bg-purple-950/20"
                    }
                    `}
                />
              </div>

              <span className="text-gray-600 pb-2 text-xs">→</span>

              {/* Fin */}
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Fin
                </span>
                <input
                  type="date"
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={`
                    w-full rounded-lg px-3 py-1.5 text-xs border outline-none
                    transition-all cursor-pointer [color-scheme:dark]
                    ${
                      endDate
                        ? "bg-purple-950/50 border-purple-800/60 text-purple-300"
                        : "bg-white/5 border-white/10 text-gray-300 focus:border-purple-700/50 focus:bg-purple-950/20"
                    }
                    `}
                />
              </div>
            </div>

            {/* Résumé */}
            {startDate && endDate ? (
              <p className="text-[11px] text-purple-400">
                {formatDate(startDate)} → {formatDate(endDate)}
                <span className="text-gray-600 ml-1">· {Jour_entre_date}j</span>
              </p>
            ) : startDate ? (
              <p className="text-[11px] text-purple-400">
                À partir du {formatDate(startDate)}
              </p>
            ) : (
              <p className="text-[11px] text-gray-600">
                Sélectionnez une période
              </p>
            )}

            {/* Effacer */}
            {(startDate || endDate) && (
              <button
                onClick={() => {
                  setStartDate("");
                  setEndDate("");
                }}
                className="flex items-center gap-1 text-[11px] text-gray-600 hover:text-gray-400 transition-colors w-fit"
              >
                <FaTimes size={10} />
                Effacer
              </button>
            )}
          </div>
        )}

        <div className="border-t border-white/10 mt-3" />

        {/* Etude */}
        {/* <div className="flex flex-col text-center">
          <div>
            <h2>Etude</h2>
          </div>
          <div className="bg-white/10 w-full rounded-2xl">
            <div className="first:ml-2 flex fle-row gap-4">
            {NombreAnnee.map((item) => {
            const isActiveYears = selected.includes(item);

            return (
              <h4
                key={item}
                onClick={() => toggle(item)}
                className={`
                  rounded-2xl my-2 px-2hover:bg-purple-50 hover:border-purple-400 hover:text-purple-3 mx-auto
                  ${isActiveYears
                    ? "bg-purple-50 border-purple-400 text-purple-800 py-2 px-2"
                    : "border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30 py-2 px-1"
                  }
                `}
              >
                {item}
              </h4>
              );
            })}
            </div>
          </div>
        </div> */}

        {/* Type de contract */}
        <div className="flex flex-col mt-10 text-center">
          <h2>Type contract</h2>
          <div className="flex flex-row mx-auto gap-5">
            <button
              onClick={() => setActivePresentiel(!ActivePresentiel)}
              className={`
                rounded-2xl p-2
                ${
                  ActivePresentiel
                    ? "bg-purple-50 border-purple-400 text-purple-800 py-2 px-2"
                    : "bg-white/15 text-white"
                }
              `}
            >
              Presentiel
            </button>

            <button
              onClick={() => setActiveRemote(!ActiveRemote)}
              className={`
                  rounded-2xl p-2
                  ${
                    ActiveRemote
                      ? "bg-purple-50 border-purple-400 text-purple-800 py-2 px-2"
                      : "bg-white/15 text-white"
                  }
                `}
            >
              Remote
            </button>
          </div>
        </div>

        {/* Salaire  */}
        <div className="flex mt-10 flex-col">
          <div className="flex flex-row justify-between">
            <h5>Salaire minimum</h5>
            <h5>Salaire maximum</h5>
          </div>
          <div>
            <Slider.Root
              value={value}
              onValueChange={setValue}
              min={0}
              max={100}
              step={1}
              className="relative flex items-center w-64 h-5"
            >
              <Slider.Track className="bg-gray-300 relative grow rounded-none h-1">
                <Slider.Range className="absolute bg-purple-500 h-full rounded-none" />
              </Slider.Track>

              <Slider.Thumb className="block w-4 h-4 bg-purple-600 rounded-full cursor-pointer" />
              <Slider.Thumb className="block w-4 h-4 bg-purple-600 rounded-full cursor-pointer" />
            </Slider.Root>
          </div>
          <div className="flex flex-row justify-between">
            <h5>0$</h5>
            <h5>1000$</h5>
            <h5>5000$</h5>
            <h5>max$</h5>
          </div>
        </div>

        {/* Experience demande */}
        <div className="flex flex-col mt-10">
          <div>
            <h2>Annee experience</h2>
          </div>
          <div>
            <Slider.Root
              value={valueExperience}
              onValueChange={setValueExperience}
              min={0}
              max={9}
              step={1}
              className="relative flex items-center w-64 h-5"
            >
              <Slider.Track className="bg-purple-500 relative grow rounded-none h-1">
                <Slider.Range className="absolute bg-purple-500 h-full rounded-none" />
              </Slider.Track>

              <Slider.Thumb className="block w-4 h-4 bg-purple-600 rounded-full cursor-pointer" />
            </Slider.Root>
          </div>
          <div className="flex flex-row">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((number) => (
              <p key={number} className="px-2">
                {number}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
