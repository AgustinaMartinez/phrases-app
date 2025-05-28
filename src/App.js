import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BackgroundOverlay } from "./components/BackgroundOverlay";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { MainContainter } from "./components/MainContainter";
import { PhrasesGrid } from "./components/PhrasesGrid";
import { Layout } from "./Layout";
function App() {
    return (_jsxs(Layout, { children: [_jsx(BackgroundOverlay, {}), _jsxs(MainContainter, { children: [_jsx(Header, {}), _jsx(Input, {}), _jsx(PhrasesGrid, {})] })] }));
}
export default App;
