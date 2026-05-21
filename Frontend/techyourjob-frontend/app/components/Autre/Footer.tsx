"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Footer() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    <footer className="w-full mt-auto bg-[#0a0a0a] border-t border-white/[0.05] text-zinc-500 text-sm font-sans py-8 relative">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
        {/* redirections */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start order-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 text-center md:text-left">
            <Link
              href="/"
              className="hover:text-purple-400 transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/offre"
              className="hover:text-purple-400 transition-colors font-medium"
            >
              Offres
            </Link>
            <Link
              href="/auth"
              className="hover:text-purple-400 transition-colors font-medium"
            >
              Authentification
            </Link>
            <Link
              href="/entreprise"
              className="hover:text-purple-400 transition-colors font-medium"
            >
              Entreprises
            </Link>
            <Link
              href="/account"
              className="hover:text-purple-400 transition-colors font-medium"
            >
              Compte
            </Link>
            <Link
              href="/hiring"
              className="hover:text-purple-400 transition-colors font-medium"
            >
              Je recrute
            </Link>
          </div>
        </div>

        {/* bouton mentions légales + nom appli */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-5 order-2 text-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            <span className="font-black text-zinc-100 text-base tracking-tighter">
              Tech Your Job
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            © 2026 Tous droits réservés
          </p>
          <div className="flex gap-8 justify-center">
            <button
              onClick={() => setActivePopup("mentions")}
              className="text-[10px] font-bold uppercase tracking-widest hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Mentions Légales
            </button>
            <button
              onClick={() => setActivePopup("confidentialite")}
              className="text-[10px] font-bold uppercase tracking-widest hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Confidentialité
            </button>
          </div>
        </div>

        {/* email */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end order-3 text-center md:text-right">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              Support & Contact
            </p>
            <a
              href="mailto:support@techyourjob.fr"
              className="text-purple-400 hover:text-purple-300 font-bold transition-colors text-base"
            >
              support@techyourjob.fr
            </a>
          </div>
        </div>
      </div>

      {/* la pop-up*/}
      <AnimatePresence>
        {activePopup && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setActivePopup(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0d0d0d] border border-white/[0.08] w-full max-w-2xl max-h-[85vh] rounded-[2rem] shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              <div className="flex items-center justify-between p-8 border-b border-white/[0.05] bg-zinc-900/30">
                <div className="flex flex-col">
                  <h2 className="text-xl font-black text-zinc-100 tracking-tight">
                    {activePopup === "mentions"
                      ? "Mentions Légales"
                      : "Politique de Confidentialité"}
                  </h2>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                    Tech Your Job • 2026
                  </p>
                </div>
                <button
                  onClick={() => setActivePopup(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 border border-white/[0.05] text-zinc-500 hover:text-zinc-100 transition-all cursor-pointer"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="p-10 overflow-y-auto text-zinc-400 text-sm space-y-8 leading-relaxed custom-scrollbar bg-[#0d0d0d]">
                {activePopup === "mentions" ? (
                  <>
                    <h3 className="font-bold text-white text-base">
                      1. Édition du site
                    </h3>
                    <p>
                      Le site Tech Your Job est édité par les développeurs
                      suivants :<br></br> Jarod Putman-Grain, Gabin Hannier,
                      Nathan Sosniak, Antoine Graber.
                    </p>

                    <h3 className="font-bold text-white text-base">
                      2. Propriété
                    </h3>
                    <p>
                      L'ensemble des contenus, graphismes, designs et codes
                      sources sont la propriété exclusive de Tech Your Job.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-bold text-white text-base">
                      1. Collecte et finalité des données
                    </h3>
                    <p>
                      Nous collectons votre adresse e-mail, nom et prénom lors
                      de votre inscription.{" "}
                      <strong>
                        Ces données sont strictement et uniquement collectées
                        dans le cadre du fonctionnement de l'application web
                        Tech Your Job
                      </strong>{" "}
                      (pour vous permettre de postuler aux offres et gérer votre
                      profil). Elles ne seront en aucun cas revendues, partagées
                      ou utilisées à des fins commerciales par des tiers.
                    </p>

                    <h3 className="font-bold text-white text-base">
                      2. Utilisation des cookies
                    </h3>
                    <p>
                      Tech Your Job utilise uniquement des cookies essentiels ou
                      techniques pour maintenir votre session utilisateur
                      active. Aucun cookie de traçage publicitaire n'est
                      utilisé.
                    </p>

                    <h3 className="font-bold text-white text-base">
                      3. Vos droits (RGPD)
                    </h3>
                    <p>
                      Vous disposez d'un droit d'accès, de modification et de
                      suppression de vos données personnelles depuis votre
                      espace "Compte", ou sur simple demande par mail à
                      support@techyourjob.fr.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
