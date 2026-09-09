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
  Arrow: part(PreviewCardPrimitive.Arrow, "ui-preview-card-arrow"),
  Backdrop: part(PreviewCardPrimitive.Backdrop, "ui-preview-card-backdrop"),
  Handle: PreviewCardPrimitive.Handle,
  Popup: part(PreviewCardPrimitive.Popup, "ui-preview-card-popup"),
  Portal: part(PreviewCardPrimitive.Portal, "ui-preview-card-portal"),
  Positioner: part(PreviewCardPrimitive.Positioner, "ui-preview-card-positioner"),
  Root: PreviewCardPrimitive.Root,
  Trigger: part(PreviewCardPrimitive.Trigger, "ui-preview-card-trigger"),
  Viewport: part(PreviewCardPrimitive.Viewport, "ui-preview-card-viewport"),
  createHandle: PreviewCardPrimitive.createHandle,
};
