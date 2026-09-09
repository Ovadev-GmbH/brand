import "@ovadev-gmbh/ui-januna/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./januna.base-ui";

export const januna: Pkg = {
  id: "januna",
  name: "Januna",
  pkg: "@ovadev-gmbh/ui-januna",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
