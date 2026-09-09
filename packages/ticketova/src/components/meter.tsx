/* Meter — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/meter.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Meter.Root>
     <Meter.Label />
     <Meter.Track>
       <Meter.Indicator />
     </Meter.Track>
     <Meter.Value />
   </Meter.Root>;
*/
import { Meter as MeterPrimitive } from "@base-ui/react/meter";
import { part } from "./part";
import "../styles/meter.css";

export const Meter = {
  Indicator: part(MeterPrimitive.Indicator, "tova-meter-indicator"),
  Label: part(MeterPrimitive.Label, "tova-meter-label"),
  Root: part(MeterPrimitive.Root, "tova-meter"),
  Track: part(MeterPrimitive.Track, "tova-meter-track"),
  Value: part(MeterPrimitive.Value, "tova-meter-value"),
};
