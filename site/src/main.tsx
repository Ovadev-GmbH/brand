import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link as RouterLink } from "react-router";
import { UiProvider, type LinkProps } from "@ovadev-gmbh/ui-internal";
import { App } from "./App";
import { ThemeProvider } from "./components/theme";
import "./styles/tokens.css";
import "./styles/shell.css";
import "./styles/content.css";

/* Every link the catalog and the internal examples render goes through this
   slot, so a NameCell in a Table example navigates client-side like the
   sidebar does. */
function Link({ href, ...rest }: LinkProps) {
  return <RouterLink to={href} {...rest} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <UiProvider link={Link}>
          <App />
        </UiProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
