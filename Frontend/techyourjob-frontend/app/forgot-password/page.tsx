"use client"; 
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("Email à envoyer :", email);
  };

  return (
    <main className="min-h-screen w-full bg-[#242424] flex">
      
      {/* formulaire */}
      <div className="w-full md:w-[45%] flex flex-col items-center justify-center p-6 space-y-18">
        
        {/* titrre et lien */}
        <div className="text-center space-y-5">
          <h1 className="text-white text-7xl font-bold">
            Tech Your Job
          </h1>
          <h1 className="text-[#ADADAD] font-bold text-s flex justify-center">
            Remembered your password? <a href="/login" className="text-[#7288C9] ml-1 cursor-pointer underline">Login</a>
          </h1>
        </div>

         
        <div className="w-full max-w-xl bg-[#2c2c2c] rounded-[40px] py-15 px-10 shadow-2xl">
          
          <div className="text-center mb-12">
            <h1 className="text-white text-5xl font-bold mb-4">
              Forgot Password
            </h1>
            <p className="text-[#8e8e8e] font-bold">
              Enter your email to reset it.
            </p>
          </div>

          <form className="space-y-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email address"
              className="w-full bg-[#242424] text-white font-bold placeholder:font-bold placeholder-[#8e8e8e] px-6 py-4 rounded-full outline-none border-2 border-[#8e8e8e] transition-all"
            />

            <button
              type="submit"
              className="block mx-auto bg-[#242424] text-xl border-2 border-[#8e8e8e] text-[#7288c9] font-bold py-4 px-20 rounded-full cursor-pointer"
            >
              Reset
            </button>
          </form>
        </div>
      </div>

      {/* image*/}
      <div className="hidden md:flex w-[55%] h-screen items-center justify-center p-8">
        <div
        
          className="w-full h-full rounded-[70px] bg-cover bg-center"
          style={{
            backgroundImage: "url('image 3.png')",
          }}
        />
      </div>

    </main>
  );
}