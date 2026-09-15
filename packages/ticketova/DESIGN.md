---
name: ticketova-design-system
description: "Design, build, or substantially improve a TICKETOVA surface: the dashboard a pool, venue or municipality runs its ticketing from, the partner and master consoles, the shop where visitors buy tickets, and the screens at the till and the gate. Use for any page, table, form, checkout or scan result that staff or visitors of TICKETOVA see, whenever the result must look and behave like TICKETOVA: black on white, Oswald for the brand, Geist for the work, no colour as decoration."
---

# Design TICKETOVA surfaces

Act as an excellent TICKETOVA designer and design engineer. Turn the task into a screen that sells, checks or settles a ticket without a second look: plain where a visitor buys, exact where staff count, unmistakable where a scan says yes or no. Shape the job and the interface together; a ticketing screen is not a dashboard of cards.

## TICKETOVA product and brand context

TICKETOVA is online ticketing for pools, venues and municipalities in Switzerland, built by Ovadev GmbH. Its surfaces are the dashboard a tenant runs (events, ticket types, orders, scans, validation, support), the partner and master consoles behind it, the shop where a visitor picks a day and pays, and the screens at the till and the gate. The people using it are a cashier with a queue in front of them, an administrator at a Gemeinde closing the month, and a visitor on a phone in the sun. None of them wants to be persuaded; they want the ticket, the price, the order, and whether it is valid.

The look is black on white, as ticketova.com sets it. Grey hairlines between things, a 6px corner, no colour as decoration. Green is the tick, for what is valid, paid or confirmed; red is the refusal and the red in the mark. Neither is ever a fill for the brand. Oswald, the wordmark's face, sets the large headings: a page's title, an event's name, a price. Geist sets everything that works: controls, tables, forms, running text. Geist Mono sets ticket codes, order numbers and amounts in a column. The name is always TICKETOVA, in capitals. A TICKETOVA screen looks like a clean ticket: one bold line, the facts below it, nothing else.

Start with the job, not the screen category. Identify what the person is here to do, what they must not misread, and the one action that follows. Build confidence through exactness: prices in CHF, dates and times in Zurich, the ticket's own code, the state in the system's word.

## Use this priority order

When requirements compete, protect them in this order:

1. Preserve the data, the words, the units, the states and the constraints you were given. A day ticket at CHF 8.00 for 14.07.2026 is not "eight francs, sometime in July", and a refunded position is not "cancelled".
2. Preserve the host codebase: its framework, its routes, its data layer, its i18n, and the TICKETOVA package as installed. Do not fork a component to restyle it; do not reach around the package for a raw element when a component exists.
3. Make the job immediately clear: what this screen lists, sells or checks, what needs a decision, and what can be done about it.
4. Be unmistakably TICKETOVA: black on white, the semantic colours, the type styles, the materials, Oswald in the headings, Geist for the work, Phosphor.
5. Compose for this screen. Reject the obvious template (a hero over a card grid, KPI tiles, an event carousel) unless the material earns it. In the dashboard the material is usually a table; in the shop it is a day, a list of tickets and a total.
6. Refine responsive behaviour, interaction and detail without weakening the hierarchy above.

Ask one grouped set of questions only when proceeding could change what a price, a date, a ticket's validity, a refund or a permission means. Otherwise design the missing state honestly (an empty state, a placeholder, a "not yet" note) and proceed.

## Integrate with the caller's project

Preserve the host framework, file structure, routes, data fetching and build. Edit the files that naturally own the screen. Do not force a single-file deliverable, raw HTML or a new framework; when no project exists, the smallest runnable React app with Tailwind 4 is the fallback.

The system is one package: `@ovadev-gmbh/ui-ticketova`, on the GitHub Packages registry of `Ovadev-GmbH`. Install it, then make its stylesheet the app's only Tailwind entry:

```css
/* app.css */
@import "@ovadev-gmbh/ui-ticketova/styles.css";
```

That line brings Tailwind, the theme, the type styles, the materials, Geist, Geist Mono and Oswald. Do not add a second `@import "tailwindcss"`, a `tailwind.config`, a shadcn `components.json`, a registry, a preset, a font of your own or a theme of your own. Tailwind's default palette is cleared on purpose; if a class does not exist, the system has no name for it, and that is the answer.

The system is light only. There is no dark palette, no switcher and no theme cookie, so there is nothing for a `dark:` variant to switch to. Write every class once, unprefixed.

Import components from the package root and icons from its `icons` subpath (Phosphor, re-exported):

```tsx
import { Button, Table, TableRow, Field } from "@ovadev-gmbh/ui-ticketova";
import { TicketIcon, MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";
```

Phosphor's icons read a React context, so a server component (a page or layout in Next's App Router) imports them from `@ovadev-gmbh/ui-ticketova/icons/ssr` instead; the names are the same.

Whole screens start from a block, the package's `/blocks` subpath: an app shell with the sidebar, the sign-in with a mobile number and a code, the error pages, a stats row. Start there where one fits and compose the rest from components; never rebuild what a block already is.

```tsx
import { AppShell, PhoneSignInForm } from "@ovadev-gmbh/ui-ticketova/blocks";
```

The package ships ESM with `"use client"` preserved, so it works in any React 19 setup, server-rendered or not, without wrappers. It brings its own Base UI and icon set; the app supplies only React and Tailwind, and never installs or imports either library itself. Keep screens static except where a control holds state.

When the host already uses the package, reuse what is applied: its providers (`TooltipProvider`, `Toaster`), its layout shell and grid conventions. Add a component only through the package; never copy a shadcn file into the app. On the shop, a tenant's own logo and name come from the tenant record, as the shop already loads them; the system's colours, type and materials stay. Integration changes syntax, never composition or the published API. TICKETOVA shares its class vocabulary with Internal, Januna and Ovadev; a screen written for one reads in the others, only the values differ.

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

## Reject generated-design reflexes

Do not ship any of these recognisable defaults:

- A dashboard of KPI cards where a table with three figures above it would do.
- Colour as decoration: a green button, a green header, a tinted sidebar, a gradient anywhere, an accent that is not a state.
- Oswald in a table, a form label, a button, a menu or a paragraph, or Oswald below 24px.
- Capitals beyond TICKETOVA and codes: all-caps headings, tracked eyebrows, shouting buttons.
- Corners the system does not publish: pill buttons, pill badges, 16px cards.
- Soft shadows on cards at rest. A card is a hairline.
- A 3px glow on focus, or any halo.
- Borders on materials, cards in cards, a box around every section.
- Decorative section numbers, a font size that is not a published style, `font-medium` or `font-semibold` beside a type style.
- Proportional figures in a column of numbers. Amounts and codes are mono and right-aligned.
- Relative times without the exact one; prices without CHF; ticket codes or order numbers truncated without a way to copy them.
- A scan result, a payment or a state shown as a colour, a dot or an empty badge without its word.
- Stock photos of crowds and pools, event carousels, a hero over a card grid in the shop.
- Icons as decoration: a tile per feature, an icon per heading, mixed weights, duotone.
- Empty states with an illustration. An empty state says what is empty and offers the one action.
- Dismiss buttons on notes; toasts for things the screen already shows.
- Hard-coded hex, `bg-white`, `bg-black`, `text-zinc-500`, Tailwind's default palette, `dark:` variants, a font loaded by the app.
- "Ticketova" or "TicketOVA" anywhere.
- Em dashes in copy.
- Narrating the design: captions that explain why a layout was chosen.

## Use the published API

Install the package and import its stylesheet as the app's Tailwind entry; nothing else is needed. It brings Base UI and the icon set with it.

```css
@import "@ovadev-gmbh/ui-ticketova/styles.css";
```

```tsx
import { Button, Dialog, DialogTrigger } from "@ovadev-gmbh/ui-ticketova";
```

Every colour, type style, material and layout token below is a Tailwind class in the app. Tailwind's own palette is cleared: `bg-zinc-500` does not exist, and that is the point.

### Semantic colours

Write with these. Each is a Tailwind colour (`bg-surface-hover`, `text-content-secondary`, `bg-status-danger/10`) and a custom property (`--tova-surface-hover`).

**Surface.** What things sit on.

| Token | Step | Use |
| --- | --- | --- |
| `surface-primary` | `background-100` | The sheet. Pages, cards, inputs. |
| `surface-secondary` | `gray-100` | A quieter area: a table header, a well. |
| `surface-tertiary` | `background-200` | Sidebars and panels. |
| `surface-quaternary` | `gray-200` | A well inside a well, a code block. |
| `surface-hover` | `gray-alpha-100` | A row, option or button under the pointer: black at 4%. |
| `surface-active` | `gray-alpha-300` | The selected row, the pressed toggle, the current page: black at 10%. |
| `surface-modal` | `gray-alpha-500` | The scrim behind a dialog. |
| `surface-danger` | `red-100` | A refusal's fill: the scan that did not pass. |
| `surface-success` | `green-100` | A success callout's fill. |
| `surface-warning` | `yellow-100` | A warning callout's fill. |
| `surface-info` | `blue-100` | An information callout's fill. |

**Content.** What is written and drawn.

| Token | Step | Use |
| --- | --- | --- |
| `content-primary` | `gray-1000` | The ink. Headings, body, icons that matter. |
| `content-secondary` | `gray-700` | Descriptions, helper text, secondary icons. |
| `content-tertiary` | `gray-500` | Placeholders, timestamps, the least important line. |
| `content-inverse` | `background-100` | Text on black: white. |
| `content-brand` | `gray-1000` | Links: the ink, underlined. No colour is decoration. |
| `content-disabled` | `gray-500` | Disabled labels and icons. |

**Brand.** The one colour that acts is the ink. Green and red are meanings, not the brand.

| Token | Step | Use |
| --- | --- | --- |
| `brand` | `gray-1000` | The primary button, the current item: the ink. |
| `brand-hover` | `gray-900` | The primary button under the pointer. |
| `brand-subtle` | `gray-200` | A tint behind a selected control. |
| `brand-bright` | `gray-1000` | The focus ring: the ink. |

**Status.** Four meanings, four colours, each with a fill of its own.

| Token | Step | Use |
| --- | --- | --- |
| `status-danger` | `red-800` | Refused, failed, destructive. |
| `status-success` | `green-800` | Valid, paid, confirmed: the tick. |
| `status-warning` | `yellow-700` | Pending, attention needed. |
| `status-info` | `blue-800` | Neutral information. |

**Stroke.** Lines. Grey hairlines, one step apart; nothing is drawn in black.

| Token | Step | Use |
| --- | --- | --- |
| `divider` | `gray-300` | The soft line, the site's #e5e7eb: between rows, inside a component, a card's edge. |
| `divider-strong` | `gray-400` | A line that must be seen: an input's edge, a section's end. |
| `divider-inverse` | `white-alpha-400` | A line on black. |

### Scales

Ten steps each, the same roles on every scale. Reach for a step (`bg-green-200`, `--tova-gray-700`) only for an exact colour a semantic name does not cover.

| Steps | Role |
| --- | --- |
| 1, 2, 3 | Component backgrounds: The fills of UI components: 1 at rest, 2 on hover, 3 when active. |
| 4, 5, 6 | Borders: The strokes of UI components: 4 at rest, 5 on hover, 6 when active or focused. |
| 7, 8 | High contrast backgrounds: Solid fills that carry light text: 7 at rest, 8 on hover. |
| 9, 10 | Text and icons: The two ink levels: 9 secondary, 10 primary. Both pass 4.5:1 on either background. |

| Scale | Note | 700 |
| --- | --- | --- |
| `gray` | The site's cool neutrals: its hairline #e5e7eb at 3, its placeholder #9ca3af at 5. 10 is the ink, #0a0a0a. | `#4b5563` |
| `gray-alpha` | Black at increasing opacity, for what must sit on either sheet. | `oklch(0 0 0 / 55%)` |
| `white-alpha` | White at increasing opacity, for what sits on black: strokes, translucent buttons. | `oklch(1 0 0 / 55%)` |
| `red` | Refusals, errors, destructive actions. 8 is the mark's red and the site's strike, #991b1b. | `oklch(0.580 0.190 25)` |
| `green` | The tick: valid, paid, confirmed. 8 is the site's #065f46 — line and text, never a brand fill. | `oklch(0.580 0.120 165)` |
| `blue` | Information only. Never a link, never an accent. | `oklch(0.580 0.140 255)` |
| `yellow` | Pending, attention needed: a reservation not yet paid. | `oklch(0.580 0.160 85)` |

Backgrounds: `background-100` #ffffff (The sheet. White; the page, the ticket, every element on it.) and `background-200` #fafafa (A quieter sheet: a panel, a sidebar, a well. The site's #fafafa.)

### Type styles

Oswald for the headings that carry the brand, Geist for everything else, Geist Mono for figures and code. One class sets size, line height, tracking and weight; never add a weight class beside one. `<strong>` inside a style is its modifier.

**Heading.** Titles. Oswald from 24px up, as the site sets its headings: 600, tracked in a little as the size grows. Geist below, inside components.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-heading-72` | 72 / 76 | 600 | The hero. One per site. |
| `text-heading-56` | 56 / 60 | 600 |  |
| `text-heading-48` | 48 / 52 | 600 |  |
| `text-heading-40` | 40 / 44 | 600 | Page titles on the shop; an event's name. |
| `text-heading-32` | 32 / 36 | 600 | Page titles in the dashboard. |
| `text-heading-24` | 24 / 28 | 600 | Section titles; a price. |
| `text-heading-20` | 20 / 26 | 600 | Geist from here down. |
| `text-heading-16` | 16 / 24 | 600 | Card and dialog titles. |
| `text-heading-14` | 14 / 20 | 600 |  |

**Copy.** Running text, several lines at a time, in Geist. More line height than Label.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-copy-20` | 20 / 30 | 400 | The sentence under a hero on the shop. |
| `text-copy-18` | 18 / 28 | 400 | The lede under a page title. |
| `text-copy-16` | 16 / 24 | 400 | Simpler, larger views like dialogs and the checkout, where text can breathe. |
| `text-copy-14` | 14 / 20 | 400 | The most common text style. |
| `text-copy-13` | 13 / 18 | 400 | Secondary text, and views where space is at a premium. |
| `text-copy-13-mono` | 13 / 18 | 400 | Inline code mentions. |

**Label.** A single line: table cells, menu rows, form labels. Enough line height to sit next to an icon. Mono for ticket codes, order numbers and amounts in a column.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-label-20` | 20 / 32 | 400 |  |
| `text-label-18` | 18 / 20 | 400 |  |
| `text-label-16` | 16 / 20 | 400 | Titles that must read as more than regular text. |
| `text-label-14` | 14 / 20 | 400 | The most common label. Menus, rows, form labels. |
| `text-label-14-mono` | 14 / 20 | 400 | The largest mono, to pair with text above 14. |
| `text-label-13` | 13 / 16 | 400 | A secondary line next to another label. Tabular figures for numbers. |
| `text-label-13-mono` | 13 / 16 | 400 | Pairs with Label 14: an order number, a ticket code. |
| `text-label-12` | 12 / 16 | 400 | Tertiary text in busy views: a timestamp, the capitals in calendars. |
| `text-label-12-mono` | 12 / 16 | 400 |  |

**Button.** Only inside components that render a button.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-button-16` | 16 / 24 | 500 | The largest button: the checkout's pay button. |
| `text-button-14` | 14 / 20 | 500 | The default button. |
| `text-button-12` | 12 / 16 | 500 | Only when a tiny button sits inside an input. |

### Materials

A material sets radius, fill, stroke and shadow together. The stroke is a hairline in the shadow: never add a border to a material.

**Surface.** On the page.

| Class | Radius | Use |
| --- | --- | --- |
| `material-base` | 6px | Everything at rest: cards, list containers, tables. One grey hairline. |
| `material-small` | 6px | Inputs, selects, resting outline buttons: a hairline one step stronger, so a control reads as a control. |
| `material-medium` | 8px | A card that invites a click: an event in the shop. |
| `material-large` | 8px | The one thing on the page that must be found first: the basket. |

**Floating.** Above the page.

| Class | Radius | Use |
| --- | --- | --- |
| `material-tooltip` | 4px | Black, white text, no stem. |
| `material-menu` | 8px | Menus, popovers, comboboxes: the hairline and a short lift. |
| `material-modal` | 12px | Dialogs and sheets. |
| `material-fullscreen` | 0px | Takeovers: the scan result, edge to edge. |

**Tints.** The small material with a colour in its ring.

| Class | Radius | Use |
| --- | --- | --- |
| `material-accent` | 6px | A card in focus, the recommended ticket: the ink hairline. |
| `material-active` | 6px | A selected card: the chosen day, the chosen ticket. |
| `material-danger` | 6px | A card in error. |

**When to use.**

- Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.
- Base for almost everything; small for controls. Medium and large only for the one object on a page that must be found first.
- Never stack two materials on one element; never add a border to one.

**Behaviour.**

- The hairline is the edge. Corners are 6px, 8px for what is larger, 12px for a dialog.
- Only what floats lifts, and it lifts little.

**Accessibility.**

- A material is chrome; semantics live on the wrapper.
- Selection is a fill and a word, never the ring alone.

### Layout

**Spacing.** The steps a layout is made of.

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--tova-space-1` | `p-space-1 / gap-space-1` | `4px` | Inside a control: icon to label. |
| `--tova-space-2` | `p-space-2 / gap-space-2` | `8px` | Between controls in a row. |
| `--tova-space-3` | `p-space-3 / gap-space-3` | `12px` | A control's padding. |
| `--tova-space-4` | `p-space-4 / gap-space-4` | `16px` | Inside a card. |
| `--tova-space-6` | `p-space-6 / gap-space-6` | `24px` | Between cards; a dialog's padding. |
| `--tova-space-8` | `p-space-8 / gap-space-8` | `32px` | Between sections of a page. |
| `--tova-space-12` | `p-space-12 / gap-space-12` | `48px` | Between chapters of a page. |

**Radius.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--tova-radius-small` | `rounded-small` | `4px` | Menu items, cells, chips, the tooltip. |
| `--tova-radius-regular` | `rounded-regular` | `6px` | Controls, cards, inputs: the site's corner. The nova shape. |
| `--tova-radius-large` | `rounded-large` | `8px` | Menus, larger cards. |
| `--tova-radius-modal` | `rounded-modal` | `12px` | Dialogs and sheets. |
| `--tova-radius-section` | `rounded-section` | `12px` | Sections and panels. |
| `--tova-radius-pill` | `rounded-pill` | `9999px` | Avatars and switches. Nothing else. |

**Motion.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--tova-ease-out` | `ease-brand` | `cubic-bezier(0.2, 0, 0, 1)` | Everything that moves: fast to start, done quickly. |
| `--tova-duration-fast` | `duration-fast` | `120ms` | Hover, press, a colour change. |
| `--tova-duration-base` | `duration-base` | `160ms` | A popover, a toggle, a row appearing. |
| `--tova-duration-slow` | `duration-slow` | `240ms` | A dialog, a panel. |

- Default to stillness. A screen moves only to explain a state change.
- One easing, three durations, none longer than a quarter second.
- Respect prefers-reduced-motion: durations drop to zero, the state change stays.

### Components

61 components on Base UI. Each is documented with a live demo and its source at https://intern.ova.dev/brand/ticketova/<slug>, and as Markdown at the same path with `.md`. The exported names are the parts you compose.

**Actions.**

- Button (`button`): Button
- Button Group (`button-group`): ButtonGroup, ButtonGroupSeparator, ButtonGroupText
- Toggle (`toggle`): Toggle
- Toggle Group (`toggle-group`): ToggleGroup, ToggleGroupItem
- Kbd (`kbd`): Kbd, KbdGroup

**Forms.**

- Input (`input`): Input
- Input Group (`input-group`): InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea
- Input OTP (`input-otp`): InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator
- Textarea (`textarea`): Textarea
- Label (`label`): Label
- Field (`field`): Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldLegend, FieldSeparator, FieldSet, FieldContent, FieldTitle
- Checkbox (`checkbox`): Checkbox
- Radio Group (`radio-group`): RadioGroup, RadioGroupItem
- Switch (`switch`): Switch
- Select (`select`): Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue
- Native Select (`native-select`): NativeSelect, NativeSelectOptGroup, NativeSelectOption
- Combobox (`combobox`): Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxGroup, ComboboxLabel, ComboboxCollection, ComboboxEmpty, ComboboxSeparator, ComboboxChips, ComboboxChip, ComboboxChipsInput, ComboboxTrigger, ComboboxValue
- Slider (`slider`): Slider
- Calendar (`calendar`): Calendar, CalendarDayButton
- Questionnaire (`questionnaire`): Questionnaire, QuestionnaireActions, QuestionnaireChoice, QuestionnaireChoiceDescription, QuestionnaireChoices, QuestionnaireDescription, QuestionnaireError, QuestionnaireInput, QuestionnaireItem, QuestionnaireNext, QuestionnairePrevious, QuestionnaireProgress, QuestionnaireSkip, QuestionnaireSubmit, QuestionnaireTitle

**Overlays.**

- Dialog (`dialog`): Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger
- Alert Dialog (`alert-dialog`): AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger
- Sheet (`sheet`): Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription
- Drawer (`drawer`): Drawer, DrawerPortal, DrawerOverlay, DrawerSwipeHandle, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription
- Popover (`popover`): Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger
- Hover Card (`hover-card`): HoverCard, HoverCardTrigger, HoverCardContent
- Tooltip (`tooltip`): Tooltip, TooltipTrigger, TooltipContent, TooltipProvider
- Dropdown Menu (`dropdown-menu`): DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent
- Context Menu (`context-menu`): ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup
- Menubar (`menubar`): Menubar, MenubarPortal, MenubarMenu, MenubarTrigger, MenubarContent, MenubarGroup, MenubarSeparator, MenubarLabel, MenubarItem, MenubarShortcut, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent
- Navigation Menu (`navigation-menu`): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuPositioner
- Command (`command`): Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator
- Toast (`toast`): Toaster, Toast, ToastAction, ToastClose, ToastContent, ToastDescription, ToastPortal, ToastProvider, ToastTitle, ToastViewport

**Disclosure.**

- Accordion (`accordion`): Accordion, AccordionItem, AccordionTrigger, AccordionContent
- Collapsible (`collapsible`): Collapsible, CollapsibleTrigger, CollapsibleContent
- Tabs (`tabs`): Tabs, TabsList, TabsTrigger, TabsContent

**Feedback.**

- Alert (`alert`): Alert, AlertTitle, AlertDescription, AlertAction
- Badge (`badge`): Badge
- Progress (`progress`): Progress, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValue
- Spinner (`spinner`): Spinner
- Skeleton (`skeleton`): Skeleton
- Empty (`empty`): Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia
- Marker (`marker`): Marker, MarkerIcon, MarkerContent

**Data.**

- Table (`table`): Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption
- Chart (`chart`): ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle
- Pagination (`pagination`): Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious
- Breadcrumb (`breadcrumb`): Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis
- Avatar (`avatar`): Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge
- Card (`card`): Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent
- Item (`item`): Item, ItemMedia, ItemContent, ItemActions, ItemGroup, ItemSeparator, ItemTitle, ItemDescription, ItemHeader, ItemFooter
- Carousel (`carousel`): CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext

**Layout.**

- Separator (`separator`): Separator
- Aspect Ratio (`aspect-ratio`): AspectRatio
- Scroll Area (`scroll-area`): ScrollArea, ScrollBar
- Resizable (`resizable`): ResizableHandle, ResizablePanel, ResizablePanelGroup
- Sidebar (`sidebar`): Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger
- Direction (`direction`): 

**Chat.**

- Message (`message`): MessageGroup, Message, MessageAvatar, MessageContent, MessageFooter, MessageHeader
- Message Scroller (`message-scroller`): MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem, MessageScrollerButton
- Bubble (`bubble`): BubbleGroup, Bubble, BubbleContent, BubbleReactions
- Attachment (`attachment`): Attachment, AttachmentGroup, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription, AttachmentActions, AttachmentAction, AttachmentTrigger

### Blocks

Screens and screen parts composed from the components, so a whole page starts from one import. Each is shown with every case at https://intern.ova.dev/brand/ticketova/<slug>, and as Markdown at the same path with `.md`. Start a screen from a block where one fits; compose from components where none does.

```tsx
import { AppShell, AuthLayout } from "@ovadev-gmbh/ui-ticketova/blocks";
```

- App Shell (`app-shell`): AppShell, AppShellHeader, AppShellContent
- Auth (`auth`): AuthLayout, AuthCard, AuthLink, OvadevMark, SecuredBy, PhoneSignInForm, OtpForm
- Error Page (`error-page`): ErrorPage, ErrorPageCode, ErrorPageTitle, ErrorPageDescription, ErrorPageActions
- Stats (`stats`): StatGrid, Stat, StatDelta

### Icons

Phosphor. 1,512 icons in six weights; the system draws the regular weight, 16px inside controls, 20px standalone, in the colour of its text. Every icon is exported as `Name` and `NameIcon`; use the `Icon` spelling. The full set: https://intern.ova.dev/brand/ticketova/icons

```tsx
import { PlusIcon, MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";

<PlusIcon className="size-4" />
```


## Accessibility and reflow

Use landmarks, one `h1` per screen, ordered headings, native controls with visible labels, semantic tables with header cells, and the package's components, which carry their ARIA. Every state has a word or an icon beside its colour; a scan result says valid or not valid, and why, in words, because the person at the gate may not see green from red. Focus is visible on everything focusable, in tab order that follows reading order; the dashboard is driven from the keyboard, so shortcuts are documented in `Kbd` where they exist. Contrast meets WCAG AA; the ink levels, the tick green and the refusal red are chosen so that it does on white.

Reflow before shrinking: rows stack, tables scroll locally in their own container, controls keep their size, type keeps its style. On the shop and at the till, targets are at least 44px and the action that pays or admits stays in reach of a thumb. Give grid and flex children `min-width: 0`. Never conceal overflow. A screen must work on a phone and on a laptop without a different design for each.
