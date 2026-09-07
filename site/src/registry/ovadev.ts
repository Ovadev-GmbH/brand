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
  intro: "The Ovadev identity: dark paper, light type, red as the only colour. Tokens from Landing/apps/ova.",
  groups: ["Actions"],
  entries: [
    {
      name: "Button",
      slug: "button",
      group: "Actions",
      summary: "Three variants, three sizes, its own tokens and its own class prefix.",
      status: "draft",
      examples: [
        { title: "Variants", Component: ButtonVariants, source: ButtonVariantsSrc, dark: true },
        { title: "Sizes", Component: ButtonSizes, source: ButtonSizesSrc, dark: true },
        { title: "Disabled", Component: ButtonDisabled, source: ButtonDisabledSrc, dark: true },
      ],
    },
  ],
};
