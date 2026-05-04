import Header from "../components/header";

function HiringPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">


      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">


        {/* text debut*/}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 py-10">

          <div className="lg:w-1/2">

            <h1 className="text-5xl font-bold mb-6">

              Trouvez les meilleurs <br /> développeurs, Sans bruit
            </h1>
            <p className="text-gray-400 mb-10 text-lg">

              Lorem ipsum dolor sit amet. Et galisum tempora et voluptate provident non labore incidunt At quos distinctio vel tempore pariatur.
            </p>
            <div className="flex flex-wrap gap-4">

              <button className="bg-[#8a2be2] px-6 py-3 rounded-xl font-medium">Commencer à recruter gratuitement</button>


              <button className="bg-[#8a2be2] px-6 py-3 rounded-xl font-medium">En savoir plus sur la méthode</button>

            </div>
          </div>

          {/* profils léo truc*/}
          <div className="relative w-full max-w-sm h-80 flex items-center justify-center">


             {/* carte gauche */}
            <div className="absolute left-0 bg-[#333] w-48 h-64 rounded-xl -rotate-6 opacity-40 border border-gray-700" />


            {/* carte droite */}
            <div className="absolute right-0 bg-[#333] w-48 h-64 rounded-xl rotate-6 opacity-40 border border-gray-700" />


            {/* Carte centre */}
            <div className="relative z-10 bg-[#2a2a2a] w-56 h-72 rounded-xl shadow-2xl border border-gray-600 flex flex-col items-center justify-center p-4">


              <div className="w-20 h-20 bg-gray-400 rounded-full mb-4" />

              <p className="font-bold">Léo</p>

              <p className="text-xs text-gray-400 mb-6 text-center">Fullstack JS (React, Node)</p>
              
              <button className="bg-[#8a2be2] text-xs px-4 py-2 rounded-lg">Voir le profil</button>
            </div>
          </div>

        </section>

        {/* pourquoi nous choisir*/}
        <section className="mt-20">


          <h2 className="text-xl font-bold mb-8 border-b-2 border-blue-500 inline-block pb-1">
            Pourquoi choisir TechYourJob RECRUTE ?

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* carte 1 */}
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800">

              <h3 className="font-bold mb-2">1. Matchmaking intelligent</h3>
              <p className="text-sm text-gray-400"> Lorem ipsum dolor sit amet. Et galisum tempora et voluptate provident non labore incidunt At quos distinctio vel tempore pariatur..</p>
            </div>

            {/* carte 2 */}
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800">

              <h3 className="font-bold mb-2">2. matchmaking truc</h3>
              <p className="text-sm text-gray-400"> Lorem ipsum dolor sit amet. Et galisum tempora et voluptate provident non labore incidunt At quos distinctio vel tempore pariatur.</p>
            </div>

            {/* carte 3 */}
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800">

              <h3 className="font-bold mb-2">3. matchmaking truc</h3>
              <p className="text-sm text-gray-400"> Lorem ipsum dolor sit amet. Et galisum tempora et voluptate provident non labore incidunt At quos distinctio vel tempore pariatur.</p>
            </div>

          </div>
        </section>

        {/* card du bas pour avis sois disant*/}
        <section className="mt-24">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* aivs 1 */}


            <div className="flex flex-col">
              <div className="bg-[#333] p-6 rounded-2xl relative mb-6 border border-gray-800">
                <p className="text-sm text-gray-400 mb-4">
                   Lorem ipsum dolor sit amet. Et galisum tempora et voluptate provident non labore incidunt At quos distinctio vel tempore pariatur.
                </p>
                <div className="w-full h-6 bg-[#216b7a] rounded-md opacity-50" />
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#333] rotate-45 border-r border-b border-gray-800" />
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full" />
                <div>
                  <p className="text-sm font-bold">Marc Durand</p>
                  <p className="text-xs text-gray-500">CEO chez StartupX</p>
                </div>
              </div>
            </div>




            {/* avis 2 */}


            <div className="flex flex-col">
              <div className="bg-[#333] p-6 rounded-2xl relative mb-6 border border-gray-800">
                <p className="text-sm text-gray-400 mb-4">
                   Lorem ipsum dolor sit amet. Et galisum tempora et voluptate provident non labore incidunt At quos distinctio vel tempore pariatur.
                </p>
                <div className="w-full h-6 bg-[#216b7a] rounded-md opacity-50" />
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#333] rotate-45 border-r border-b border-gray-800" />
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="w-10 h-10 bg-green-500 rounded-full" />
                <div>
                  <p className="text-sm font-bold">Sophie Martin</p>
                  <p className="text-xs text-gray-500">HR Manager</p>
                </div>
              </div>
            </div>




            {/*avis 3*/}


            <div className="flex flex-col">
                <div className="bg-[#333] p-6 rounded-2xl relative mb-6 border border-gray-800">
                  
                  
                  <p className="text-sm text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet. Et galisum tempora et voluptate provident non labore incidunt At quos distinctio vel tempore pariatur.
                  </p>


                  <div className="w-full h-6 bg-[#216b7a] rounded-md opacity-50" />

                  <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#333] rotate-45 border-r border-b border-gray-800" />


                </div>

                <div className="flex items-center gap-3 ml-4">


                  <div className="w-10 h-10 bg-red-500 rounded-full" />

                  <div>
                    <p className="text-sm font-bold">Thomas Lebris</p>
                    
                    <p className="text-xs text-gray-500">Lead Dev</p>
                  </div>
                </div>
              </div>

          </div>

        </section>

      </main>


    </div>
  );
}

export default HiringPage;