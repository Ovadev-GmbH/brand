import "@ovadev-gmbh/ui-januna/styles.css";
import type { Pkg } from "../types";
import ButtonVariants from "../examples/januna/ButtonVariants";
import ButtonVariantsSrc from "../examples/januna/ButtonVariants.tsx?raw";
import ButtonSizes from "../examples/januna/ButtonSizes";
import ButtonSizesSrc from "../examples/januna/ButtonSizes.tsx?raw";
import ButtonDisabled from "../examples/januna/ButtonDisabled";
import ButtonDisabledSrc from "../examples/januna/ButtonDisabled.tsx?raw";

export const januna: Pkg = {
  id: "januna",
  name: "Januna",
  pkg: "@ovadev-gmbh/ui-januna",
  intro: "Die Januna-Identität: weiss, Grün in oklch, Instrument Sans. Tokens aus dem Januna-Repo.",
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
