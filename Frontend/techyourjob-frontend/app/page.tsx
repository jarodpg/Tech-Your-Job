"use client";

import {Search, PlayCircle, ArrowRightCircle } from "lucide-react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Header from "./components/header"

import Header from "./components/header"

export default function HomePage() {

return (

    <div className="min-h-screen bg-[#121212] text-white font-sans">
          <div>
      <Header />
      
      
    </div>
      {/* HEAD SECTION */}
      <div className="bg-[#313030]">
        <header className="py-16 px-4 text-center relative overflow-hidden">
          <h1 className="text-5xl font-bold mb-4">Trouver votre avenir</h1>
          <p className="text-xl text-gray-300 mb-8">Plus de 4435 jobs vous attendent</p>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto mb-4 flex items-center bg-[#226979] rounded-[20px] overflow-hidden">
            <div className="flex items-center gap-3 px-6 flex-1 py-4">
              <Search className="w-6 h-6 text-white stroke-[3px]" />
              <input 
                type="text" 
                placeholder="Chercher un job, un domaine, une entreprise" 
                className="bg-transparent text-white placeholder-gray-200 text-lg w-full outline-none font-medium"
              />
            </div>
            <button className="bg-[#47AD95] text-white px-8 h-full py-4 rounded-[20px] flex items-center gap-3 transition self-stretch">
              <Search className="w-6 h-6 text-white stroke-[3px]" />
              <span className="text-lg font-bold">Rechercher</span>
            </button>
          </div>

          <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
            Tech Your Job : la plateforme créée par des dev, pour t'aider à trouver ton prochain métier, en conditions réelles.
            <br />
            Pour cela nous utilisons un système unique de projet intégré !
          </p>
          <button className="mt-4 text-xl flex items-center gap-2 mx-auto hover:underline">
            Découvrir <FaRegArrowAltCircleDown className="w-6 h-6" />
          </button>

        </header>

      </div>
        {/* --- SECTION EXPLORER --- */}
        <div className="bg-[#242424]">
          <section className="py-12 px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Explorer nos offres</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#2a2a2a] min-h-64 rounded-xl border border-gray-800 hover:border-purple-500 transition group">
                  { /* Top of card */}
                  <div className="w-ful l h-1/4 flex justify-center items-center rounded-t-xl bg-[#4D4D4D]">
                    <h3 className="font-bold text-2xl justify-center">Développeur Web</h3>
                  </div>
                  <div className="w-full h-3/4 flex flex-col justify-between bg-[url('/image18.png')] bg-cover bg-center rounded-b-xl">
                    <div className="w-full flex justify-start">
                      <p className="text-white text-xl p-4">+ 350 offres <br/> Top 5</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <button className="px-12 py-3 mb-6 py-2 bg-white text-purple-700 rounded-full text-s font-bold hover:bg-purple-100 transition">
                        Découvrir +
                      </button>
                    </div>
                  </div>
                  
                </div>
                <div className="bg-[#2a2a2a] min-h-64 rounded-xl border border-gray-800 hover:border-purple-500 transition group">
                  { /* Top of card */}
                  <div className="w-ful l h-1/4 flex justify-center items-center rounded-t-xl bg-[#4D4D4D]">
                    <h3 className="font-bold text-2xl justify-center">Développeur IA</h3>
                  </div>
                  <div className="w-full h-3/4 flex flex-col justify-between bg-[url('/image18.png')] bg-cover bg-center rounded-b-xl">
                    <div className="w-full flex justify-start">
                      <p className="text-white text-xl p-4">+ 350 offres <br/> Top 5</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <button className="px-12 py-3 mb-6 py-2 bg-white text-purple-700 rounded-full text-s font-bold hover:bg-purple-100 transition">
                        Découvrir +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2a2a2a] min-h-64 rounded-xl border border-gray-800 hover:border-purple-500 transition group">
                  { /* Top of card */}
                  <div className="w-ful l h-1/4 flex justify-center items-center rounded-t-xl bg-[#4D4D4D]">
                    <h3 className="font-bold text-2xl justify-center">Data Engineer</h3>
                  </div>
                  <div className="w-full h-3/4 flex flex-col justify-between bg-[url('/image18.png')] bg-cover bg-center rounded-b-xl">
                    <div className="w-full flex justify-start">
                      <p className="text-white text-xl p-4">+ 350 offres <br/> Top 5</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <button className="px-12 py-3 mb-6 py-2 bg-white text-purple-700 rounded-full text-s font-bold hover:bg-purple-100 transition">
                        Découvrir +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2a2a2a] min-h-64 rounded-xl border border-gray-800 hover:border-purple-500 transition group">
                  { /* Top of card */}
                  <div className="w-ful l h-1/4 flex justify-center items-center rounded-t-xl bg-[#4D4D4D]">
                    <h3 className="font-bold text-2xl justify-center">Développeur IA</h3>
                  </div>
                  <div className="w-full h-3/4 flex flex-col justify-between bg-[url('/image18.png')] bg-cover bg-center rounded-b-xl">
                    <div className="w-full flex justify-start">
                      <p className="text-white text-xl p-4">+ 350 offres <br/> Top 5</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <button className="px-12 py-3 mb-6 py-2 bg-white text-purple-700 rounded-full text-s font-bold hover:bg-purple-100 transition">
                        Découvrir +
                      </button>
                    </div>
                  </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-md font-bold transition">
                Explorer les toutes
              </button>
              
              {/* Partners Logos */}
              <div className="flex flex-wrap justify-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo" className=""/>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo" className=""/>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo" className=""/>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo" className=""/>
                  </div>
              </div>
              <p className="text-xs text-gray-400">
                Vous êtes une entreprise et vous recrutez ? 
                
              </p>
              <a href="#" className="text-teal-400 text-xs underline">Renseignez-vous !</a>
            </div>
          </section>
        </div>

        {/* SECTION SYSTEME UNIQUE */}
    <section className="py-20 bg-[#1a1a1a] relative">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16">
          Notre système de projet <span className="text-teal-400 italic">Unique</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative">
            <div className="absolute -right-6 top-0 bottom-0 w-1 bg-blue-500 rounded-full opacity-50 hidden lg:block"></div>
            
            <div className="bg-[#333] p-4 rounded-xl max-w-sm ml-0 border-l-4 border-gray-500">
                <h4 className="font-bold text-sm mb-1">Des compétences par la pratique</h4>
                <p className="text-[10px] text-gray-300">Chez Tech Your Job, nous croyons que pour tester les compétences, il faut les mettre en pratique.</p>
            </div>

            <div className="bg-[#333] p-4 rounded-xl max-w-sm ml-auto mr-12 border-l-4 border-gray-500">
                <h4 className="font-bold text-sm mb-1 text-right">Comment ?</h4>
                <p className="text-[10px] text-gray-300 text-right">Les entreprises proposent des mini-projets qui simulent leur stack technique réelle.</p>
            </div>

            <div className="bg-[#333] p-4 rounded-xl max-w-sm ml-0 border-l-4 border-gray-500">
                <h4 className="font-bold text-sm mb-1">Comment j'y répond ?</h4>
                <p className="text-[10px] text-gray-300">Directement depuis la page de l'offre.</p>
            </div>
          </div>

          {/* Right side colored boxes */}
          <div className="relative h-[300px]">
            <div className="absolute top-0 left-0 w-48 h-48 bg-teal-800 rounded-md p-4 shadow-xl z-10 flex justify-center font-bold text-black">
              1 question
            </div>
            <div className="absolute bottom-0 left-4 w-48 h-48 bg-teal-500 rounded-md p-4 shadow-xl z-20 flex justify-center font-bold text-black">
              <span>réponses</span>
              <span><br/>inifini</span>
            </div>
            <div className="absolute top-1/2 right-40 transform -translate-y-1/2 w-48 h-48 bg-purple-700 rounded-md p-4 shadow-xl z-30 flex items-start justify-end font-bold uppercase italic">
              1 consigne
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* --- FOOTER CALL TO ACTION --- */}
    <footer className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Vous êtes convaincu ?</h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
        Rejoignez l'aventure Tech Your Job dès maintenant et trouvez votre futur offre
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-md font-bold flex items-center gap-2 mx-auto transition transform hover:scale-105">
        En avant <ArrowRightCircle className="w-5 h-5" />
      </button>
    </footer>
  </div>  
);
}
