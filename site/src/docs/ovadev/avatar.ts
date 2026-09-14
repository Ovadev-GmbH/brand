import type { Doc } from "../../types";

export default {
  description:
    "A team member as a round image or their initials, beside their name in a row, a comment or the account menu. The name stays written out; the avatar only helps the eye find it.",
  usage: `<Avatar>
  <AvatarImage src="/avatars/robin.png" alt="Robin Markant" />
  <AvatarFallback>RM</AvatarFallback>
</Avatar>`,
  composition: `AvatarGroup
├── Avatar
│   ├── AvatarImage
│   ├── AvatarFallback
│   └── AvatarBadge
└── AvatarGroupCount`,
  sections: [
    {
      title: "Size",
      text: '`size` sets the diameter: `"sm"` (24px) for dense table rows, the default 32px, `"lg"` (40px) for the header of a member\'s page.',
      example: "size",
    },
    {
      title: "Image",
      text: "`AvatarFallback` shows until `AvatarImage` has loaded, and stays when it fails. Always give both, with the person's name as the image's `alt`.",
      code: `<Avatar>
  <AvatarImage src={member.avatarUrl} alt={member.name} />
  <AvatarFallback>{member.initials}</AvatarFallback>
</Avatar>`,
    },
    {
      title: "Badge",
      text: "`AvatarBadge` sits at the bottom right. Colour it with a status class and write the state next to the avatar; from the default size up it can hold an icon.",
      example: "badge",
    },
    {
      title: "Group",
      text: "`AvatarGroup` overlaps its avatars, and `AvatarGroupCount` says how many are not shown. Name the people in text beside it.",
      example: "group",
    },
    {
      title: "In a Table",
      text: 'A `size="sm"` avatar in the first cell, next to the name, keeps a row at the table\'s height.',
      example: "table",
    },
    {
      title: "Dropdown",
      text: "As the trigger of the account menu, put the avatar inside a ghost icon `Button`, which carries the focus ring and the `aria-label`.",
      example: "dropdown",
    },
  ],
  api: [
    {
      name: "Avatar",
      text: "Base UI's Avatar root, with a hairline drawn over the image.",
      props: [["size", `"default" | "sm" | "lg"`, `"default"`]],
    },
    { name: "AvatarFallback", text: "Initials on the secondary surface, in `text-label-13` (`text-label-12` at `sm`)." },
    { name: "AvatarBadge", text: "A `<span>` at the bottom right, ringed in the page's colour. Hides its icon at `sm`." },
    { name: "AvatarGroup", text: "A row of avatars, each overlapping the one before by 8px." },
    { name: "AvatarGroupCount", text: "A circle the size of the group's avatars, for a count such as `+3`." },
  ],
  links: { doc: "https://base-ui.com/react/components/avatar", api: "https://base-ui.com/react/components/avatar#api-reference" },
} satisfies Doc;
