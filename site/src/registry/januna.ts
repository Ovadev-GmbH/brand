import "@ovadev-gmbh/ui-januna/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./januna.base-ui";

export const januna: Pkg = {
  id: "januna",
  name: "Januna",
  pkg: "@ovadev-gmbh/ui-januna",
  intro:
    "The Januna identity: white, green in oklch, Instrument Sans. Tokens from the Januna repo. Every component is Base UI, unstyled: the class hooks are in place, the brand is not.",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
