import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "./Card";
import { usePhrases } from "../hooks/usePhrases";
export const PhrasesGrid = () => {
    const { phrases, search } = usePhrases();
    const filteredPhrases = phrases
        .filter((phrase) => phrase.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return (_jsx("div", { className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-5", children: filteredPhrases.map((phrase, index) => (_jsx(Card, { phrase: phrase, index: index }, `phrase-${index}`))) }));
};
