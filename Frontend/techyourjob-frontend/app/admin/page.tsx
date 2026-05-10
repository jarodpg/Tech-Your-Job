"use client";

import React,  { useState } from 'react';


const AdminDashboard = () => {



  //  datas de test
  const [offres] = useState([
    { titre: 'Développeur Fullstack JS', boite: 'NextGen Tech', type: 'CDI' },
       { titre: 'Ingénieur DevOps', boite: 'CloudSys', type: 'Alternance' },

    { titre: 'Data Analyst', boite: 'StatMarket', type: 'Stage' },
  ]);

  const [users] = useState([
    { nom: 'Arthur Pendragon', mail: 'a.pendragon@epitech.eu' },
    { nom: 'Léa Martin', mail: 'lea.m@gmail.com' },
  ]);

  // flemme de gerer le siret pr linstan
  const [entreprises] = useState([
    { nom: 'SecureNet France', statut: 'En attente' },
    
    { nom: 'DevAgency', statut: 'Nouveau compte' },
  ]);


  // use states pr garder les inputs (sur demande de pvcraft mdr)
  const [searchOffre, setSearchOffre] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [searchBoite, setSearchBoite] = useState("");


  return (
    
    <div className="bg-[#242424] min-h-screen font-sans text-[#8e8e8e] p-4 md:p-8" >
      
      {/* le title */}
    
      <div className="mx-auto mb-10 px-4">


        <h1 className="text-3xl font-extrabold text-[#7288c9] tracking-tight">
          Admin / Tech Your Job
        </h1>


      </div>

      {/* div globale pr les colonnes */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"   >


        {/*offres*/}
        <div className="bg-[#2c2c2c] p-6 rounded-3xl shadow-xl">

          <h2 className="text-[#7288c9] font-bold text-lg mb-4 px-2">Annonces</h2>
          
          {/* la tite barre de recherche */}
          <input 
            type="text" placeholder="Chercher une offre..." value={searchOffre} onChange={(e) => setSearchOffre(e.target.value)} className="w-full bg-[#242424] border border-[#8e8e8e]/20 text-[#8e8e8e] text-sm rounded-full px-4 py-2 mb-6 focus:outline-none focus:border-[#7288c9]/50 transition"
          />

          <div className="space-y-4">

            {/* on a enleve le filter, just un map normal */}
            {offres.map((off, index) => (

              <div key={index} className="bg-[#242424] border border-[#8e8e8e]/20 p-5 rounded-2xl transition hover:border-[#7288c9]/50">


                <h3 className="font-bold text-white text-md">{off.titre}</h3>

                <p className="text-sm text-[#8e8e8e] mt-1">{off.boite} /  {off.type}</p>
                
                <div className="mt-5 flex gap-3">


                  <button className="flex-1 bg-[#7288c9] text-[#242424] font-bold py-2 rounded-full text-s hover:opacity-90 transition">
                    Valider
                  </button>


                  <button className="flex-1 border border-[#8e8e8e] text-[#8e8e8e] py-2 rounded-full text-s hover:bg-[#8e8e8e] hover:text-[#242424] transition">
                    Refuser
                  </button>


                </div>


              </div>

            ))}
          </div>

        </div>



        {/* utilisateurs */}


        <div className="bg-[#2c2c2c] p-6 rounded-3xl shadow-xl">

          <h2 className="text-[#7288c9] font-bold text-lg mb-4 px-2">Utilisateurs</h2>
          
          {/* barre de recherche user */}
          <input 
            type="text" 
            placeholder="Chercher un utilisateur..." 
            value={searchUser}
            onChange={(e)  => setSearchUser( e.target.value )}
            className="w-full bg-[#242424] border border-[#8e8e8e]/20 text-[#8e8e8e] text-sm rounded-full px-4 py-2 mb-6 focus:outline-none focus:border-[#7288c9]/50 transition"
          />

          <div className="space-y-4">
            
            {/* on a enleve le filter ici aussi */}
            {users.map((usr, index) => (
              <div key={index} className="bg-[#242424] border border-[#8e8e8e]/20 p-5 rounded-2xl">

                <div className="flex items-center mb-4">

                  <div>
                    <h3 className="font-bold text-white">{usr.nom}</h3>
                    <p className="text-[10px] text-[#8e8e8e] truncate w-32">{usr.mail}</p>

                  </div>


                </div>

                <div className="flex gap-2">

                  <button className="flex-1 bg-[#2c2c2c] border border-[#7288c9] text-[#7288c9] py-2 rounded-full text-[15px] font-bold hover:bg-[#7288c9] hover:text-[#242424] transition">
                    Gérer les informations
                  </button>

                </div>

              </div>
            ))}
          </div>
        </div>


        {/* boites*/}
        <div className="bg-[#2c2c2c] p-6 rounded-3xl shadow-xl">

          <h2 className="text-[#7288c9] font-bold text-lg mb-4 px-2">Partenaires</h2>
          
          {/* barre de recherche boite */}
          <input 
            type="text" 
            placeholder="Chercher une boite..." 
            value={searchBoite}
            onChange={(e) => setSearchBoite(e.target.value)}
            className="w-full bg-[#242424] border border-[#8e8e8e]/20 text-[#8e8e8e] text-sm rounded-full px-4 py-2 mb-6 focus:outline-none focus:border-[#7288c9]/50 transition"
          />

          <div className="space-y-4">

            {/* et ici aussi le filter est parti */}
            {entreprises.map((ent, i) => (

              <div key={i} className="bg-[#242424] border border-[#8e8e8e]/20 p-5 rounded-2xl">


                <h3 className="font-bold text-white">{ent.nom}</h3>
                <p className="text-xs mt-1 italic text-[#8e8e8e]">{ent.statut}</p>
                
                
                <button className="w-full mt-4 bg-white/5 border border-[#8e8e8e]/30 text-[#7288c9] py-2 rounded-full font-bold  hover:bg-[#7288c9] hover:text-[#242424] transition">
                  Certifier la boîte
                </button>

              </div>
            ))}
          </div>

        </div>

      </div>
      
   
    </div>
  );
};

export default AdminDashboard;