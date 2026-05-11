import { IoClose } from "react-icons/io5";

export default function Document_Edit({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-[60%] bg-[#242424] rounded-3xl p-8 shadow-2xl border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <IoClose size={28} />
        </button>

        <h1 className="text-xl font-medium text-white mb-4">
          Modifier les documents
        </h1>
        <div className="bg-white w-[50%] rounded-">
          <div className="flex flex-col">
            <p>sdsd</p>
            <p>sdsd</p>
          </div>
        </div>
      </div>
    </div>
  );
}
