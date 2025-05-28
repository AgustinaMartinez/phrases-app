import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { PhrasesProvider } from "./store/phrasesProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PhrasesProvider>
      <App />
    </PhrasesProvider>
  </StrictMode>
);
