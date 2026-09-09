import "@ovadev-gmbh/ui-ticketova/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./ticketova.base-ui";

export const ticketova: Pkg = {
  id: "ticketova",
  name: "TICKETOVA",
  pkg: "@ovadev-gmbh/ui-ticketova",
  intro: "The TICKETOVA design system: light, with one green and nothing else that is not a neutral.",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
