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
    const deletePhrase = (index) => {
        const sortedPhrases = phrases.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        const newPhrases = sortedPhrases.filter((_, i) => i !== index);
        setPhrases(newPhrases);
    };
    return (_jsx(PhrasesContext.Provider, { value: { phrases, setPhrases, deletePhrase, search, setSearch }, children: children }));
};
