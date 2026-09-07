// The shared tool layer of the Ovadev internal apps. It sits on the Design
// System: the consumer loads that stylesheet (tokens, ov-* classes) and this
// library's styles.css on top. Links render through the component handed to
// <UiProvider>, so the library never imports a router.

import "./ui.css";

export { UiProvider, useLink } from "./link";
export type { LinkComponent, LinkProps } from "./link";
export { Page, Section, Note, Empty, Sub, ExtLink, Dl } from "./Page";
export { Table, Th, Td, NameCell, MoreButton } from "./Table";
export { nextSort } from "./sort";
export type { SortState } from "./sort";
export { SearchInput, Select, Toolbar, Button, Segmented, CopyButton } from "./Controls";
export type { ButtonProps } from "./Controls";
export { Stats } from "./Stats";
export type { StatItem } from "./Stats";
