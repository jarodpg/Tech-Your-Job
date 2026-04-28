export default function RegisterPage() {
  return (
    <main className="min-h-screen w-full bg-[#242424] flex">

      {/* LEFT SIDE - FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-white text-3xl font-semibold">
              Tech Your Job
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              <span className="text-blue-400 cursor-pointer hover:underline">
                Already have an account?
              </span>
            </p>
          </div>

          {/* CARD */}
          <div className="bg-[#2c2c2c] rounded-2xl p-8 shadow-xl">
            <h2 className="text-white text-2xl font-semibold mb-6">
              Welcome back !
            </h2>

            <form className="space-y-4">
              <input
                placeholder="Your name"
                className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none border border-gray-600 focus:border-gray-400"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none border border-gray-600 focus:border-gray-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none border border-gray-600 focus:border-gray-400"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none border border-gray-600 focus:border-gray-400"
              />


              <div className="">
                <a
                  href="#"
                  className="text-xs text-blue-400 hover:underline"
                >
                  Forgot your password ?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#242424] text-white border border-gray-600 font-medium py-3 rounded-2xl hover:bg-[#8208D4] transition"
              >
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('image 3.png')",
          }}/>
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </main>
  );
}