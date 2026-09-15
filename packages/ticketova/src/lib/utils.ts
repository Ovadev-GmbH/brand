/* `cn` merges Tailwind classes and resolves conflicts (a later `p-4` beats an
 * earlier `p-2`). It only knows Tailwind's own vocabulary, so the brand's
 * classes are taught here: without this, `text-label-14` is taken for a text
 * colour and dropped whenever a `text-content-*` colour sits beside it. Each
 * foundation registers the group its classes belong to. */
import type { ClassValue } from "cn";
import { createCn } from "cn/config";

const type = (v: string) => /^(heading|copy|label|button)-\d+(-mono)?$/.test(v);
const material = (v: string) => /^(base|small|medium|large|tooltip|menu|modal|fullscreen|accent|active|danger)$/.test(v);
const radius = (v: string) => /^(small|regular|large|modal|section|pill)$/.test(v);
const space = (v: string) => /^space-/.test(v);

export const cn: (...inputs: ClassValue[]) => string = createCn({
  extend: {
    classGroups: {
      "font-size": [{ text: [type] }],
      shadow: [{ shadow: [material] }],
      rounded: [{ rounded: [radius] }],
      duration: [{ duration: ["fast", "base", "slow"] }],
      ease: [{ ease: ["brand"] }],
      p: [{ p: [space] }],
      px: [{ px: [space] }],
      py: [{ py: [space] }],
      gap: [{ gap: [space] }],
      m: [{ m: [space] }],
    },
  },
});
