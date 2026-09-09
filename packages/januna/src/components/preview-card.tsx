/* Preview Card — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/preview-card.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <PreviewCard.Root>
     <PreviewCard.Trigger />
     <PreviewCard.Portal>
       <PreviewCard.Backdrop />
       <PreviewCard.Positioner>
         <PreviewCard.Popup>
           <PreviewCard.Arrow />
           <PreviewCard.Viewport />
         </PreviewCard.Popup>
       </PreviewCard.Positioner>
     </PreviewCard.Portal>
   </PreviewCard.Root>;
*/
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { part } from "./part";
import "../styles/preview-card.css";

export const PreviewCard = {
  Arrow: part(PreviewCardPrimitive.Arrow, "jan-preview-card-arrow"),
  Backdrop: part(PreviewCardPrimitive.Backdrop, "jan-preview-card-backdrop"),
  Handle: PreviewCardPrimitive.Handle,
  Popup: part(PreviewCardPrimitive.Popup, "jan-preview-card-popup"),
  Portal: part(PreviewCardPrimitive.Portal, "jan-preview-card-portal"),
  Positioner: part(PreviewCardPrimitive.Positioner, "jan-preview-card-positioner"),
  Root: PreviewCardPrimitive.Root,
  Trigger: part(PreviewCardPrimitive.Trigger, "jan-preview-card-trigger"),
  Viewport: part(PreviewCardPrimitive.Viewport, "jan-preview-card-viewport"),
  createHandle: PreviewCardPrimitive.createHandle,
};
