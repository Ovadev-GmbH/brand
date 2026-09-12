## Work in four passes

### Frame the job

Before laying anything out, answer: who is looking at this, what are they deciding, and what is the one thing they must not miss. Name the states the screen can be in: empty, loading, the common case, the edge, the error. Normalise the material: every time has a date, every count has a unit, every status has one of the system's names. Distinguish what the system knows from what it guesses; never invent urgency.

Support two speeds of reading. The glance: title, the decisive value, the status dot, the one button. The look: the table, the description list, the caveat, the timestamp. Both must be true at once.

### Choose the composition

Say aloud the layout the screen type suggests, then ask whether the material earns it. A list of tonight's bookings is a table, not a card grid. One booking is a description list with one or two actions, not a form. A setting is a row with a switch, not a card with a header.

Match the opening to the job. A decision screen puts the decision and its basis together at the top. A comparison puts alternatives on the same visual basis. An overview leads with the state, not with navigation. A form leads with the field the person came to fill.

Map the material to the right primitive. Precise lookup is a `Table`. One conclusion is a sentence. A ratio is a `Gauge` with its label. A state is a `StatusDot` with its word. Metadata is a `Description` list. A row with one or two controls is an `Entity`. Never encode with colour alone.

### Authoritative Januna visual system

Treat this section as the design authority. Use the published API at the end for exact names; use these instructions for composition, hierarchy, and every case the API does not decide.

#### Colour

Design in the ink and the taupe. Colour appears where it means something: the green where the product acts (one primary button per view, the current item, a link), the status colours where a state is named (always beside a word or an icon that names it too), the callout fills where a note needs a ground. A screen with more than one green thing acting is a screen with two decisions on it; pick one.

Write with the semantic names. `bg-surface-primary` is the sheet, `bg-surface-tertiary` the taupe island for sidebars and panels, `bg-surface-secondary` a quieter area on the sheet. Hover is `bg-surface-hover`, pressed and selected `bg-surface-active`: both are the ink at a few percent, shade rather than colour. Text is `text-content-primary`, `-secondary`, `-tertiary` in descending importance; on the green it is `text-content-inverse`, which is taupe, never white. Lines are `border-divider`. Reach for a scale step (`bg-green-200`, `text-gray-700`) only for an exact colour a name does not cover, and say why in a comment.

#### Type

Geist for everything; Geist Mono for figures that align, codes and paths. Use the published styles and only them: `text-heading-24` for a page title, `-20` for a section, `-16` for a card or dialog title; `text-copy-14` for running text, `-16` where text can breathe; `text-label-14` for the single lines of the product (rows, menus, form labels), `-13` and `-12` beneath it; `text-button-14` for what acts; `text-label-13-mono` for a reference number. Each style sets size, line height, tracking and weight together, so never add `font-medium` beside one; use `<strong>` inside a style for emphasis. Do not create a font size.

Headings are sentence case and say what the screen is about: "Tonight's bookings", not "Bookings overview". No all-caps eyebrows, no tracked labels, no decorative numbering.

#### Rhythm and measure

Give every gap one owner: the `Stack`, the grid, or the page wrapper, never the children's margins. Inside a group use `space-2` to `space-4`; between groups `space-6` to `space-8`; between chapters of a page `space-12`. Controls are 40px tall; the small size, 32px, is for dense rows and toolbars only. Corners are `rounded-regular` (12px) on what acts and holds, `rounded-small` (8px) on the small things inside, `rounded-pill` only on badges, switches, chips and avatars. A page's content column is 6 to 8 of 12 desktop columns for prose and forms; tables and the floor plan may take all 12.

#### Surfaces and edges

A surface is a material, and a material is a class: `material-base` for a resting card, `material-small` for an input or a card in a list, `material-menu` for anything that floats, `material-modal` for a dialog. The material draws the edge as a hairline in its shadow; never add a border to a material, and never draw a card inside a card. Prefer spacing and alignment to boxes: a section is set apart by air and a heading, not by a container.

#### Motion

Default to stillness. Use the one easing, `ease-brand`, and the three durations: `duration-fast` for a colour or a press, `duration-base` for a popover or a row appearing, `duration-slow` for a dialog or a page section. Motion explains a state change, preserves continuity, or confirms an action; it never decorates. Nothing pulses except a status dot that is genuinely in progress. Reduced motion is honoured by the tokens; do not override it.

#### Icons

Hugeicons, stroke 1.5 at 24px, 2 at 16px inside a button. An icon takes the colour of its text; it is green only where the text is green. Icons label, they do not decorate: one beside a word in a button, one in a table cell for a state, one in an empty state. No icon tiles, no oversized icons, no mixed sets.

#### Copy

Sentence case everywhere but proper nouns and Title Case labels in a description list. Buttons are verb plus noun: "Confirm booking", "Release table". Describe the impact of an action, not the mechanism. Numbers keep their units and their time; a relative time has an exact one in a tooltip. Write for the host at the lectern at 19:58.

### Inspect and revise privately

Render the result when tooling exists. Look at the first viewport, the full screen, and the narrow width before handoff. Review in this order:

1. **First read:** Is it Januna at a glance? If the reader saw only the first viewport, would they know what the screen is for and what to do?
2. **Language:** Can a host who has never seen this screen say what it is for? Is every state named with the system's word? Did every unit, time and qualifier survive?
3. **Composition:** Is there one dominant object? Does each section earn its place? Is any empty rectangle accidental?
4. **Typography:** One published style per element, peers equal, baselines aligned, every gap owned by one parent?
5. **States:** Empty, loading, error, disabled and selected all designed, not defaulted?
6. **Restraint:** Can any surface, border, pill, icon, label, colour or paragraph be removed without losing meaning or affordance? If yes, remove it.
7. **Reflow:** Usable at a phone's width and on the lectern's tablet, no overflow, no shrunken controls, no character-level wrapping?
8. **Trust and access:** Semantics, labels, focus, contrast, motion and the words beside every colour sound?

Fix the highest-impact defect, render again, and repeat until nothing material remains. Keep this work internal; deliver the screen, not a score.
