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

  const deletePhrase = (id: string) => {
    const newPhrases = phrases.filter((phrase) => phrase.id !== id);
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
