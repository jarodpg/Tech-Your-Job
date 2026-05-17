"use client";
import { Register } from "../services/auth.service";
import { useState } from "react";

export default function RegisterPage() {
  const [Email, setEmail] = useState("");
  const [LastName, setLastName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [Password, setPassword] = useState("");

  //states de sécu
  const [HoneyPot, setHoneyPot] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  function handleRegister(e) {
    e.preventDefault(); // empeche le refresh

    //si honey pot remplie alros on stop tout car cest un bot le champ estpas visible
    if (HoneyPot !== "") {
      console.warn("Activité suspecte détectée.");
      return;
    }

    if (isLocked) return;

    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setIsLocked(true); // bloque tt apres 3 cliqye car islocked va etre acticé
    }

    Register(LastName, FirstName, Email, Password);
  }

  return (
    <main className="min-h-screen w-full bg-[#242424] flex">
      {/* formulaire*/}
      <div className="w-full md:w-[45%] flex flex-col items-center justify-center p-6 space-y-10">
        {/* tech your job titre */}
        <div className="text-center space-y-5">
          <h1 className="text-white text-7xl font-bold">Tech Your Job</h1>
          <a
            href="/login"
            className="text-[#7288C9] flex justify-start font-bold ml-1 cursor-pointer underline"
          >
            Already have an account ?
          </a>
        </div>

        {/* formulaire */}
        <div className="w-full max-w-xl bg-[#2c2c2c] rounded-[40px] py-15 px-10 shadow-2xl">
          <div className="text-center mb-11">
            <h1 className="text-white text-6xl font-bold">Welcome!</h1>
          </div>

          <form onSubmit={handleRegister} className="space-y-3">
            <div className="space-y-6 mb-10">
              {/*le honey pot dc le champ pas visible*/}
              <input
                type="text"
                value={HoneyPot}
                onChange={(e) => setHoneyPot(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full bg-[#242424] text-white font-bold placeholder:font-bold placeholder-[#8e8e8e] px-6 py-4 rounded-full outline-none border-2 border-[#8e8e8e] focus:border-[#7288C9] transition-all"
              />

              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full bg-[#242424] text-white font-bold placeholder:font-bold placeholder-[#8e8e8e] px-6 py-4 rounded-full outline-none border-2 border-[#8e8e8e] focus:border-[#7288C9] transition-all"
              />

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-[#242424] text-white font-bold placeholder:font-bold placeholder-[#8e8e8e] px-6 py-4 rounded-full outline-none border-2 border-[#8e8e8e] focus:border-[#7288C9] transition-all"
              />

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#242424] text-white placeholder:font-bold placeholder-[#8e8e8e] px-6 py-4 rounded-full outline-none border-2 border-[#8e8e8e] focus:border-[#7288C9] transition-all"
              />
            </div>

            {/* ajout de disabled pour désactiver le bouton */}
            <button
              type="submit"
              disabled={isLocked}
              className="cursor-pointer block mx-auto bg-[#242424] text-xl border-2 border-[#8e8e8e] text-[#7288c9] font-bold py-4 px-25 rounded-full"
            >
              Connexion
            </button>
            {/* ============================================================================= */}
          </form>
        </div>
      </div>

      {/* img */}
      <div className="hidden md:flex w-[55%] h-screen items-center justify-center p-8">
        <div
          className="w-full h-full rounded-[70px] bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: "url('image 3.png')",
          }}
        />
      </div>
    </main>
  );
}
