import { SearchIcon } from "@primer/octicons-react";
import { usePhrases } from "../hooks/usePhrases";

export const Input = () => {
  const { input, setInput, phrases, setPhrases, search, setSearch } =
    usePhrases();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setPhrases([
      ...phrases,
      { text: input, createdAt: new Date().toISOString() },
    ]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() === "") return;
      setPhrases([
        ...phrases,
        { text: input, createdAt: new Date().toISOString() },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 items-center bg-white p-4 custom-border relative shadow-[4px_4px_0px_#000000]"
      >
        <input
          type="text"
          placeholder="Escribí una frase..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-2 custom-border font-semibold text-gray-800 placeholder-gray-500 focus:outline-none custom-shadow"
        />
        <button
          type="submit"
          className="bg-pink-200 custom-border text-gray-700 font-bold py-2 px-4 cursor-pointer hover:bg-pink-300 custom-shadow"
        >
          + Agregar!
        </button>
        <div className="absolute -bottom-26 left-1/4 -translate-x-1/6 w-6 h-6 bg-pink-400 border-4 border-black rotate-25"></div>
      </form>
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
    </div>
  );
};
