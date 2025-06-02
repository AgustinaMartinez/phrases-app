import { createContext } from "react";
export const PhrasesContext = createContext({
    phrases: [],
    setPhrases: () => { },
    deletePhrase: () => { },
    search: "",
    setSearch: () => { },
    clearAll: () => { },
});
