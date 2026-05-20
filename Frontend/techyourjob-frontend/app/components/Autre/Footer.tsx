"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Footer() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    
    <footer className="w-full mt-auto bg-[#121212] border-t border-white/10 text-gray-400 text-sm font-sans py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
        
        {/* redirections */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start order-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 text-center md:text-left">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <Link href="/offre" className="hover:text-white transition-colors">Offres</Link>
            <Link href="/auth" className="hover:text-white transition-colors">Authentification</Link>
            <Link href="/entreprise" className="hover:text-white transition-colors">Entreprises</Link>
            <Link href="/account" className="hover:text-white transition-colors">Compte</Link>
            <Link href="/hiring" className="hover:text-white transition-colors">Je recrute</Link>
          </div>
        </div>

        {/* bouton mentions légales + nom appli */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4 text-xs text-gray-500 order-2 text-center">
          <span className="font-medium text-gray-400 text-sm tracking-wide">
            © 2026 Tech Your Job
          </span>
          <div className="flex gap-6 justify-center mt-1">
            <button 
              onClick={() => setActivePopup("mentions")}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Mentions Légales
            </button>
            <button 
              onClick={() => setActivePopup("confidentialite")}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Confidentialité
            </button>
          </div>
        </div>

        {/* email */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start md:pl-12 lg:pl-24 order-3 text-center md:text-left">
          <a 
            href="mailto:support@techyourjob.fr" 
            className="text-[#7288C9] hover:underline font-medium break-all text-base"
          >
            support@techyourjob.fr
          </a>
        </div>

      </div>

      {/* la pop-up*/}
      <AnimatePresence>
        {activePopup && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setActivePopup(null)}
            />

            <motion.div

              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}

              className="relative bg-[#1a1a1a] border border-white/10 w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl flex flex-col z-10"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">

                <h2 className="text-xl font-bold text-white">
                  {activePopup === "mentions" ? "Mentions Légales" : "Politique de Confidentialité"}
                </h2>
                <button
                  onClick={() => setActivePopup(null)}
                  className="text-gray-500 hover:text-white transition-colors p-2 cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>

              </div>

              <div className="p-8 overflow-y-auto text-gray-300 text-sm space-y-6 leading-relaxed custom-scrollbar">
                
                {activePopup === "mentions" ? (
                  <>
                    <h3 className="font-bold text-white text-base">1. Édition du site</h3>
                    <p>Le site Tech Your Job est édité par les développeurs suivants :<br></br> Jarod Putman-Grain, Gabin Hannier, Nathan Sosniak, Antoine Graber.</p>
                    
                    <h3 className="font-bold text-white text-base">2. Propriété</h3>
                    <p>L'ensemble des contenus, graphismes, designs et codes sources sont la propriété exclusive de Tech Your Job.</p>
                  </>
                ) : (

                  <>
                    <h3 className="font-bold text-white text-base">1. Collecte et finalité des données</h3>
                    <p>Nous collectons votre adresse e-mail, nom et prénom lors de votre inscription. <strong>Ces données sont strictement et uniquement collectées dans le cadre du fonctionnement de l'application web Tech Your Job</strong> (pour vous permettre de postuler aux offres et gérer votre profil). Elles ne seront en aucun cas revendues, partagées ou utilisées à des fins commerciales par des tiers.</p>

                    <h3 className="font-bold text-white text-base">2. Utilisation des cookies</h3>
                    <p>Tech Your Job utilise uniquement des cookies essentiels ou techniques pour maintenir votre session utilisateur active. Aucun cookie de traçage publicitaire n'est utilisé.</p>

                    <h3 className="font-bold text-white text-base">3. Vos droits (RGPD)</h3>
                    <p>Vous disposez d'un droit d'accès, de modification et de suppression de vos données personnelles depuis votre espace "Compte", ou sur simple demande par mail à support@techyourjob.fr.</p>
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