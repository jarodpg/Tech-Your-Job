import Header from "../components/header";
import SearchBar from "../components/searchBar";
import Postlite from "../components/post-lite";
import SideBareFiltre from "../components/SideBareFiltre";

const test = [
  {
    id: 1,
    title: "Développeur React",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
  {
    id: 2,
    title: "Développeur test",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
  {
    id: 2,
    title: "Développeur test",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
  {
    id: 2,
    title: "Développeur test",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
  {
    id: 2,
    title: "Développeur test",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
  {
    id: 2,
    title: "Développeur test",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
  {
    id: 2,
    title: "Développeur test",
    companyName: "TechCorp",
    imageUrl: "/logo.png",
    tags: [{ text: "React" }, { text: "Frontend" }],
    description: "Développement d'interfaces modernes.",
    hourlyRate: "45€/h",
    postedDaysAgo: 3,
  },
];

export default function Offre_Page() {
  return (
    <div className="flex flex-col bg-[#242424] min-h-screen">
      <Header />
      <div className="flex bg-[#1A1A1A] py-8">
        <div className="mx-auto">
          <SearchBar />
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between px-15 py-5">
          <h1 className="font-bold text-4xl">Recommandation Job</h1>
          <button>Filtres</button>
        </div>
        <div className="mt-[2%] grid grid-cols-[0.6fr_2.4fr]">
          {/* Sidebar filtres — Client Component */}
          <div className="bg-[#242424]">
            <SideBareFiltre />
          </div>

          {/* Liste des offres */}
          <div className="bg-[#242424]">
            <div className="grid grid-cols-3 gap-10 px-5 mr-8">
              {test.map((item, i) => (
                <Postlite key={i} job={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
