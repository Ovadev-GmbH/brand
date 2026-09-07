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
  intro: "The TICKETOVA identity: light, green #065f46 as the only non-neutral. Tokens from Landing/apps/ticketova.",
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
