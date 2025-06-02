import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BackgroundOverlay } from "./components";
import { Header } from "./components";
import { Form } from "./components";
import { MainContainter } from "./components";
import { PhrasesGrid } from "./components";
import { Layout } from "./layouts/Layout";
function App() {
    return (_jsxs(Layout, { children: [_jsx(BackgroundOverlay, {}), _jsxs(MainContainter, { children: [_jsx(Header, {}), _jsx(Form, {}), _jsx(PhrasesGrid, {})] })] }));
}
export default App;
