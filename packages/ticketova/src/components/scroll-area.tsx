/* Scroll Area — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/scroll-area.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <ScrollArea.Root>
     <ScrollArea.Viewport>
       <ScrollArea.Content />
     </ScrollArea.Viewport>
     <ScrollArea.Scrollbar>
       <ScrollArea.Thumb />
     </ScrollArea.Scrollbar>
     <ScrollArea.Corner />
   </ScrollArea.Root>;
*/
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { part } from "./part";
import "../styles/scroll-area.css";

export const ScrollArea = {
  Content: part(ScrollAreaPrimitive.Content, "tova-scroll-area-content"),
  Corner: part(ScrollAreaPrimitive.Corner, "tova-scroll-area-corner"),
  Root: part(ScrollAreaPrimitive.Root, "tova-scroll-area"),
  Scrollbar: part(ScrollAreaPrimitive.Scrollbar, "tova-scroll-area-scrollbar"),
  Thumb: part(ScrollAreaPrimitive.Thumb, "tova-scroll-area-thumb"),
  Viewport: part(ScrollAreaPrimitive.Viewport, "tova-scroll-area-viewport"),
};
