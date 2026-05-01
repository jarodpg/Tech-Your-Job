export default function LoginPage() {
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
          <h1 className="text-white text-7xl font-bold">
            Tech Your Job
          </h1>
          <h1 className="text-[#adadad] font-bold text-s flex ml-1">
            Does not have an Account? <span className="text-[#7288C9]">Register</span>
          </h1>
        </div>
        

        {/* formulaire */}
        <div className="w-full max-w-xl bg-[#2c2c2c] rounded-[40px] py-15 px-10 shadow-2xl">
          
          
          <div className="text-center mb-18">
            <h1 className="text-white text-6xl font-bold">
              Welcome Back!
            </h1>
          </div>

          
          <form className="space-y-3">
            <div className="space-y-16">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#242424] text-white font-bold placeholder:font-bold placeholder-[#8e8e8e] px-6 py-4 rounded-full outline-none border-2 border-[#8e8e8e] focus:border-[#7288C9] transition-all"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#242424] text-white placeholder:font-bold placeholder-[#8e8e8e] px-6 py-4 rounded-full outline-none border-2 border-[#8e8e8e] focus:border-[#7288C9] transition-all"
              />
            </div>

            <div className="flex justify-start ml-2 mb-15">
              <a href="#" className="text-s font-bold text-[#7288C9] hover:opacity-95 transition">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
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