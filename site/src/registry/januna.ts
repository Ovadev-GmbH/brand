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
  intro: "The Januna identity: white, green in oklch, Instrument Sans. Tokens from the Januna repo.",
  groups: ["Actions"],
  entries: [
    {
      name: "Button",
      slug: "button",
      group: "Actions",
      summary: "Three variants, three sizes, its own tokens and its own class prefix.",
      status: "draft",
      examples: [
        { title: "Variants", Component: ButtonVariants, source: ButtonVariantsSrc, dark: false },
        { title: "Sizes", Component: ButtonSizes, source: ButtonSizesSrc, dark: false },
        { title: "Disabled", Component: ButtonDisabled, source: ButtonDisabledSrc, dark: false },
      ],
    },
  ],
};
