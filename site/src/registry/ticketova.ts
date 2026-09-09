import "@ovadev-gmbh/ui-ticketova/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./ticketova.base-ui";

export const ticketova: Pkg = {
  id: "ticketova",
  name: "TICKETOVA",
  pkg: "@ovadev-gmbh/ui-ticketova",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
