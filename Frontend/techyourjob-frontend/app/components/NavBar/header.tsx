"use client";
import { useState } from "react";
import Notifications from "./Notification";
import Link from "next/link";
import { Get_User_Info } from "../../services/Info_User_Service";

function Header() {
  const navLinks = [
    { icon: "Home.svg", label: "Accueil", alt: "accueil", href: "/" },
    { icon: "Archive.svg", label: "Offres", alt: "offres", href: "/offre" },
    {
      icon: "batiment.svg",
      label: "Entreprises",
      alt: "entreprises",
      href: "/entreprise",
    },
    {
      icon: "recrutement.svg",
      label: "Je recrute",
      alt: "recrutement",
      href: "/hiring",
    },
  ];

  const [notifOpen, setNotifOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // utilisateur connecté ou non
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await Get_User_Info();

        if (data && data.profil && data.profil[0]) {
          setIsLoggedIn(true);
        }
      } catch {
        setIsLoggedIn(false);
      }
    };

    fetchUser();
  }, []);

  const UserButton = () => (
    <Link href={isLoggedIn ? "/account" : "/auth"}>
      <button
        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        aria-label="Mon profil"
      >
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isLoggedIn ? 'bg-purple-600/30 border border-purple-500/50' : 'bg-[#3a3a3a]'}`}>
          <img style={{ width: "20px" }} src="User.svg" alt="Profil" />
        </div>
      </button>
    </Link>
  );

  return (
    <div className="bg-[#2C2C2C] sticky top-0 z-50 border-b border-white/10">
      <div className="flex justify-between items-center px-7 h-16">
        <div className="flex items-center gap-2.5">
          <img
            style={{ width: "38px" }}
            src="techyourjob.png"
            alt="Logo Tech Your Job"
          />

          <span className="font-extrabold text-white text-lg tracking-wide">
            Tech Your Job
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-stretch h-16">
            {navLinks.map(({ icon, label, alt, href }) => (
              <Link
                key={label}
                href={href}
                className="relative flex items-center gap-2 px-3 group transition-colors duration-200"
              >
                <img style={{ width: "18px" }} src={icon} alt={alt} />

                <span className="font-bold text-sm text-white/80 group-hover:text-white transition-colors duration-200">
                  {label}
                </span>

                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <div className="relative">
              <button
                onClick={() => {
                  setNotifOpen(!notifOpen);
                  setUserMenuOpen(false);
                }}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                aria-label="Notifications"
              >
                <img style={{ width: "20px" }} src="Bell.svg" alt="" />
              </button>

              <Notifications
                isOpen={notifOpen}
                onClose={() => setNotifOpen(false)}
                notifications={[
                  {
                    
                    id: 1,
                    type: "entreprise",
                    titre: "Google vous suit",
                    message: "Google a consulte votre profil.",
                    date: "il y a 5 min",
                    lu: false,
                  },
                  {
                    id: 2,
                    type: "offre",
                    titre: "Candidature envoyee",
                    message: "Votre candidature chez Airbus a bien ete soumise.",
                    date: "il y a 1h",
                    lu: false,
                  },
                  {
                    id: 3,
                    type: "refus",
                    titre: "Candidature refusee",
                    message: "Votre candidature chez Amazon n'a pas ete retenue.",
                    date: "il y a 3h",
                    lu: true,
                  },
                  {
                    id: 4,
                    type: "modification",
                    titre: "Profil mis a jour",
                    message: "Vos informations ont bien ete modifiees.",
                    date: "hier",
                    lu: true,
                  },
                  {
                    id: 5,
                    type: "autre",
                    titre: "Bienvenue !",
                    message: "Votre compte Tech Your Job est actif.",
                    date: "il y a 2 jours",
                    lu: true,
                  },
                ]}
              />
            </div>
            
            {/* menu pr pc */}
            <div className="relative">
              <button
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                  setNotifOpen(false);
                }}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                aria-label="Mon profil"
              >
                <img style={{ width: "22px" }} src="User.svg" alt="" />
              </button>

              {userMenuOpen && (

                <div className="absolute right-0 mt-2 w-56 bg-[#2C2C2C] border border-white/10 rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/account"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Profil
                  </Link>

                  <button
                    onClick={() => setUserMenuOpen(false)}
                    className="w-full text-left block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Télécharger les données
                  </button>

                  <hr className="my-1 border-white/10" />

                <Link
                  href="/auth"
                  onClick={() => setUserMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors"
                >
                  Se déconnecter
                </Link>
                </div>
              )}
            </div>

          </div>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <div className="relative">
            <button
              onClick={() => {
                setNotifOpen(!notifOpen);
                setUserMenuOpen(false);
              }}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Notifications"
            >
              <img style={{ width: "20px" }} src="Bell.svg" alt="" />
            </button>

            <Notifications
              isOpen={notifOpen}
              onClose={() => setNotifOpen(false)}
              notifications={[
                {
                  id: 1,
                  type: "entreprise",
                  titre: "Google vous suit",
                  message: "Google a consulte votre profil.",
                  date: "il y a 5 min",
                  lu: false,
                },
                {
                  id: 2,
                  type: "offre",
                  titre: "Candidature envoyee",
                  message: "Votre candidature chez Airbus a bien ete soumise.",
                  date: "il y a 1h",
                  lu: false,
                },
                {
                  id: 3,
                  type: "refus",
                  titre: "Candidature refusee",
                  message: "Votre candidature chez Amazon n'a pas ete retenue.",
                  date: "il y a 3h",
                  lu: true,
                },
                {
                  id: 4,
                  type: "modification",
                  titre: "Profil mis a jour",
                  message: "Vos informations ont bien ete modifiees.",
                  date: "hier",
                  lu: true,
                },
                {
                  id: 5,
                  type: "autre",
                  titre: "Bienvenue !",
                  message: "Votre compte Tech Your Job est actif.",
                  date: "il y a 2 jours",
                  lu: true,
                },
              ]}
            />
          </div>
          
          {/* menu pr mobile */}
          <div className="relative">
            <button
              onClick={() => {
                setUserMenuOpen(!userMenuOpen);
                setNotifOpen(false);
              }}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Mon profil"
            >
              <img style={{ width: "22px" }} src="User.svg" alt="" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#2C2C2C] border border-white/10 rounded-lg shadow-xl py-2 z-50">
                <Link
                  href="/account"
                  onClick={() => setUserMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Profil
                </Link>
                <button
                  onClick={() => setUserMenuOpen(false)}
                  className="w-full text-left block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Télécharger les données
                </button>
                <hr className="my-1 border-white/10" />
                <Link
                  href="/auth"
                  onClick={() => setUserMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors"
                >
                  Se déconnecter
                </Link>
              </div>
            )}
          </div>


          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              // MODIFICATION : Ferme le menu user si on clique sur le burger 
              setUserMenuOpen(false);
              setNotifOpen(false);
            }}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col border-t border-white/10">
          {navLinks.map(({ icon, label, alt, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-7 py-3.5 hover:bg-white/5 transition-colors duration-200"
            >
              <img style={{ width: "18px" }} src={icon} alt={alt} />

              <span className="font-bold text-sm text-white/80">
                {label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

export default Header;