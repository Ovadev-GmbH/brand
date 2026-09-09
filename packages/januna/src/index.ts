/* The Januna library: every Base UI component, wrapped with this brand's
   classes (jan-) and loaded next to this brand's tokens.
 *
 * Nothing here is styled yet. Base UI supplies the behaviour — keyboard,
 * focus, ARIA, portals, positioning — and src/styles holds one empty
 * stylesheet per component, each listing the class hooks its parts carry.
 * Styling this brand means filling those in, one component at a time; no
 * .tsx has to change for it.
 *
 * @base-ui/react is a peer dependency, so the app supplies the single copy
 * and two of these libraries can be loaded side by side. Its types
 * (Dialog.Root.Props and the like) come from that package directly. */
import "./tokens.css";

export * from "./base-ui";
