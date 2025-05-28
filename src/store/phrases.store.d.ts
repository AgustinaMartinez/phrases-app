import type { Phrase } from "../models/phrase.ts";
export interface PhrasesContextProps {
    phrases: Phrase[];
    setPhrases: (phrases: Phrase[]) => void;
    deletePhrase: (index: number) => void;
    search: string;
    setSearch: (s: string) => void;
}
export declare const PhrasesContext: import("react").Context<PhrasesContextProps>;
