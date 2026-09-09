// The foundations pages read the vendored design system (src/vendor/
// design-system) for the internal palette and faces; the components below are
// Base UI and carry no styling of their own.
import "../vendor/design-system/ovadev.css";
import "@ovadev-gmbh/ui-internal/styles.css";
import type { Pkg } from "../types";
import { BASE_UI_GROUPS, baseUiEntries } from "./internal.base-ui";

export const internal: Pkg = {
  id: "internal",
  name: "Internal",
  pkg: "@ovadev-gmbh/ui-internal",
  intro: "The design system the internal tools are built from, under the ui-* prefix.",
  groups: [...BASE_UI_GROUPS],
  entries: [...baseUiEntries],
};
