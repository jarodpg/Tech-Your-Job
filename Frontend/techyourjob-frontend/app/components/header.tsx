import Link from "next/link";

function Header() {
  const navLinks = [
    { icon: "Home.svg", label: "Accueil", alt: "accueil", href: "/" },
    { icon: "Archive.svg", label: "Offres", alt: "offres", href: "/offre" },
    {
      icon: "batiment.svg",
      label: "Entreprises",
      alt: "entreprises",
      href: "/entreprise",
    },
    {
      icon: "recrutement.svg",
      label: "Je recrute",
      alt: "recrutement",
      href: "/hiring",
    },
  ];

  return (
    <div className="bg-[#2C2C2C] flex justify-between items-center px-7 h-16 border-b border-white/10 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img
          style={{ width: "38px" }}
          src="techyourjob.png"
          alt="Logo Tech Your Job"
        />
        <span className="font-extrabold text-white text-lg tracking-wide">
          Tech Your Job
        </span>
      </div>

      <div className="flex items-center gap-8">
        {/* Navigation */}
        <nav className="flex items-stretch h-16">
          {navLinks.map(({ icon, label, alt, href }) => (
            <Link
              key={label}
              href={href}
              className="relative flex items-center gap-2 px-3 group transition-colors duration-200"
            >
              <img style={{ width: "18px" }} src={icon} alt={alt} />
              <span className="font-bold text-sm text-white/80 group-hover:text-white transition-colors duration-200">
                {label}
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          ))}
        </nav>

        {/* double icon a la fin */}
        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Notifications"
          >
            <img style={{ width: "20px" }} src="Bell.svg" alt="" />
          </button>
          <Link href="/login">
            <button
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Mon profil"
            >
              <img style={{ width: "22px" }} src="User.svg" alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
