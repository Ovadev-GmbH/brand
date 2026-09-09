/* @ovadev-gmbh/ui-internal: every Base UI component, wrapped with the ui-*
   classes the internal tools use.
 *
 * Nothing here is styled. Base UI supplies the behaviour — keyboard, focus,
 * ARIA, portals, positioning — and src/styles holds one empty stylesheet per
 * component, each listing the class hooks its parts carry. Styling means
 * filling those in, one component at a time; no .tsx has to change for it.
 *
 * @base-ui/react is a peer dependency, so the app supplies the single copy
 * and two of these libraries can be loaded side by side. Its types
 * (Dialog.Root.Props and the like) come from that package directly. */

export * from "./base-ui";
