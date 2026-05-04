function Header() {
  return (
    <>
      <div className="bg-[#2C2C2C] flex justify-between pr-17">
        <div className="flex items-center">
          <img
            style={{ width: "15vh" }}
            src="techyourjob.png"
            alt="photologo"
          />

          <p className="font-extrabold text-[3vh]">Tech Your Job</p>
        </div>

        <div className="flex gap-18">
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <img style={{ width: "3.5vh" }} src="Home.svg" alt="home" />
              <p className="font-extrabold text-[2.5vh]">Home</p>
            </div>

            <div className="flex items-center gap-2">
              <img style={{ width: "3.5vh" }} src="Archive.svg" alt="home" />
              <p className="font-extrabold text-[2.5vh]">Offres</p>
            </div>

            <div className="flex items-center gap-2">
              <img style={{ width: "3.5vh" }} src="batiment.svg" alt="home" />
              <p className="font-extrabold text-[2.5vh]">Companies</p>
            </div>

            <div className="flex items-center gap-2">
              <img
                style={{ width: "3.5vh" }}
                src="recrutement.svg"
                alt="home"
              />
              <p className="font-extrabold text-[2.5vh]">I hire</p>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex items-center">
              <img style={{ width: "3vh" }} src="Bell.svg" alt="home" />
            </div>

            <div className="flex items-center">
              <img style={{ width: "3.5vh" }} src="User.svg" alt="home" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
