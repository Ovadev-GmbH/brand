## Work in four passes

### Frame the job

Before laying anything out, answer: who is here, what did they come to do, and what must they not misread. Name the states the screen can be in: empty, loading, the common case, a sold-out day, a lot of rows, the error, the payment that failed. Normalise the material: every price has its currency, every date and time is in Zurich, every ticket and order carries the code the system prints, every state has one of the system's names. Distinguish what the system knows (a scan happened at 14:02) from what it derives (the visitor is inside).

Support two speeds of reading. The scan: the page title in Oswald, the table, the state words, the mono figures lined up, the total. The check: one order's description list, the scan history, the exact time of a refund.

### Choose the composition

Say aloud the layout the screen type suggests, then ask whether the material earns it. A list of anything is a table with the filter above it. One order is a description list, its positions as a table, one or two actions. A setting is a row with a control. A dashboard is a table with a few figures above it, not a grid of cards. A shop page is the event's name, the day, the tickets with their prices and a quantity each, and the total with the one button that pays. A scan result is one word, its reason and the ticket it read, filling the screen.

Match the opening to the job. A list screen opens with the filter and the table. An order opens with its number, its state and its actions. A form opens with the field the person came to fill. The shop opens with what is on sale today. The sign-in opens with the mobile number.

Map the material to the right primitive. Precise lookup is a `Table`. A ratio (sold of capacity) is a `Progress` with its `ProgressLabel` and `ProgressValue`. A state is a `Badge` with its word, or the word alone in its status colour where a badge would be too loud. Metadata is a plain `<dl>`: each `<dt>` in `text-label-13` and the secondary ink, each `<dd>` in `text-label-14`, codes, order numbers and amounts in `text-label-13-mono`. A quantity is a `ButtonGroup` of minus, the number and plus, or a `NativeSelect` on a phone. A day is a `Calendar`. A row with one or two controls is an `Item`. A code to copy is an `InputGroup` holding a read-only `InputGroupInput` in mono and an `InputGroupButton` that copies it, labelled for what it copies. Never encode with colour alone.

### Authoritative TICKETOVA visual system

Treat this section as the design authority. Use the published API at the end for exact names; use these instructions for composition, hierarchy, and every case the API does not decide.

#### Colour

Design in black and white. Colour appears only where it means something: green on what is valid, paid or confirmed, red on what is refused, failed or destructive, yellow on what is pending, blue on neutral information, always beside a word or an icon, and the callout fills behind a note. The primary button is black. Links are the ink, underlined. A screen with colour that is not a state is a screen with decoration on it; remove it. Green is never a button, a header or a brand fill.

Write with the semantic names. `bg-surface-primary` is the sheet, `bg-surface-tertiary` the quieter sheet for sidebars and panels, `bg-surface-secondary` a table header or a well. Hover is `bg-surface-hover`, pressed and selected `bg-surface-active`: black at a few percent. Text is `text-content-primary`, `-secondary`, `-tertiary`; on black it is `text-content-inverse`. Lines are `border-divider` inside things and `border-divider-strong` where a line must be seen: an input, a section's end. Reach for a scale step only for an exact colour a name does not cover, and say why in a comment.

#### Type

Two faces with two jobs. Oswald is the brand, and only the large headings wear it: `text-heading-40` for a page title on the shop and an event's name, `text-heading-32` for a page title in the dashboard, `text-heading-24` for a section title or a price that must be found first. Geist is the work: `text-heading-16` for a card or a dialog title, `text-label-14` for the working lines (rows, cells, menus, form labels), `-13` beneath it, `text-copy-14` for running text, `text-copy-16` where a visitor reads in the shop, `text-button-14` on buttons. Geist Mono, `text-label-13-mono`, for anything a person might copy or compare: a ticket code, an order number, an amount in a column. Each style sets size, line height, tracking and weight together, so never add `font-medium` beside one. Do not create a font size, and never set Oswald below 24px, in a table, a form, a button or a paragraph.

Headings are sentence case and name the thing: "Bestellungen", "Order 10482", "Saisonabo 2027". Event names are written as the tenant writes them. TICKETOVA is always in capitals. No eyebrows, no numbering, no praise.

#### Rhythm and measure

Give every gap one owner: the flex or grid parent, or the page wrapper, never the children's margins. Inside a group `space-2` to `space-3`; between groups `space-4` to `space-6`; between chapters `space-8`. Controls are 32px tall; 28px in dense rows and toolbars; 36px for the one primary action on a form; on the shop and at the till, the action that pays or admits is full width on a phone and at least 44px tall. Corners are the site's: `rounded-regular` (6px) on controls and cards, `rounded-large` (8px) on menus and larger cards, `rounded-modal` (12px) on dialogs, `rounded-pill` only on avatars and switches. Tables take the full width; forms sit in a column of 480 to 640px; the shop's checkout in a column of 560px.

#### Surfaces and edges

A surface is a material: `material-base` for cards, inputs and containers, a single grey hairline; `material-menu` for what floats; `material-modal` for a dialog. The material draws the edge; never add a border to one, never a card in a card. `material-medium` and `-large` add a short lift and exist for the one object on a page that must be found first: an event card in the shop, the basket. `material-active` marks the chosen day or the chosen ticket. Prefer rules and spacing to boxes: a table's rows are lines, not cards.

#### Motion

Default to stillness. Use `ease-brand` and the three durations, none longer than a quarter second. Motion explains a state change or confirms an action: a ticket added, a scan answered. Nothing moves at rest except a `Spinner` beside the word of a state that is genuinely in progress, such as a payment being confirmed. Reduced motion is honoured by the tokens.

#### Icons

Phosphor, the regular weight, 16px inside controls, 20px standalone. An icon takes the colour of its text. Icons label; they do not decorate: one in a button beside its word, one in a cell for a state, one in an empty state. No icon tiles, no oversized icons, no duotone, no mixed weights, no second set.

#### Copy

Write in the app's language through its i18n, never hard-coded. Sentence case everywhere but proper nouns, codes and TICKETOVA. Buttons are verb plus noun: "Ticket erstatten", "Event anlegen", "Jetzt bezahlen". Prices are written CHF 8.00, with the apostrophe from a thousand (CHF 1'240.00). Dates and times are in Zurich, as the locale writes them (14.07.2026, 14:02); relative times carry the exact one in a tooltip. Write for a cashier with a queue, and for a visitor who has never heard of TICKETOVA.

### Inspect and revise privately

Render the result when tooling exists. Look at the first viewport, the full screen, and the narrow width before handoff. Review in this order:

1. **First read:** Is it TICKETOVA at a glance? Can the person see the table, the order, the tickets on sale or the scan's answer, and the one action, without scrolling?
2. **Language:** Every state in the system's word, every price in CHF, every date in Zurich, every code as the system prints it, TICKETOVA in capitals?
3. **Composition:** One dominant object? Each section earning its place? No accidental boxes, no KPI tiles that a table would say better?
4. **Typography:** Oswald only in the large headings, one published style per element, figures in mono and aligned, every gap owned by one parent?
5. **States:** Empty, loading, sold out, many rows, error, payment failed, disabled and selected all designed, not defaulted?
6. **Restraint:** Can any surface, border, badge, icon, colour or paragraph be removed without losing meaning or affordance? If yes, remove it.
7. **Reflow:** Usable on a phone in the shop and at a laptop in the dashboard, tables scrolling locally, no shrunken controls?
8. **Trust and access:** Semantics, labels, focus, contrast, motion and the words beside every colour sound?

Fix the highest-impact defect, render again, and repeat until nothing material remains. Keep this work internal; deliver the screen, not a score.
