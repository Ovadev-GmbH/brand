## Work in four passes

### Frame the job

Before laying anything out, answer: who is working here, what are they looking for, and what must they not misread. Name the states the screen can be in: empty, loading, the common case, a lot of rows, the error. Normalise the material: every amount has a currency, every time has a zone and a date, every ID is shown as the system shows it, every status has one of the system's names. Distinguish what the system knows from what it derives.

Support two speeds of reading. The scan: the table, the status dots, the mono figures lined up. The check: the description list of one record, the audit trail, the exact timestamp.

### Choose the composition

Say aloud the layout the screen type suggests, then ask whether the material earns it. A list of anything is a table with the filter above it. One record is a description list with one or two actions. A setting is a row with a control. A dashboard is a table with a few figures above it, not a grid of cards.

Match the opening to the job. A list screen opens with the filter and the table. A record screen opens with the identifier, the status, and the actions. A form opens with the field the operator came to fill. A console opens with the log.

Map the material to the right primitive. Precise lookup is a `Table`. A ratio is a `Gauge` with its label. A state is a `StatusDot` with its word. Metadata is a `Description` list. A row with one or two controls is an `Item`. A value to copy is a `Snippet`. Never encode with colour alone.

### Authoritative Intern visual system

Treat this section as the design authority. Use the published API at the end for exact names; use these instructions for composition, hierarchy, and every case the API does not decide.

#### Colour

Design in black and white. Colour appears only where it means something: the four status colours where a state is named (always beside a word or an icon), the blue on a link and the focus ring, the callout fills behind a note. The primary button is black. A screen with colour that is not a state is a screen with decoration on it; remove it.

Write with the semantic names. `bg-surface-primary` is the sheet, `bg-surface-tertiary` the quieter sheet for sidebars and panels, `bg-surface-secondary` a table header or a well. Hover is `bg-surface-hover`, pressed and selected `bg-surface-active`: black at a few percent. Text is `text-content-primary`, `-secondary`, `-tertiary`; on black it is `text-content-inverse`. Lines are `border-divider` inside things and `border-divider-strong` (black) where structure ends: a card's edge, an input, a section. Reach for a scale step only for an exact colour a name does not cover, and say why in a comment.

#### Type

Geist for everything; Geist Mono for figures, IDs, codes and paths, which is a lot of Intern. Use the published styles and only them: `text-heading-20` for a page title, `-16` for a section or a card title; `text-label-13` for the working lines of the tool (rows, cells, menus, form labels), `-12` beneath it; `text-copy-14` for the rare running text; `text-button-14` on buttons; `text-label-13-mono` for anything a person might copy or compare. Each style sets size, line height, tracking and weight together, so never add `font-medium` beside one. Do not create a font size.

Headings are sentence case and name the thing: "Invoices", "Deployment 4f2c", "API keys". No eyebrows, no numbering, no praise.

#### Rhythm and measure

Give every gap one owner: the flex or grid parent, or the page wrapper, never the children's margins. Inside a group `space-2` to `space-3`; between groups `space-4` to `space-6`; between chapters `space-8`. Controls are 32px tall; 28px in dense rows and toolbars; 40px only for the one primary action on a form. Corners are `rounded-regular` (2px) on what acts and holds, `rounded-small` (0) on the things inside, `rounded-pill` only on status dots, avatars and switches. Tables take the full width; forms sit in a column of 480 to 640px.

#### Surfaces and edges

A surface is a material: `material-base` for cards, inputs and containers, a single black hairline; `material-menu` for what floats; `material-modal` for a dialog. The material draws the edge; never add a border to one, never a card in a card. `material-medium` and `-large` add a hard offset and exist for the one object on a page that must be found first. Prefer rules and spacing to boxes: a table's rows are lines, not cards.

#### Motion

Default to stillness. Use `ease-brand` and the three durations, none longer than a quarter second. Motion explains a state change or confirms an action; a tool never animates for pleasure. Nothing pulses except a status dot that is genuinely in progress. Reduced motion is honoured by the tokens.

#### Icons

Phosphor, regular weight, 16px inside controls, 20px standalone. An icon takes the colour of its text. Icons label; they do not decorate: one in a button beside its word, one in a cell for a state, one in an empty state. No icon tiles, no oversized icons, no mixed weights.

#### Copy

Sentence case everywhere but proper nouns, IDs, and Title Case labels in a description list. Buttons are verb plus noun: "Create key", "Retry deployment", "Void invoice". Numbers keep their units, currencies and zones; relative times carry the exact one in a tooltip. Write for a colleague who knows the system and is in a hurry.

### Inspect and revise privately

Render the result when tooling exists. Look at the first viewport, the full screen, and the narrow width before handoff. Review in this order:

1. **First read:** Is it Intern at a glance? Can the operator see the table or the record and the one action without scrolling?
2. **Language:** Every state in the system's word, every figure with its unit, every ID as the system prints it?
3. **Composition:** One dominant object? Each section earning its place? No accidental boxes, no KPI tiles that a table would say better?
4. **Typography:** One published style per element, figures in mono and aligned, baselines aligned, every gap owned by one parent?
5. **States:** Empty, loading, many rows, error, disabled and selected all designed, not defaulted?
6. **Restraint:** Can any surface, border, badge, icon, colour or paragraph be removed without losing meaning or affordance? If yes, remove it.
7. **Reflow:** Usable at a laptop's width and a narrow one, tables scrolling locally, no shrunken controls?
8. **Trust and access:** Semantics, labels, focus, contrast, motion and the words beside every colour sound?

Fix the highest-impact defect, render again, and repeat until nothing material remains. Keep this work internal; deliver the screen, not a score.
