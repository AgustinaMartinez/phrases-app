import { useContext, useState } from "react";
import { PhrasesContext } from "../store/phrases.store";
export const usePhrases = () => {
    const { phrases, setPhrases, deletePhrase, search, setSearch, } = useContext(PhrasesContext);
    const [input, setInput] = useState("");
    return {
        input,
        setInput,
        phrases,
        setPhrases,
        search,
        setSearch,
        deletePhrase
    };
};
