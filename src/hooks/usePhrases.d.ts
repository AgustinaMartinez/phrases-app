export declare const usePhrases: () => {
    input: string;
    setInput: import("react").Dispatch<import("react").SetStateAction<string>>;
    phrases: import("../models/phrase").Phrase[];
    setPhrases: (phrases: import("../models/phrase").Phrase[]) => void;
    search: string;
    setSearch: (search: string) => void;
    deletePhrase: (id: string) => void;
    clearAll: () => void;
};
