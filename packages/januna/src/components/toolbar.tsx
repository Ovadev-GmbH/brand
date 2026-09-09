/* Toolbar — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/toolbar.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Toolbar.Root>
     <Toolbar.Button />
     <Toolbar.Link />
     <Toolbar.Separator />
     <Toolbar.Group>
       <Toolbar.Button />
       <Toolbar.Button />
     </Toolbar.Group>
     <Toolbar.Input />
   </Toolbar.Root>;
*/
import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { part } from "./part";
import "../styles/toolbar.css";

export const Toolbar = {
  Button: part(ToolbarPrimitive.Button, "jan-toolbar-button"),
  Group: part(ToolbarPrimitive.Group, "jan-toolbar-group"),
  Input: part(ToolbarPrimitive.Input, "jan-toolbar-input"),
  Link: part(ToolbarPrimitive.Link, "jan-toolbar-link"),
  Root: part(ToolbarPrimitive.Root, "jan-toolbar"),
  Separator: part(ToolbarPrimitive.Separator, "jan-toolbar-separator"),
};
