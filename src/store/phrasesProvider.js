import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { PhrasesContext } from "./phrases.store";
export const PhrasesProvider = ({ children, }) => {
    const [phrases, setPhrases] = useState(() => {
        const storedPhrases = localStorage.getItem("phrases");
        return storedPhrases ? JSON.parse(storedPhrases) : [];
    });
    const [search, setSearch] = useState("");
    useEffect(() => {
        localStorage.setItem("phrases", JSON.stringify(phrases));
    }, [phrases]);
    const deletePhrase = (id) => {
        const newPhrases = phrases.filter((phrase) => phrase.id !== id);
        setPhrases(newPhrases);
    };
    const clearAll = () => {
        localStorage.clear();
        setPhrases([]);
    };
    return (_jsx(PhrasesContext.Provider, { value: { phrases, setPhrases, deletePhrase, search, setSearch, clearAll }, children: children }));
};
