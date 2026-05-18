"use client";
import Header from "../components/NavBar/header";
import { useEffect, useState } from "react";

import { Get_User_Info } from "../services/Info_User_Service";

import { See_Profile_User } from "../services/Entreprise/See_Profile_User";
import { useSearchParams } from "next/navigation";

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

// page entreprise
import AddTestTechnique from "../components/Account_components/Entreprise/AJouter_test_technique";
import Reponse_candidats from "../components/Account_components/Entreprise/Managae_reponse";

export default function Account() {
  // pour visionner un profile user
  const searchParams = useSearchParams();
  const viewUserId = searchParams.get("user");

  //data
  const [Data, setData] = useState(null);

  // pour savoir si on edit ou non les donnee de la page
  const [isEdit, setIsEdit] = useState(true);

  //sauvegarde du job
  const [isUser, setIsUser] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      let data;

      if (viewUserId) {
        // voir un compte
        data = await See_Profile_User(viewUserId);
        setIsEdit(false);
        setIsUser(true);
      } else {
        // mon profil
        data = await Get_User_Info();
        if (data.global[0].role === "enterprise") {
          setIsEdit(false);
          setIsUser(false);
        }
      }

      setData(data);
    };
    fetchUser();
  }, [viewUserId]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
      <Header />

      {/* // si c'est un user */}
      {isUser && (
        <div className="grid grid-cols-[0.7fr_2.3fr] gap-x-2 gap-y-4 mt-4 px-4 pb-4">
          <div className="flex flex-col gap-4">
            {!Data && (
              <h1 className="text-bold">
                Acces reserve pour les entreprises partenaire !
              </h1>
            )}
            {Data && <DashBoard_Preview infos={Data.profil[0]} />}
            {Data && (
              <Document_priview
                isEdit={isEdit}
                docs={Data.profil[0]?.document}
              />
            )}
            {Data && (
              <Competence_Preview
                isEdit={isEdit}
                infos={{
                  competences_experience: Data.experience.flatMap((e) =>
                    (e["compétences"] ?? []).map((c) => ({
                      competence: c,
                      source: e.nom_entreprise,
                      sourceType: "experience" as const,
                      sourceId: e.id_experience,
                      logo: e.logo ?? null,
                    })),
                  ),
                  competences_formation: Data.formation.flatMap((f) =>
                    (f["compétences"] ?? []).map((c) => ({
                      competence: c,
                      source: f["nom_établissement"],
                      sourceType: "formation" as const,
                      sourceId: f.id_formation,
                      logo: f.logo ?? null,
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
                isEdit={isEdit}
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
                  isEdit={isEdit}
                  infos={{
                    ...Data.profil[0],
                  }}
                />
              )}
              <div className="flex flex-col gap-4">
                {Data && (
                  <Contact_account
                    isEdit={isEdit}
                    infos={{
                      ...Data.global[0],
                    }}
                  />
                )}

                {Data && (
                  <Plateforme_Account
                    isEdit={isEdit}
                    infos={{
                      ...Data.profil[0],
                    }}
                  />
                )}
              </div>
            </div>
            {Data && (
              <ExperiencePro_account
                isEdit={isEdit}
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
            {Data && (
              <Formation_Account isEdit={isEdit} infos={Data.formation} />
            )}
          </div>
        </div>
      )}
      {!isUser && (
        <div className="flex flex-row gap-5">
          <AddTestTechnique />
          <Reponse_candidats />
        </div>
      )}
    </div>
  );
}
