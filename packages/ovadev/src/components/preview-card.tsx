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
  Arrow: part(PreviewCardPrimitive.Arrow, "ova-preview-card-arrow"),
  Backdrop: part(PreviewCardPrimitive.Backdrop, "ova-preview-card-backdrop"),
  Handle: PreviewCardPrimitive.Handle,
  Popup: part(PreviewCardPrimitive.Popup, "ova-preview-card-popup"),
  Portal: part(PreviewCardPrimitive.Portal, "ova-preview-card-portal"),
  Positioner: part(PreviewCardPrimitive.Positioner, "ova-preview-card-positioner"),
  Root: PreviewCardPrimitive.Root,
  Trigger: part(PreviewCardPrimitive.Trigger, "ova-preview-card-trigger"),
  Viewport: part(PreviewCardPrimitive.Viewport, "ova-preview-card-viewport"),
  createHandle: PreviewCardPrimitive.createHandle,
};
