"use client";

export interface Post {
  id_poste: number;
  display_name_fr: string | null;
  nom_compagnie: string;
  skills: { name: string; value: number }[];
  description: string;
  salaire_moyen: number | null;
  since_posted: string;
}

const getTagStyle = (
  text: string,
): { bg: string; text: string; border: string } => {
  switch (text) {
    case "Expert":
      return {
        bg: "rgba(88, 28, 220, 0.18)",
        text: "#c4b5fd",
        border: "rgba(139, 92, 246, 0.35)",
      };
    case "Intermédiaire":
      return {
        bg: "rgba(13, 148, 136, 0.15)",
        text: "#5eead4",
        border: "rgba(13, 148, 136, 0.3)",
      };
    case "Apprenti":
      return {
        bg: "rgba(5, 150, 105, 0.15)",
        text: "#6ee7b7",
        border: "rgba(5, 150, 105, 0.3)",
      };
    default:
      return {
        bg: "rgba(255,255,255,0.06)",
        text: "#9ca3af",
        border: "rgba(255,255,255,0.1)",
      };
  }
};

interface PostliteProps {
  job: Post;
  onClick: () => void;
}

const Postlite: React.FC<PostliteProps> = ({ job, onClick }) => {
  if (!job) return null;

  return (
    <div
      onClick={onClick}
      className="bg-[#111113] rounded-2xl p-5 border border-white/[0.06] flex flex-col gap-4 text-neutral-100 transition-all hover:border-white/[0.12] hover:bg-[#161618] group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
          {/* <Image
            src={job.imageUrl}
            alt={`${job.companyName} logo`}
            fill
            className="object-cover"
          /> */}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-100 leading-snug truncate">
            {job.display_name_fr}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">{job.nom_compagnie}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {job.skills?.map((tag, index) => {
          const style = getTagStyle(tag.name);
          return (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border"
              style={{
                backgroundColor: style.bg,
                color: style.text,
                borderColor: style.border,
              }}
            >
              {tag.name}
            </span>
          );
        })}
      </div>

      {/* Description */}
      <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
        {job.description}
      </p>

      {/* Séparateur */}
      <div className="h-px bg-white/[0.06]" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-purple-300 font-semibold text-base">
            {job.salaire_moyen}
          </span>
          <span className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">
            / ans
          </span>
        </div>
        <span className="text-[11px] text-gray-600">
          Il y a {job.since_posted}j
        </span>
      </div>
    </div>
  );
};

export default Postlite;
