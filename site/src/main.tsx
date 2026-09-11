import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import { App } from "./App";
import "./styles/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
      {/* One quiet toast for the things the catalog copies to the clipboard. */}
      <Toaster
        position="bottom-center"
        duration={1800}
        gap={8}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "flex items-center gap-2 rounded-brand bg-bg-100 px-3.5 py-2.5 font-sans text-sm text-gray-1000 shadow-[var(--shadow-border),var(--shadow-menu)]",
            description: "font-mono text-xs text-gray-900",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
);
