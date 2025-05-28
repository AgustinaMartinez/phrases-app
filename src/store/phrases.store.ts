import { createContext } from "react";
import type { Phrase } from "../models/phrase.ts";

export interface PhrasesContextProps {
  phrases: Phrase[];
  setPhrases: (phrases: Phrase[]) => void;
  deletePhrase: (id: string) => void;
  search: string;
  setSearch: (s: string) => void;
}

export const PhrasesContext = createContext<PhrasesContextProps>({
  phrases: [],
  setPhrases: () => {},
  deletePhrase: () => {},
  search: "",
  setSearch: () => {},
});
