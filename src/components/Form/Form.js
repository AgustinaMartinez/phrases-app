import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePhrases } from "../../hooks/usePhrases";
import { v4 as uuidv4 } from "uuid";
import { InputSearch } from "../InputSearch/InputSearch";
export const Form = () => {
    const { input, setInput, phrases, setPhrases } = usePhrases();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "")
            return;
        setPhrases([
            ...phrases,
            { id: uuidv4(), text: input, createdAt: new Date().toISOString() },
        ]);
        setInput("");
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (input.trim() === "")
                return;
            setPhrases([
                ...phrases,
                { id: uuidv4(), text: input, createdAt: new Date().toISOString() },
            ]);
            setInput("");
        }
    };
    return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("form", { onSubmit: handleSubmit, className: "flex gap-3 lg:gap-4 items-center justify-between bg-white p-4 box-border custom-border relative shadow-[4px_4px_0px_#000000]", children: [_jsx("input", { type: "text", placeholder: "Escrib\u00ED una frase...", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: handleKeyPress, className: "flex p-2 w-full custom-border font-semibold text-gray-800 placeholder-gray-500 focus:outline-none custom-shadow" }), _jsx("button", { type: "submit", className: "bg-pink-200 custom-border text-gray-700 font-bold py-2 px-4 cursor-pointer hover:bg-pink-300 custom-shadow", children: "Agregar!" }), _jsx("div", { className: "absolute -bottom-26 left-1/4 -translate-x-1/6 w-6 h-6 bg-pink-400 border-4 border-black rotate-25" })] }), _jsx(InputSearch, {})] }));
};
