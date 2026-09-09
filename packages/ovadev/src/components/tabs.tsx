/* Tabs — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/tabs.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Tabs.Root>
     <Tabs.List>
       <Tabs.Tab />
       <Tabs.Indicator />
     </Tabs.List>
     <Tabs.Panel />
   </Tabs.Root>;
*/
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { part } from "./part";
import "../styles/tabs.css";

export const Tabs = {
  Indicator: part(TabsPrimitive.Indicator, "ova-tabs-indicator"),
  List: part(TabsPrimitive.List, "ova-tabs-list"),
  Panel: part(TabsPrimitive.Panel, "ova-tabs-panel"),
  Root: part(TabsPrimitive.Root, "ova-tabs"),
  Tab: part(TabsPrimitive.Tab, "ova-tabs-tab"),
};
