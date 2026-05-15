"use client";
import Header from "../components/NavBar/header";
import { useEffect, useState } from "react";

import { Get_User_Info } from "../services/Info_User_Service";

// components
import DashBoard_Preview from "../components/Account_components/Dashboard_preview";
import Document_priview from "../components/Account_components/Document";
import Competence_Preview from "../components/Account_components/Competence_preview";
import Infos_generale from "../components/Account_components/Infos_generale";
import Biographie_account from "../components/Account_components/biographie";
import Contact_account from "../components/Account_components/Contact_account";
import Plateforme_Account from "../components/Account_components/Plateforme_account";
import ExperiencePro_account from "../components/Account_components/ExperiencePro_account";
import Formation_Account from "../components/Account_components/Formation_account";

export default function Account() {
  const [isDocumentEdit, setisDocumentEdit] = useState(false);
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await Get_User_Info();
      setData(data);
      console.log(data.experience[0]);
      console.log(data.formation[0]);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
      <Header />

      <div className="grid grid-cols-[0.7fr_2.3fr] gap-x-2 gap-y-4 mt-4 px-4 pb-4">
        <div className="flex flex-col gap-4">
          <DashBoard_Preview />
          <Document_priview />
          {Data && (
            <Competence_Preview
              infos={{
                competences_experience: Data.experience.flatMap((e) =>
                  (e["compétences"] ?? []).map((c) => ({
                    competence: c,
                    source: e.nom_entreprise,
                  })),
                ),
                competences_formation: Data.formation.flatMap((f) =>
                  (f["compétences"] ?? []).map((c) => ({
                    competence: c,
                    source: f["nom_établissement"],
                  })),
                ),
              }}
            />
          )}
          {/* <Competence_Preview /> */}
        </div>

        <div className="flex flex-col gap-4">
          {Data && (
            <Infos_generale
              infos={{
                ...Data.global[0],
                ...Data.profil[0],
                PP: Data.profil[0].photo_profil,
              }}
            />
          )}
          <div className="grid grid-cols-2 gap-4">
            {Data && (
              <Biographie_account
                infos={{
                  ...Data.profil[0],
                }}
              />
            )}
            <div className="flex flex-col gap-4">
              {Data && (
                <Contact_account
                  infos={{
                    ...Data.global[0],
                  }}
                />
              )}

              {Data && (
                <Plateforme_Account
                  infos={{
                    ...Data.profil[0],
                  }}
                />
              )}
            </div>
          </div>
          {Data && (
            <ExperiencePro_account
              infos={{
                experience: Data.experience,
                competences_experience: Data.experience.flatMap((e) =>
                  (e["compétences"] ?? []).map((c) => ({
                    competence: c,
                    source: e.nom_entreprise,
                  })),
                ),
              }}
            />
          )}
          {Data && <Formation_Account infos={Data.formation} />}
        </div>
      </div>
    </div>
  );
}
