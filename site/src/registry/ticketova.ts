import "@ovadev-gmbh/ui-ticketova/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./ticketova.base-ui";

export const ticketova: Pkg = {
  id: "ticketova",
  name: "TICKETOVA",
  pkg: "@ovadev-gmbh/ui-ticketova",
  intro:
    "The TICKETOVA identity: light, green #065f46 as the only non-neutral. Tokens from Landing/apps/ticketova. Every component is Base UI, unstyled: the class hooks are in place, the brand is not.",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
