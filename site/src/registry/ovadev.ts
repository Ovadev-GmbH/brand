import "@ovadev-gmbh/ui-ovadev/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./ovadev.base-ui";

export const ovadev: Pkg = {
  id: "ovadev",
  name: "Ovadev",
  pkg: "@ovadev-gmbh/ui-ovadev",
  intro:
    "The Ovadev identity: dark paper, light type, red as the only colour. Tokens from Landing/apps/ova. Every component is Base UI, unstyled: the class hooks are in place, the brand is not.",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
