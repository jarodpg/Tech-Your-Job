"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Login, Register } from "../services/auth.service";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  // detection mode mobile pour image
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);
    const listener = () => setIsDesktop(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // States champ commun et sécurité
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LastName, setLastName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [HoneyPot, setHoneyPot] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (HoneyPot !== "") return;
    if (isLocked) return;

    setClickCount((prev) => prev + 1);
    if (clickCount >= 2) setIsLocked(true);

    if (isLogin) {
      const success = await Login(Email, Password);
      if (success) router.push("/offre");
    } else {
      Register(LastName, FirstName, Email, Password);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#242424] overflow-hidden relative">
      <div className="relative w-full h-screen">
        
        {/* le formulaire*/}
        <motion.div 
          initial={false}
          animate={{ 
            x: isDesktop ? (isLogin ? "55vw" : "0vw") : "0px" 
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full md:w-[45%] h-full z-10 flex items-center justify-center p-6"
        >
          {/*gère le texte qui passe en dessous de l'image  */}
          <AnimatePresence mode="wait">
            <FormContent 
              key={isLogin ? "login" : "register"}
              isLogin={isLogin} 
              setIsLogin={setIsLogin} 
              handleSubmit={handleSubmit}
              setEmail={setEmail} 
              setPassword={setPassword}
              setFirstName={setFirstName}
              setLastName={setLastName}
              HoneyPot={HoneyPot}
              setHoneyPot={setHoneyPot}
              isLocked={isLocked}
            />
          </AnimatePresence>
        </motion.div>

        {/* image */}
        <motion.div
          initial={false}
          animate={{ 
            x: isDesktop ? (isLogin ? "0vw" : "45vw") : "0px" 
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="hidden md:block absolute top-0 left-0 w-[55%] h-screen p-8 z-20 pointer-events-none"
        >
          <div
            className="w-full h-full rounded-[70px] bg-cover bg-center shadow-2xl pointer-events-auto"
            style={{ backgroundImage: "url('image3.png')" }}
          />
        </motion.div>

      </div>
    </main>
  );
}

// composant pour les animations de fondu
function FormContent({ isLogin, setIsLogin, handleSubmit, setEmail, setPassword, setFirstName, setLastName, HoneyPot, setHoneyPot, isLocked }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl flex flex-col items-center space-y-10"
    >
      {/* Titres */}
      <div className="text-center space-y-5">
        <h1 className="text-white text-7xl font-bold">Tech Your Job</h1>
        <p className="text-[#adadad] font-bold">
          {isLogin ? "Does not have an Account? " : "Already have an account? "}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-[#7288C9] underline cursor-pointer ml-1"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>

      {/* formulaire */}
      <motion.div layout className="w-full bg-[#2c2c2c] rounded-[40px] py-12 px-10 shadow-2xl">
        <h2 className="text-white text-5xl font-bold text-center mb-10">
          {isLogin ? "Welcome Back!" : "Welcome!"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            value={HoneyPot} 
            onChange={(e) => setHoneyPot(e.target.value)} 
            style={{ display: "none" }} 
            tabIndex={-1} 
            autoComplete="off" 
          />
          
          {/* champs register */}
          {!isLogin && (
            <div className="space-y-4">
              <input onChange={(e) => setFirstName(e.target.value)} placeholder="First name" className="w-full bg-[#242424] text-white p-4 rounded-full border-1 border-[#8e8e8e] outline-none focus:border-[#7288C9] font-bold transition-all" />
              <input onChange={(e) => setLastName(e.target.value)} placeholder="Last name" className="w-full bg-[#242424] text-white p-4 rounded-full border-1 border-[#8e8e8e] outline-none focus:border-[#7288C9] font-bold transition-all" />
            </div>
          )}

          {/*champs commun des deux email password */}
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full bg-[#242424] text-white p-4 rounded-full border-1 border-[#8e8e8e] outline-none focus:border-[#7288C9] font-bold transition-all" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full bg-[#242424] text-white p-4 rounded-full border-1 border-[#8e8e8e] outline-none focus:border-[#7288C9] font-bold transition-all" />

          {/* forgot paddword pr login*/}
          {isLogin && (
            <div className="flex justify-start ml-2 pt-2">
              <Link
                href="/forgot-password"
                className="text-[#7288C9] cursor-pointer font-bold underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          <button disabled={isLocked} className="w-full bg-[#242424] text-xl text-[#7288c9] font-bold py-4 rounded-full border-1 border-[#8e8e8e] mt-6 hover:bg-[#1f1f1f] transition-colors">
            {isLogin ? "Connexion" : "S'inscrire"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}