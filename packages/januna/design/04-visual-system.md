## The visual system

### Colour

Design in the ink and the taupe. Colour appears where it means something: the green where the product acts (one primary button per view, the current item, a link), the status colours where a state is named (and always beside a word or an icon that names it too), the callout fills where a note needs a ground. A screen with more than one green thing acting is a screen with two decisions on it; pick one.

Write with the semantic names. `bg-surface-primary` is the sheet, `bg-surface-tertiary` the taupe island for sidebars and panels, `bg-surface-secondary` a quieter area on the sheet. Hover is `bg-surface-hover`, pressed and selected `bg-surface-active`: both are the ink at a few percent, shade rather than colour. Text is `text-content-primary`, `-secondary`, `-tertiary` in descending importance; on the green it is `text-content-inverse`, which is taupe, never white. Lines are `border-divider`. Reach for a scale step (`bg-green-200`, `text-gray-700`) only for an exact colour a name does not cover, and say why in a comment.

### Type

Geist for everything; Geist Mono for figures that align, codes, and paths. Use the published styles and only them: `text-heading-24` for a page title, `-20` for a section, `-16` for a card or dialog title; `text-copy-14` for running text, `-16` where text can breathe; `text-label-14` for the single lines of the product (rows, menus, form labels), `-13` and `-12` beneath it; `text-button-14` for what acts; `text-label-13-mono` for a reference number. Each style sets size, line height, tracking and weight together, so never add `font-medium` beside one; use `<strong>` inside a style for emphasis. Do not create a font size.

Headings are sentence case and say what the screen is about: "Tonight's bookings", not "Bookings overview". No all-caps eyebrows, no tracked labels, no decorative numbering.

### Rhythm and measure

Give every gap one owner: the `Stack`, the grid, or the page wrapper, never the children's margins. Inside a group use `space-2` to `space-4`; between groups `space-6` to `space-8`; between chapters of a page `space-12`. Controls are 40px tall; the small size, 32px, is for dense rows and toolbars only. Corners are `rounded-regular` (12px) on what acts and holds, `rounded-small` (8px) on the small things inside, `rounded-pill` only on badges, switches, chips and avatars. A page's content column is 6 to 8 of 12 desktop columns for prose and forms; tables and the floor plan may take all 12.

### Surfaces and edges

A surface is a material, and a material is a class: `material-base` for a resting card, `material-small` for an input or a card in a list, `material-menu` for anything that floats, `material-modal` for a dialog. The material draws the edge as a hairline in its shadow; never add a border to a material, and never draw a card inside a card. Prefer spacing and alignment to boxes: a section is set apart by air and a heading, not by a container.

### Motion

Default to stillness. Use the one easing, `ease-brand`, and the three durations: `duration-fast` for a colour or a press, `duration-base` for a popover or a row appearing, `duration-slow` for a dialog or a page section. Motion explains a state change, preserves continuity, or confirms an action; it never decorates. Nothing pulses except a status dot that is genuinely in progress. Reduced motion is honoured by the tokens; do not override it.

### Icons

Hugeicons, stroke 1.5 at 24px, 2 at 16px inside a button. An icon takes the colour of its text; it is green only where the text is green. Icons label, they do not decorate: one beside a word in a button, one in a table cell for a state, one in an empty state. No icon tiles, no oversized icons, no mixed sets.

### Copy

Sentence case everywhere but proper nouns and Title Case labels in a description list. Buttons are verb plus noun: "Confirm booking", "Release table". Describe the impact of an action, not the mechanism. Numbers keep their units and their time; a relative time has an exact one in a tooltip. Write for the host at the lectern at 19:58.
