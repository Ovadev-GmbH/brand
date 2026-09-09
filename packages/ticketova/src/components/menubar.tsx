/* Menubar — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/menubar.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Menubar>
     <Menu.Root>
       <Menu.Trigger />
       <Menu.Portal>
         <Menu.Backdrop />
         <Menu.Positioner>
           <Menu.Popup>
             <Menu.Arrow />
             <Menu.Item />
             <Menu.LinkItem />
             <Menu.Separator />
   
             <Menu.SubmenuRoot>
               <Menu.SubmenuTrigger />
             </Menu.SubmenuRoot>
   
             <Menu.Group>
               <Menu.GroupLabel />
             </Menu.Group>
   
             <Menu.RadioGroup>
               <Menu.RadioItem>
                 <Menu.RadioItemIndicator />
               </Menu.RadioItem>
             </Menu.RadioGroup>
   
             <Menu.CheckboxItem>
               <Menu.CheckboxItemIndicator />
             </Menu.CheckboxItem>
   
             <Menu.Viewport />
           </Menu.Popup>
         </Menu.Positioner>
       </Menu.Portal>
     </Menu.Root>
   </Menubar>;
*/
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { part } from "./part";
import "../styles/menubar.css";

export const Menubar = part(MenubarPrimitive, "tova-menubar");
