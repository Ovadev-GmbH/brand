/* Avatar — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/avatar.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Avatar.Root>
     <Avatar.Image src="" />
     <Avatar.Fallback>LT</Avatar.Fallback>
   </Avatar.Root>;
*/
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { part } from "./part";
import "../styles/avatar.css";

export const Avatar = {
  Fallback: part(AvatarPrimitive.Fallback, "tova-avatar-fallback"),
  Image: part(AvatarPrimitive.Image, "tova-avatar-image"),
  Root: part(AvatarPrimitive.Root, "tova-avatar"),
};
