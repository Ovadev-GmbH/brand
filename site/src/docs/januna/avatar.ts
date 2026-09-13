import type { Doc } from "../../types";

export default {
  description:
    "A guest or a member of staff as a round image or their initials, beside their name in a row, a booking or the account menu. The name stays written out; the avatar only helps the eye find it.",
  usage: `<Avatar>
  <AvatarImage src="/staff/lea-brunner.jpg" alt="Lea Brunner" />
  <AvatarFallback>LB</AvatarFallback>
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
      text: '`size` sets the diameter: `"sm"` (24px) for dense table rows, the default 32px, `"lg"` (40px) for the header of a guest\'s page. The initials are `text-label-14`, and `text-label-12` at `sm`.',
      example: "size",
    },
    {
      title: "Image",
      text: "`AvatarFallback` shows until `AvatarImage` has loaded, and stays when it fails. Always give both, with the person's name as the image's `alt`.",
      code: `<Avatar>
  <AvatarImage src={guest.photoUrl} alt={guest.name} />
  <AvatarFallback>{guest.initials}</AvatarFallback>
</Avatar>`,
    },
    {
      title: "Badge",
      text: "`AvatarBadge` sits at the bottom right, ringed in the sheet's colour. It is the brand green unless a status class such as `bg-status-success` recolours it; either way, write what it means next to the avatar. From the default size up it can hold an icon.",
      example: "badge",
    },
    {
      title: "Group",
      text: "`AvatarGroup` overlaps its avatars, and `AvatarGroupCount` says how many are not shown, at the size of the avatars beside it. Name the people in text beside it.",
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
      text: "Base UI's Avatar root, round, with a `divider` hairline drawn over the image.",
      props: [["size", `"default" | "sm" | "lg"`, `"default"`]],
    },
    {
      name: "AvatarFallback",
      text: "Initials on `bg-surface-secondary` in the secondary ink, `text-label-14` (`text-label-12` at `sm`).",
    },
    {
      name: "AvatarBadge",
      text: "A `<span>` at the bottom right in the brand green with `text-content-inverse`, ringed in the sheet's colour: 8px at `sm`, where it hides its icon, 10px by default and 12px at `lg`.",
    },
    { name: "AvatarGroup", text: "A row of avatars, each overlapping the one before by 8px and ringed in the sheet's colour." },
    { name: "AvatarGroupCount", text: "A circle the size of the group's avatars, for a count such as `+3`." },
  ],
  links: { doc: "https://base-ui.com/react/components/avatar", api: "https://base-ui.com/react/components/avatar#api-reference" },
} satisfies Doc;
