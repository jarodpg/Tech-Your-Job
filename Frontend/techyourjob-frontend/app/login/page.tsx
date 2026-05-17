"use client";
import { Login } from "../services/auth.service";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // states pr la sécu
  const [HoneyPot, setHoneyPot] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    //si ce champ caché est rempli alors bot détecté et ca stop tt donc aucune requete
    if (HoneyPot !== "") {
      console.warn("Activité suspecte détectée.");
      return;
    }

    if (isLocked) return;

    //compte les clicls et si trop de clic return activé et fin du code
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setIsLocked(true); //bloque tt
    }

    const success = await Login(Email, Password);
    if (success) {
      router.push("/offre");
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#242424] flex">
      {/* LEFT SIDE - IMAGE */}
      <div className="hidden md:flex w-[55%] h-screen items-center justify-center p-8">
        <div
          className="w-full h-full rounded-[70px] bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: "url('image 3.png')",
          }}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[45%] flex flex-col items-center justify-center p-6 space-y-18">
        {/* tech your job titre */}
        <div className="text-center space-y-5">
          <h1 className="text-white text-7xl font-bold">Tech Your Job</h1>
          <h1 className="text-[#adadad] font-bold text-s flex ml-1">
            Does not have an Account?{" "}
            <a
              href="/register"
              className="text-[#7288C9] ml-1 cursor-pointer underline"
            >
              Register
            </a>
          </h1>
        </div>

        {/* formulaire */}
        <div className="w-full max-w-xl bg-[#2c2c2c] rounded-[40px] py-15 px-10 shadow-2xl">
          <div className="text-center mb-18">
            <h1 className="text-white text-6xl font-bold">Welcome Back!</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <div className="space-y-16">
              {/* ajout du champ invisible pour les bots */}
              <input
                type="text"
                value={HoneyPot}
                onChange={(e) => setHoneyPot(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1} // ca sert a empecher le mec de faire tab pour voir si il y a pas des champs caché
                autoComplete="off"
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

            <div className="flex justify-start ml-2 mb-15">
              <a
                href="/forgotpassword"
                className="text-[#7288C9] ml-1 cursor-pointer font-bold underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* ajout de disabled truc pour quel la condition du 3 click s'actionne */}
            <button
              type="submit"
              disabled={isLocked}
              className="block mx-auto bg-[#242424] text-xl border-2 border-[#8e8e8e] text-[#7288c9] font-bold py-4 px-25 rounded-full"
            >
              Connexion
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
