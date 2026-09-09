/* Slider — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/slider.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Slider.Root>
     <Slider.Label />
     <Slider.Value />
     <Slider.Control>
       <Slider.Track>
         <Slider.Indicator />
         <Slider.Thumb />
       </Slider.Track>
     </Slider.Control>
   </Slider.Root>;
*/
import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { part } from "./part";
import "../styles/slider.css";

export const Slider = {
  Control: part(SliderPrimitive.Control, "tova-slider-control"),
  Indicator: part(SliderPrimitive.Indicator, "tova-slider-indicator"),
  Label: part(SliderPrimitive.Label, "tova-slider-label"),
  Root: part(SliderPrimitive.Root, "tova-slider"),
  Thumb: part(SliderPrimitive.Thumb, "tova-slider-thumb"),
  Track: part(SliderPrimitive.Track, "tova-slider-track"),
  Value: part(SliderPrimitive.Value, "tova-slider-value"),
};
