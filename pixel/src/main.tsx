import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ColorContextProvider } from "./contexts/ColorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </StrictMode>
);
