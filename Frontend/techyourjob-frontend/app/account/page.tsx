"use client";
import Header from "../components/header";
import { useState } from "react";

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

// les edits
import Document_Edit from "../components/Account_Modif/Document_Edit";

export default function Account() {
  const [isDocumentEdit, setisDocumentEdit] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
      <Document_Edit
        isOpen={isDocumentEdit}
        onClose={() => setisDocumentEdit(false)}
      />

      <Header />

      <div className="grid grid-cols-[0.7fr_2.3fr] gap-x-2 gap-y-4 mt-4 px-4 pb-4">
        <div className="flex flex-col gap-4">
          <DashBoard_Preview />
          <Document_priview />
          <Competence_Preview />
        </div>

        <div className="flex flex-col gap-4">
          <Infos_generale />
          <div className="grid grid-cols-2 gap-4">
            <Biographie_account />
            <div className="flex flex-col gap-4">
              <Contact_account />
              <Plateforme_Account />
            </div>
          </div>
          <ExperiencePro_account />
          <Formation_Account />
        </div>
      </div>
    </div>
  );
}
