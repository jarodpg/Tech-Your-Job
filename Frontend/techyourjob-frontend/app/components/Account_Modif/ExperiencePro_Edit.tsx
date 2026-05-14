"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { Update_User_Experience } from "@/app/services/Modif_User_Experience";

interface CompetenceItem {
  competence: string;
  source: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  experienceId: number;
  enterprise_name: string;
  title: string;
  start: string;
  end: string;
  description: string;
  skills: CompetenceItem[];
  onSave: () => void;
}

export default function Experience_Pro_Edit({
  isOpen,
  onClose,
  experienceId,
  enterprise_name,
  title,
  start,
  end,
  description,
  skills,
  onSave,
}: Props) {
  const [form, setForm] = useState({
    enterprise_name,
    title,
    start: start?.split("T")[0] ?? "",
    end: end?.split("T")[0] ?? "",
    description,
  });
  const [formSkills, setFormSkills] = useState<string[]>(
    (skills ?? []).map((s: any) =>
      typeof s === "string" ? s : s.competence ?? "",
    ),
  );
  const [newSkill, setNewSkill] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function addSkill() {
    const trimmed = newSkill.trim();
    if (trimmed && !formSkills.includes(trimmed)) {
      setFormSkills((prev) => [...prev, trimmed]);
      setNewSkill("");
    }
  }

  function removeSkill(i: number) {
    setFormSkills((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSave() {
    setLoading(true);
    try {
      await Update_User_Experience(experienceId, {
        enterprise_name: form.enterprise_name,
        title: form.title,
        start: form.start,
        end: form.end,
        description: form.description,
        skills: formSkills,
      });
      onSave();
    } catch (err) {
      console.error("Erreur modification:", err);
      alert("Erreur lors de la modification");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400/50 transition-colors";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-[60%] max-h-[85vh] overflow-y-auto bg-[#242424] rounded-3xl p-8 shadow-2xl border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <IoClose size={28} />
        </button>

        <h1 className="text-xl font-bold text-white mb-6">
          Modifier l'expérience
        </h1>

        <div className="flex flex-col gap-4">
          {/* Entreprise */}
          <div>
            <label className="text-gray-400 text-xs mb-1 block">
              Entreprise
            </label>
            <input
              className={inputClass}
              value={form.enterprise_name}
              onChange={(e) => handleChange("enterprise_name", e.target.value)}
              placeholder="Nom de l'entreprise"
            />
          </div>

          {/* Titre du poste */}
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Poste</label>
            <input
              className={inputClass}
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Titre du poste"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-xs mb-1 block">Début</label>
              <input
                type="date"
                className={inputClass}
                value={form.start}
                onChange={(e) => handleChange("start", e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1 block">Fin</label>
              <input
                type="date"
                className={inputClass}
                value={form.end}
                onChange={(e) => handleChange("end", e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-400 text-xs mb-1 block">
              Description
            </label>
            <textarea
              className={`${inputClass} min-h-[100px] resize-none`}
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Description du poste"
            />
          </div>

          {/* Compétences */}
          <div>
            <label className="text-gray-400 text-xs mb-1 block">
              Compétences
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formSkills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 bg-teal-400/10 text-teal-400 text-xs px-3 py-1.5 rounded-lg"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(i)}
                    className="hover:text-white"
                  >
                    <IoClose size={14} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                className={inputClass}
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addSkill())
                }
                placeholder="Ajouter une compétence"
              />
              <button
                onClick={addSkill}
                className="px-4 py-2 bg-teal-400/20 text-teal-400 rounded-xl text-sm hover:bg-teal-400/30 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Bouton sauvegarder */}
        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full mt-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
        >
          {loading ? "Enregistrement..." : "Sauvegarder"}
        </button>
      </div>
    </div>
  );
}
