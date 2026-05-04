"use client";

import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown, FaCalendarAlt, FaTimes } from "react-icons/fa";

// Type de contrat disponible
const TypeContrat = [
  "CDD",
  "CDI",
  "Temps partiel",
  "Temps plein",
  "Alternance",
  "Stage",
];

export default function SideBareFiltre() {
  const [selected, setSelected] = useState<string[]>([]);

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

  return (
    <div className="flex flex-col gap-6">
      {/* Dropdown langue */}
      <div className="ml-[50%]">
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
      </div>

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
      </div>
    </div>
  );
}
