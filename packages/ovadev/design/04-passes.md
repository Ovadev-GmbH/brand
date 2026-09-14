## Work in four passes

### Frame the job

Before laying anything out, answer: who is reading here, what did they come for, and what must they not misread. Name the states the screen can be in: empty, loading, the common case, a long list, the error, the form sent. Normalise the material: every price has its currency, every date is written as the site writes it, every product name is in caps, every person carries the role the company gives them. Distinguish what the company states from what a visitor infers.

Support two speeds of reading. The scan: the eyebrow, the heading, the one red block, the table of facts. The check: the paragraph, the address, the exact date, the legal line.

### Choose the composition

Say aloud the layout the page type suggests, then ask whether the material earns it. A list of anything is a table, or a column of rows with hairlines between them. A product is a heading, a paragraph, a table of what it does and one action. A person is a row: name, role, contact. A post is its title, its date, its reading time and its prose. A contact page is the form and the address, side by side where the width allows.

Match the opening to the job. A page opens with its eyebrow and its heading, in the first cell of the rail. A form opens with the field the visitor came to fill. A post opens with its title and its date. A status page opens with the state of each service, in the system's word.

Map the material to the right primitive. A set of facts is a `Table`. A ratio is a `Progress` with its `ProgressLabel` and `ProgressValue`. A state is a `Badge` with its word, or the word alone in its status colour where a badge would be too loud. Metadata is a plain `<dl>`: each `<dt>` in `text-label-11-caps` and the secondary ink, each `<dd>` in `text-label-14`, figures, dates and file names in `text-label-13-mono`. A row with one or two controls is an `Item`. A form is a `Field` per input with its `FieldLabel` and `FieldError`. Never encode with colour alone.

### Authoritative Ovadev visual system

Treat this section as the design authority. Use the published API at the end for exact names; use these instructions for composition, hierarchy, and every case the API does not decide.

#### Colour

Design in ink on paper. Red is not a colour to design with: it is a signal, one block per screen, `bg-brand-signal`, seated hard into a corner or an edge of a cell. It is never type, never a button, never a hairline, never a hover, and never twice. The mark carries its own block, and that one belongs to the mark, not to the layout. The four status colours appear only where a state is named, always beside a word or an icon; danger is the reject red, not the identity's. The primary button is ink. A screen with colour that is neither the signal nor a state is a screen with decoration on it; remove it.

Write with the semantic names. `bg-surface-primary` is paper, `bg-surface-secondary` a cell lifted off it (a band, a table header), `bg-surface-tertiary` a sidebar or a panel, `bg-surface-quaternary` a card inside a band or a code block. Hover is `bg-surface-hover`, pressed and selected `bg-surface-active`: ink at a few percent. Text is `text-content-primary` (ink), `-secondary` (stone), `-tertiary`; on ink it is `text-content-inverse`. The accent resolves to ink, so `text-content-brand` cannot spend red. Type on the red block is white and nothing else. Lines are `border-divider` inside things and `border-divider-strong` where a line must survive a lifted surface: an input, a menu's edge, a section's end. Reach for a scale step only for an exact colour a name does not cover, and say why in a comment.

#### Type

Geist for everything. There is no second family; the mono role is Geist with tabular figures, set in caps at wide tracking, and it exists for figures, dates, tokens and file names. Use the published styles and only them: `text-heading-98` for the one hero on the site, `-78` for a page title, `-54` for a section, all at 900 and tight; `-24` for a subheading; `-16` for a card or dialog title. `text-copy-17` for prose on the site and `-15` in a product; `text-copy-18` for the lede under a heading. `text-label-14` for the working lines (rows, cells, menus, form labels), `-13` beneath it; `text-label-11-caps` for the eyebrow over a section and `text-label-11-caps-mono` for the meta line; `text-button-14` on buttons; `text-label-13-mono` for anything a person might copy or compare. Each style sets size, line height, tracking and weight together, so never add `font-medium` beside one. Do not create a font size.

Headings are sentence case and state a fact: "Ticketing for pools", "Three people", "Contact". Product names are always in caps: TICKETOVA, JANUNA. The eyebrow above a heading is one or two words in `text-label-11-caps`, never a sentence. No numbering, no praise.

#### Rhythm and measure

Give every gap one owner: the flex or grid parent, or the page wrapper, never the children's margins. Every gap comes off the ladder: inside a group `space-2` to `space-3`; between groups `space-4` to `space-6`; between chapters `space-8` to `space-12`; between bands on the site `space-16` or `space-24`. Two neighbouring steps are always visibly different, which is the point; nothing off the ladder. Controls are 32px tall; 28px in dense rows and toolbars; 40px only for the one primary action on a form. Corners are hard: `rounded-regular`, `rounded-small` and `rounded-large` are all 0, and `rounded-pill` is for a switch and nothing else, not an avatar, not a chip, not the mark. Tables and bands take the full width of the rail; prose and forms sit in a column of 480 to 640px.

#### Surfaces and edges

A surface is a material: `material-base` for cards, inputs and containers, one hairline on paper; `material-small` for a control, the strong hairline; `material-medium` for a band or a plate, a cell lifted off the page; `material-menu` for what floats; `material-modal` for a dialog. The material draws the edge; never add a border to one, never a card in a card. Where two cells meet, one of them draws the line. `material-large`, `-menu` and `-modal` carry the cut: 8px right, 8px down, no blur, the one shadow in the system, and it exists for what floats and for the one object on a page that must be found first. To emphasise, knock a block out of a field or invert it (`bg-brand text-content-inverse`); never outline it more heavily, never glow it. Prefer rules and spacing to boxes: a list's rows are lines, not cards.

#### Motion

Default to stillness. What moves, moves on one axis, as a translate, with `ease-brand` and one of the three durations: `duration-fast` for a colour change, `duration-base` for a panel or a page arriving, `duration-slow` for a block seating into a corner. Nothing fades, blurs, scales, bounces, rotates or dissolves; a thing is there, or it is not, or it is on its way along one axis. Nothing moves at rest except a `Spinner` beside the word of a state that is genuinely in progress. Reduced motion is honoured by the tokens: durations drop to zero and the end state renders at once.

#### Icons

Lucide, stroke 2 at 16px inside controls, 1.75 at 20px standalone, always in the ink. An icon takes the colour of its text. Icons label; they do not decorate: one in a button beside its word, one in a cell for a state, one in an empty state. No icon tiles, no oversized icons, no mixed sets. The mark is not an icon: it comes from the brand assets, keeps one cell of clear space on every side, is never below 24px in an interface, and is never rounded, rotated, recoloured, glowed, boxed or stretched.

#### Copy

Sentence case everywhere but proper nouns and product names, which are in caps. Buttons are verb plus noun: "Send message", "Download kit", "Read post". Prices keep their currency, dates are written 2026-09-14, phone numbers as +41 41 …, addresses as the imprint prints them. Plain, exact, a little dry: no superlatives, no exclamation marks. Write for a reader who wants the fact and will leave once they have it.

### Inspect and revise privately

Render the result when tooling exists. Look at the first viewport, the full screen, and the narrow width before handoff. Review in this order:

1. **First read:** Is it Ovadev at a glance? Paper, ink, one red block and nothing else chromatic? Can the reader see the heading and the one action without scrolling?
2. **Language:** Every price with its currency, every date written out, every product name in caps, every state in the system's word?
3. **Composition:** One dominant object? Each cell earning its place? No accidental boxes, no card grid that a table or a column of rows would say better?
4. **Typography:** One published style per element, headings at their weight and tracking, figures in mono and aligned, every gap owned by one parent and on the ladder?
5. **States:** Empty, loading, long list, error, sent, disabled and selected all designed, not defaulted?
6. **Restraint:** Can any surface, border, badge, icon, colour or paragraph be removed without losing meaning or affordance? If yes, remove it. Is there a second red? Remove it.
7. **Reflow:** Usable at a laptop's width and a narrow one, tables scrolling locally, the red block still seated on its corner, no shrunken controls?
8. **Trust and access:** Semantics, labels, focus, contrast, motion and the words beside every colour sound?

Fix the highest-impact defect, render again, and repeat until nothing material remains. Keep this work internal; deliver the screen, not a score.
