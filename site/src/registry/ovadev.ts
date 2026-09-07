import "@ovadev-gmbh/ui-ovadev/styles.css";
import type { Pkg } from "../types";
import ButtonVariants from "../examples/ovadev/ButtonVariants";
import ButtonVariantsSrc from "../examples/ovadev/ButtonVariants.tsx?raw";
import ButtonSizes from "../examples/ovadev/ButtonSizes";
import ButtonSizesSrc from "../examples/ovadev/ButtonSizes.tsx?raw";
import ButtonDisabled from "../examples/ovadev/ButtonDisabled";
import ButtonDisabledSrc from "../examples/ovadev/ButtonDisabled.tsx?raw";

export const ovadev: Pkg = {
  id: "ovadev",
  name: "Ovadev",
  pkg: "@ovadev-gmbh/ui-ovadev",
  intro: "Die Ovadev-Identität: dunkles Papier, helle Schrift, Rot als einzige Farbe. Tokens aus Landing/apps/ova.",
  groups: ["Aktionen"],
  entries: [
    {
      name: "Button",
      slug: "button",
      group: "Aktionen",
      summary: "Drei Varianten, drei Grössen, eigene Tokens und eigener Klassen-Prefix.",
      status: "draft",
      examples: [
        { title: "Varianten", Component: ButtonVariants, source: ButtonVariantsSrc, dark: true },
        { title: "Grössen", Component: ButtonSizes, source: ButtonSizesSrc, dark: true },
        { title: "Deaktiviert", Component: ButtonDisabled, source: ButtonDisabledSrc, dark: true },
      ],
    },
  ],
};
