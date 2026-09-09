import "@ovadev-gmbh/ui-ovadev/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./ovadev.base-ui";

export const ovadev: Pkg = {
  id: "ovadev",
  name: "Ovadev",
  pkg: "@ovadev-gmbh/ui-ovadev",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
