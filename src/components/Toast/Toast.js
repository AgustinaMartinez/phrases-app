import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircleIcon } from "@primer/octicons-react";
export const Toast = () => {
    return (_jsx("div", { className: "fixed top-5 lg:right-6 md:right-6 z-20 bg-green-500 text-white px-4 py-2 w-[90%] md:w-fit lg:w-fit rounded border-2 border-black shadow-lg -translate-x-px animate-slide-down", children: _jsxs("span", { className: "flex items-center gap-4", children: [_jsx(CheckCircleIcon, { size: 24 }), _jsx("span", { children: "La frase fue borrada con \u00E9xito" })] }) }));
};
