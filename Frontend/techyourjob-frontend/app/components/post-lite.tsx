"use client";
import Image from "next/image";

export interface Post {
  id: number;
  title: string;
  companyName: string;
  imageUrl: string;
  tags: { text: string }[];
  description: string;
  hourlyRate: string;
  postedDaysAgo: number;
}

const getTagColor = (text: string): string => {
  switch (text) {
    case "Expert":
      return "#8B5CF6";
    case "Intermédiaire":
      return "#0D9488";
    case "Apprenti":
      return "#059669";
    default:
      return "#4B5563";
  }
};

interface PostliteProps {
  job: Post;
}

const Postlite: React.FC<PostliteProps> = ({ job }) => {
  if (!job) return null;
  return (
    <div className="bg-[#2D2E32] rounded-3xl p-6 shadow-2xl border border-white/5 flex flex-col gap-5 text-neutral-100 transition-colors">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10">
          <Image
            src={job.imageUrl}
            alt={`${job.companyName} logo`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
          <p className="text-sm text-neutral-400 font-medium">
            {job.companyName}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {job.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-widest"
            style={{ backgroundColor: getTagColor(tag.text) }}
          >
            {tag.text}
          </span>
        ))}
      </div>

      <p className="text-[13px] text-neutral-400 leading-relaxed line-clamp-3">
        {job.description}
      </p>

      <div className="w-full h-[1px] bg-white/10 my-1" />

      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-white font-bold text-lg">{job.hourlyRate}</span>
          <span className="text-[10px] text-neutral-500 font-semibold uppercase">
            / Hour
          </span>
        </div>
        <div className="text-[11px] text-neutral-500 font-medium">
          Posted {job.postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default Postlite;
