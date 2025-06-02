import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrashIcon, CalendarIcon } from "@primer/octicons-react";
export const Card = ({ phrase, onDeleteClick }) => {
    const datetime = new Date(phrase.createdAt).toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    return (_jsxs("div", { className: "break-inside-avoid group relative w-full h-fit p-4 pr-12 bg-white custom-border custom-shadow duration-200 break-words", children: [_jsx("p", { className: "text-black font-bold text-base leading-relaxed mb-4", children: phrase.text }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-black font-black bg-yellow-300 border-2 border-black px-2 py-1 transform rotate-1 shadow-[2px_2px_0px_#000000] w-fit", children: [_jsx(CalendarIcon, { size: 16, className: "text-red-500" }), datetime, " hs"] }), _jsx("button", { onClick: () => onDeleteClick(phrase.id), className: "absolute top-2 right-2 flex md:hidden lg:hidden md:group-hover:flex lg:group-hover:flex items-center justify-center cursor-pointer bg-red-500 text-white border-2 border-black w-8 h-8 rounded-full shadow-[2px_2px_0px_#000000] hover:bg-red-400 transition-all", "aria-label": "Borrar frase", children: _jsx(TrashIcon, { size: 16 }) })] }));
};
