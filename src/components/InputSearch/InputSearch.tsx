import { SearchIcon } from "@primer/octicons-react";
import { usePhrases } from "../../hooks/usePhrases";

export const InputSearch = () => {
  const { search, setSearch, clearAll } = usePhrases();

  return (
    <div className="flex justify-between gap-3">
      <div className="relative w-full">
        <SearchIcon
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
        />
        <input
          type="text"
          placeholder="Buscá una frase..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-100 custom-border font-semibold text-gray-800 placeholder-gray-500 focus:outline-none custom-shadow"
        />
      </div>
      <button
        type="submit"
        className="bg-red-500 custom-border text-white font-bold py-2 px-4 cursor-pointer hover:bg-red-400 custom-shadow"
        onClick={clearAll}
      >
        Limpiar
      </button>
    </div>
  );
};
