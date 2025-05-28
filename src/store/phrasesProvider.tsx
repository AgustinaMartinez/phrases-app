import { useEffect, useState } from "react";
import { PhrasesContext } from "./phrases.store";
import type { Phrase } from "../models/phrase.ts";

export const PhrasesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [phrases, setPhrases] = useState<Phrase[]>(() => {
    const storedPhrases = localStorage.getItem("phrases");
    return storedPhrases ? JSON.parse(storedPhrases) : [];
  });

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("phrases", JSON.stringify(phrases));
  }, [phrases]);

  const deletePhrase = (index: number) => {
    const sortedPhrases = phrases.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const newPhrases = sortedPhrases.filter((_, i) => i !== index);
    setPhrases(newPhrases);
  };

  return (
    <PhrasesContext.Provider
      value={{ phrases, setPhrases, deletePhrase, search, setSearch }}
    >
      {children}
    </PhrasesContext.Provider>
  );
};
