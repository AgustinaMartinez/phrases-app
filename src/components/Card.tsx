import { usePhrases } from "../hooks/usePhrases";
import { TrashIcon, CalendarIcon } from "@primer/octicons-react";
import type { Phrase } from "../models/phrase";

export const Card = ({ phrase, index }: { phrase: Phrase; index: number }) => {
  const { deletePhrase } = usePhrases();

  const datetime = new Date(phrase.createdAt).toLocaleString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="break-inside-avoid group relative w-full h-fit p-4 bg-white custom-border custom-shadow duration-200 break-words">
      <p className="text-black font-bold text-base leading-relaxed mb-4">
        {phrase.text}
      </p>
      <div className="flex items-center gap-2 text-sm text-black font-black bg-yellow-300 border-2 border-black px-2 py-1 transform rotate-1 shadow-[2px_2px_0px_#000000] w-fit">
        <CalendarIcon size={16} className="text-red-500" />
        {datetime} hs
      </div>
      <button
        onClick={() => deletePhrase(index)}
        className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center cursor-pointer bg-red-500 text-white border-2 border-black w-8 h-8 rounded-full shadow-[2px_2px_0px_#000000] hover:bg-red-400 transition-all"
        aria-label="Borrar frase"
      >
        <TrashIcon size={16} />
      </button>
    </div>
  );
};
