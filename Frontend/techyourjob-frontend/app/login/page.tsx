export default function LoginPage() {
  return (
  
    <main className="min-h-screen w-full bg-[#242424] flex">
      
      {/* LEFT SIDE - IMAGE */}
      
      <div className="hidden md:flex w-[65%] h-screen items-center justify-center p-8">
        <div
          className="w-full h-full rounded-[70px] bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: "url('image 3.png')",
          }}
        />
      </div>

      {/* RIGHT SIDE - FORM */}
    <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#2c2c2c] rounded-[40px] py-15 px-10 shadow-2xl">
      
      {/* HEADER DANS LA DIV */}
      <div className="text-center mb-10">
        <h1 className="text-white text-4xl font-bold tracking-tight">
          Tech Your Job
        </h1>
        <p className="text-gray-400 text-sm mt-3">
          New here?{" "}
          <span className="text-[#7288C9] font-medium cursor-pointer hover:underline">
            Create an account
          </span>
        </p>
      </div>

      {/* FORMULAIRE */}
      <form className="space-y-6">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-[#242424] text-white placeholder-gray-500 px-6 py-4 rounded-2xl outline-none border border-gray-700 focus:border-[#7288C9] transition-all"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#242424] text-white placeholder-gray-500 px-6 py-4 rounded-2xl outline-none border border-gray-700 focus:border-[#7288C9] transition-all"
          />
        </div>

        <div className="flex justify-end">
          <a href="#" className="text-xs text-[#7288C9] hover:opacity-80 transition">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#7288C9] text-white font-semibold py-4 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#7288C9]/20"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
    </main>
  );
}