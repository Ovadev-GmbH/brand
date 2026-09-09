import "@ovadev-gmbh/ui-ovadev/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./ovadev.base-ui";

export const ovadev: Pkg = {
  id: "ovadev",
  name: "Ovadev",
  pkg: "@ovadev-gmbh/ui-ovadev",
  intro: "Ovadev's design system: dark paper, light type, red as the only colour that is not a grey.",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
