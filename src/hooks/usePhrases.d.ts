export declare const usePhrases: () => {
    input: string;
    setInput: import("react").Dispatch<import("react").SetStateAction<string>>;
    phrases: import("../models/phrase").Phrase[];
    setPhrases: (phrases: import("../models/phrase").Phrase[]) => void;
    search: string;
    setSearch: (s: string) => void;
    deletePhrase: (index: number) => void;
};
