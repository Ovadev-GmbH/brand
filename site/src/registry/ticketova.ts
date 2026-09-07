import "@ovadev-gmbh/ui-ticketova/styles.css";
import type { Pkg } from "../types";
import ButtonVariants from "../examples/ticketova/ButtonVariants";
import ButtonVariantsSrc from "../examples/ticketova/ButtonVariants.tsx?raw";
import ButtonSizes from "../examples/ticketova/ButtonSizes";
import ButtonSizesSrc from "../examples/ticketova/ButtonSizes.tsx?raw";
import ButtonDisabled from "../examples/ticketova/ButtonDisabled";
import ButtonDisabledSrc from "../examples/ticketova/ButtonDisabled.tsx?raw";

export const ticketova: Pkg = {
  id: "ticketova",
  name: "TICKETOVA",
  pkg: "@ovadev-gmbh/ui-ticketova",
  intro: "Die TICKETOVA-Identität: hell, Grün #065f46 als einzige Nicht-Neutrale. Tokens aus Landing/apps/ticketova.",
  groups: ["Aktionen"],
  entries: [
    {
      name: "Button",
      slug: "button",
      group: "Aktionen",
      summary: "Drei Varianten, drei Grössen, eigene Tokens und eigener Klassen-Prefix.",
      status: "draft",
      examples: [
        { title: "Varianten", Component: ButtonVariants, source: ButtonVariantsSrc, dark: false },
        { title: "Grössen", Component: ButtonSizes, source: ButtonSizesSrc, dark: false },
        { title: "Deaktiviert", Component: ButtonDisabled, source: ButtonDisabledSrc, dark: false },
      ],
    },
  ],
};
