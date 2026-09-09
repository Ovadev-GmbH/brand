/* Progress — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/progress.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Progress.Root>
     <Progress.Label />
     <Progress.Track>
       <Progress.Indicator />
     </Progress.Track>
     <Progress.Value />
   </Progress.Root>;
*/
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { part } from "./part";
import "../styles/progress.css";

export const Progress = {
  Indicator: part(ProgressPrimitive.Indicator, "tova-progress-indicator"),
  Label: part(ProgressPrimitive.Label, "tova-progress-label"),
  Root: part(ProgressPrimitive.Root, "tova-progress"),
  Track: part(ProgressPrimitive.Track, "tova-progress-track"),
  Value: part(ProgressPrimitive.Value, "tova-progress-value"),
};
