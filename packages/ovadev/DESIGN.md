---
name: ovadev-design-system
description: "Design, build, or substantially improve an Ovadev surface: the company's own site and every screen that carries its name, from a contact form to a product page to a status page. Use for any page, form, list, card or panel a visitor, customer or partner of Ovadev LLC sees, whenever the result must look and behave like Ovadev: paper, ink, one red, hard edges."
---

# Design Ovadev surfaces

Act as an excellent Ovadev designer and design engineer. Turn the task into a page that states its facts and stops: exact where it gives a number, plain where it gives a sentence, cut where it draws an edge. Shape the content and the interface together; a page is not a sequence of cards.

## Ovadev product and brand context

Ovadev LLC is a small software company in Baar that builds and runs its own products: TICKETOVA, online ticketing for pools and venues, and JANUNA, restaurant operations. Three people. The people reading an Ovadev surface are visitors, customers and partners: someone comparing a product, someone writing to the company, someone reading a post or looking up the address. They do not need to be persuaded; they need the fact, the price, the date, the person, and the one way to get in touch.

The look is ink on paper: near-white type on a near-black ground. Everything between the two is a step on one neutral ramp. Red is the single colour, a signal, one block per screen, seated into a corner or an edge; it is never type and never a button. One face, Geist, for the display, the prose and the meta. Corners are hard, lines are one hairline, and the only shadow is a cut: eight pixels across, eight down, no blur. An Ovadev screen looks like a sign, cut rather than moulded.

Start with what the reader came for, not the page category. Identify the fact they need, what they must not misread, and the one action that follows. Build confidence through exactness: prices in CHF, dates as 2026-09-14, names spelt as the company spells them, product names in caps.

## Use this priority order

When requirements compete, protect them in this order:

1. Preserve the data, the words, the units, the dates and the constraints you were given. A season pass at CHF 240.00 from 2027-05-01 is not "around 240 francs from May".
2. Preserve the host codebase: its framework, its routes, its data layer, and the Ovadev package as installed. Do not fork a component to restyle it; do not reach around the package for a raw element when a component exists.
3. Make the reader's path immediately clear: what this page is about, what it states, and what they can do next.
4. Be unmistakably Ovadev: paper and ink, the one red block, the semantic colours, the type styles, the materials, the hard edges, Geist, Lucide.
5. Compose for this screen. Reject the obvious template (a hero over a card grid, a row of icon tiles, a testimonial band) unless the material earns it. On an Ovadev page the material is usually a heading, a paragraph and a table.
6. Refine responsive behaviour, interaction and detail without weakening the hierarchy above.

When two of the brand's own rules meet, the mark wins over the layout, the red block wins over every other emphasis, the ladder wins over a gap that merely looks even, the hairline wins over a heavier edge, and stillness wins over a transition that explains nothing.

Ask one grouped set of questions only when proceeding could change what a price, a date, a legal line or a person's name means. Otherwise design the missing state honestly (an empty state, a placeholder, a "coming soon" note) and proceed.

## Integrate with the caller's project

Preserve the host framework, file structure, routes, data fetching and build. Edit the files that naturally own the screen. Do not force a single-file deliverable, raw HTML or a new framework; when no project exists, the smallest runnable React app with Tailwind 4 is the fallback.

The system is one package: `@ovadev-gmbh/ui-ovadev`, on the GitHub Packages registry of `Ovadev-GmbH`. Install it, then make its stylesheet the app's only Tailwind entry:

```css
/* app.css */
@import "@ovadev-gmbh/ui-ovadev/styles.css";
```

That line brings Tailwind, the theme, the type styles, the materials and Geist. Do not add a second `@import "tailwindcss"`, a `tailwind.config`, a shadcn `components.json`, a registry, a preset, or a theme of your own. Tailwind's default palette is cleared on purpose; if a class does not exist, the system has no name for it, and that is the answer.

The system has two modes, and the tokens switch, not the classes. Dark is the default: with nothing set, paper is near-black. `data-theme="light"` on `<html>` turns the sheet over, `data-theme="system"` follows the OS, and `data-theme="dark"` on an element inside a light page turns that part back. Every semantic name (`surface-*`, `content-*`, `divider`, `gray-alpha-*`) resolves to the right step in either mode, so write every class once, unprefixed. A `dark:` in an Ovadev file is a mistake; so is `white-alpha` for a line or a tint, which stays near-white in light mode — use `gray-alpha`, which is ink in both.

Import components from the package root and icons from its `icons` subpath (Lucide, re-exported):

```tsx
import { Button, Table, TableRow, Field } from "@ovadev-gmbh/ui-ovadev";
import { ArrowRightIcon, MailIcon } from "@ovadev-gmbh/ui-ovadev/icons";
```

Whole screens start from a block, the package's `/blocks` subpath: an app shell with the sidebar, the auth screens, the error pages, a stats row. Start there where one fits and compose the rest from components; never rebuild what a block already is.

```tsx
import { ErrorPage, AppShell } from "@ovadev-gmbh/ui-ovadev/blocks";
```

The package ships ESM with `"use client"` preserved, so it works in any React 19 setup, server-rendered or not, without wrappers. It brings its own Base UI and icon set; the app supplies only React and Tailwind, and never installs or imports either library itself. Keep screens static except where a control holds state.

When the host already uses the package, reuse what is applied: its providers (`TooltipProvider`, `Toaster`), its layout shell and grid conventions. Add a component only through the package; never copy a shadcn file into the app. The mark is not a component and not an icon: it comes from the brand assets, drawn on its own cells, and is placed rather than composed. Integration changes syntax, never composition or the published API. Ovadev shares its class vocabulary with Internal and Januna; a screen written for one reads in the others, only the values differ.

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

## Reject generated-design reflexes

Do not ship any of these recognisable defaults:

- A hero over a grid of feature cards where a heading, a paragraph and a table would do.
- A rounded corner anywhere: on a button, a card, an input, an image, an avatar, a badge. Nothing Ovadev owns has a radius; the switch is the one exception.
- Red spent twice: a red button, red type, a red hairline, a red hover, a red icon, a second block. One block per screen, seated into a corner or an edge, and it is not type.
- Ink type on the red block. Type on red is white.
- Colour as decoration: a tinted band, a coloured header, a gradient anywhere, an accent that is neither the signal nor a state.
- A glow, a blurred shadow, a bevel, an inner shadow, a highlight edge, a halo on focus. The one shadow is the cut, 8px 8px with no blur, only on what floats; focus is a 1px ink edge.
- Borders on materials, cards in cards, a box around every section, a heavier outline for emphasis. To emphasise, knock a block out or invert it.
- A second typeface: a mono face, a display face, a serif. Geist does every job; the mono role is Geist with tabular figures.
- A tracked label that is not `text-label-11-caps`, a heading above 30px lighter than 900, a font size that is not a published style, `font-medium` or `font-semibold` beside a type style.
- A fade, a scale, a zoom, a bounce, a rotation, a cross-fade, a blur-in. Motion is a translate on one axis, or nothing.
- The mark rounded, rotated, recoloured, glowed, boxed, framed, badged or stretched; the mark in a circle or a tile; the mark below its minimum; the mark drawn as an icon.
- A gap off the ladder: 20px, 30px, 44px. Every gap is a step.
- Proportional figures in a column of numbers. Figures are mono and right-aligned.
- Prices without CHF; dates as "next month"; a product name in lower case.
- A badge for ordinary metadata; a state shown as a colour, a dot or an empty badge without its word.
- Icons as decoration: a tile per feature, an icon per heading, mixed sets.
- Empty states with an illustration. An empty state says what is empty and offers the one action.
- Hard-coded hex, `bg-white`, `bg-black`, `text-zinc-500`, Tailwind's default palette, `dark:` variants, a light theme.
- Marketing register: superlatives, exclamation marks, a testimonial band.
- Em dashes in copy.
- Narrating the design: captions that explain why a layout was chosen.

## Use the published API

Install the package and import its stylesheet as the app's Tailwind entry; nothing else is needed. It brings Base UI and the icon set with it.

```css
@import "@ovadev-gmbh/ui-ovadev/styles.css";
```

```tsx
import { Button, Dialog, DialogTrigger } from "@ovadev-gmbh/ui-ovadev";
```

Every colour, type style, material and layout token below is a Tailwind class in the app. Tailwind's own palette is cleared: `bg-zinc-500` does not exist, and that is the point.

### Semantic colours

Write with these. Each is a Tailwind colour (`bg-surface-hover`, `text-content-secondary`, `bg-status-danger/10`) and a custom property (`--ova-surface-hover`).

**Surface.** What things sit on.

| Token | Step | Use |
| --- | --- | --- |
| `surface-primary` | `background-100` | Paper. Pages, cards, inputs. |
| `surface-secondary` | `gray-100` | A cell lifted off the page: a table header, a band. |
| `surface-tertiary` | `background-200` | Sidebars and panels. |
| `surface-quaternary` | `gray-200` | A cell lifted off a surface: a card inside a band, a code block. |
| `surface-raised` | `background-300` | What is lifted and cut: menus, dialogs, a plate. The surface in dark, white in light. |
| `surface-hover` | `gray-alpha-100` | A row, option or button under the pointer: ink at 4%. |
| `surface-active` | `gray-alpha-300` | The selected row, the pressed toggle, the current page: ink at 12%. |
| `surface-modal` | `black-alpha-700` | The scrim behind a dialog. |
| `surface-danger` | `red-100` | A destructive callout's fill. |
| `surface-success` | `green-100` | A success callout's fill. |
| `surface-warning` | `yellow-100` | A warning callout's fill. |
| `surface-info` | `blue-100` | An information callout's fill. |

**Content.** What is written and drawn.

| Token | Step | Use |
| --- | --- | --- |
| `content-primary` | `gray-1000` | Ink. Headings, body, icons that matter, the mark's cells. |
| `content-secondary` | `gray-900` | Stone. Ledes, captions, table values, secondary icons. |
| `content-tertiary` | `gray-700` | Placeholders, timestamps, the least important line. |
| `content-inverse` | `background-100` | Paper: type on ink, in a solid button. |
| `content-brand` | `gray-1000` | Links. The accent resolves to ink on purpose, so a stray accent cannot spend red. |
| `content-disabled` | `gray-700` | Disabled labels and icons. |

**Brand.** The one colour that acts is the ink. Red is a signal, not an accent: one block per screen, seated into a corner or an edge.

| Token | Step | Use |
| --- | --- | --- |
| `brand` | `gray-1000` | The primary button, the current item: ink. |
| `brand-hover` | `gray-alpha-900` | The primary button under the pointer: ink at 90%. |
| `brand-subtle` | `gray-alpha-200` | A tint behind a selected control. |
| `brand-bright` | `gray-1000` | The focus ring: ink, one hairline. |
| `brand-signal` | `red-700` | The red block. Never type, never a button, never twice. |

**Status.** Four meanings, four colours, each with a fill of its own. Danger is the reject red, not the identity's.

| Token | Step | Use |
| --- | --- | --- |
| `status-danger` | `red-800` | Errors, destructive actions. |
| `status-success` | `green-800` | Done, confirmed, live. |
| `status-warning` | `yellow-800` | Pending, attention needed. |
| `status-info` | `blue-800` | Neutral information. |

**Stroke.** Lines. One weight, one colour: the hairline is ink at 12%, everywhere; the strong one at 26% where it has to survive a lifted surface.

| Token | Step | Use |
| --- | --- | --- |
| `divider` | `gray-alpha-300` | Every cell division and rail edge: between rows, inside a component, a card's edge. |
| `divider-strong` | `gray-alpha-500` | A line that must be seen: an input's edge, a section's end. |
| `divider-inverse` | `black-alpha-400` | A line on ink. |
| `cut` | `black-alpha-700` | The colour of the one shadow: the 8px cut under what floats. |

### Scales

Ten steps each, the same roles on every scale. Reach for a step (`bg-green-200`, `--ova-gray-700`) only for an exact colour a semantic name does not cover.

| Steps | Role |
| --- | --- |
| 1, 2, 3 | Component backgrounds: The fills of UI components, lifted off paper: 1 at rest, 2 on hover, 3 when active. |
| 4, 5, 6 | Borders: The strokes of UI components: 4 at rest, 5 on hover, 6 when active or focused. |
| 7, 8 | High contrast backgrounds: Solid fills that carry dark text: 7 at rest, 8 on hover. |
| 9, 10 | Text and icons: The two ink levels: 9 secondary, 10 primary. Both pass 4.5:1 on paper and on a surface. |

| Scale | Note | 700 |
| --- | --- | --- |
| `gray` | The neutral ramp, from the surface up to the ink: surface, surface 2, mist, the two hairlines composited, then stone at 9 and ink at 10. | `#6a6e76` |
| `gray-alpha` | Ink at increasing opacity, turning with the mode: 3 is the hairline (12%), 5 the strong hairline (26%). What a component writes for a line or a tint. | `oklch(0.945 0.004 265 / 55%)` |
| `white-alpha` | Near-white at increasing opacity, in either mode: what sits on a dark fill. | `oklch(0.945 0.004 265 / 55%)` |
| `black-alpha` | Black at increasing opacity: scrims, and what sits on ink. | `oklch(0 0 0 / 55%)` |
| `red` | The identity's one colour. 7 is the red block, #E8202A, locked; the rest is its ramp on paper. Type on red is white, never ink. | `#e8202a` |
| `green` | Done, confirmed, live. | `oklch(0.620 0.160 150)` |
| `blue` | Information: the info status and its fill. Never a link, never the accent. | `oklch(0.620 0.170 262)` |
| `yellow` | Pending, attention needed. | `oklch(0.620 0.150 85)` |

Backgrounds: `background-100` #0e0f12 (The ground. Near-black; the page, and what shows through the mark's counter.) and `background-200` #16181c (A cell lifted off the page: a band, a plate, a panel.)

### Type styles

Geist for everything, Geist for figures and code. One class sets size, line height, tracking and weight; never add a weight class beside one. `<strong>` inside a style is its modifier.

**Heading.** Titles. 900 and tight above 30px, the site's own steps; 700 for a subheading; 600 inside a component.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-heading-98` | 98 / 90 | 900 | The hero. One per site. |
| `text-heading-78` | 78 / 74 | 900 | A page's title. |
| `text-heading-54` | 54 / 54 | 900 | A section's title. |
| `text-heading-40` | 40 / 44 | 900 |  |
| `text-heading-32` | 32 / 36 | 700 |  |
| `text-heading-24` | 24 / 28 | 700 | A subheading. |
| `text-heading-20` | 20 / 24 | 700 |  |
| `text-heading-16` | 16 / 24 | 600 | Card and dialog titles. |
| `text-heading-14` | 14 / 20 | 600 |  |

**Copy.** Running text, several lines at a time. Generous leading, no tracking.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-copy-23` | 23 / 32 | 400 | The sentence under a hero heading. |
| `text-copy-18` | 18 / 28 | 400 | The lede: the sentence under a heading. |
| `text-copy-17` | 17 / 27 | 400 | Prose on the site. |
| `text-copy-15` | 15 / 24 | 400 | Prose in a product; the most common text style. |
| `text-copy-14` | 14 / 20 | 400 | Secondary running text. |
| `text-copy-13` | 13 / 18 | 400 | Where space is at a premium. |
| `text-copy-13-mono` | 13 / 18 | 400 | Inline code mentions. |

**Label.** A single line: table cells, menu rows, form labels, eyebrows. Enough line height to sit next to an icon. Caps for the eyebrow and the meta line.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-label-18` | 18 / 24 | 400 |  |
| `text-label-16` | 16 / 20 | 400 | Titles that must read as more than regular text. |
| `text-label-14` | 14 / 20 | 400 | The most common label. Menus, rows, form labels. |
| `text-label-14-mono` | 14 / 20 | 400 | The largest mono, to pair with text above 14. |
| `text-label-13` | 13 / 16 | 400 | A secondary line next to another label. Tabular figures for numbers. |
| `text-label-13-mono` | 13 / 16 | 400 | Pairs with Label 14. |
| `text-label-12` | 12 / 16 | 400 | Tertiary text in busy views. |
| `text-label-12-mono` | 12 / 16 | 400 |  |
| `text-label-11-caps` | 11 / 12 | 600 | The eyebrow over a section: caps, wide. |
| `text-label-11-caps-mono` | 11 / 12 | 600 | The meta line: tokens, counts, file names. |

**Button.** Only inside components that render a button. 600, the display weight for a label.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-button-16` | 16 / 24 | 600 | The largest button. |
| `text-button-14` | 14 / 20 | 600 | The default button. |
| `text-button-12` | 12 / 16 | 600 | Only when a tiny button sits inside an input. |

### Materials

A material sets radius, fill, stroke and shadow together. The stroke is a hairline in the shadow: never add a border to a material.

**Surface.** On the page.

| Class | Radius | Use |
| --- | --- | --- |
| `material-base` | 0px | Everything at rest: cards, list containers, tables. One hairline on paper. |
| `material-small` | 0px | Inputs, selects, resting outline buttons: the strong hairline, so a control reads as a control. |
| `material-medium` | 0px | A cell lifted off the page: a band, a plate, a card that invites a click. |
| `material-large` | 0px | The one thing on the page that must be found first: lifted, and cut. |

**Floating.** Above the page.

| Class | Radius | Use |
| --- | --- | --- |
| `material-tooltip` | 0px | Ink, paper text, no stem. |
| `material-menu` | 0px | Menus, popovers, comboboxes: a lifted surface, the strong hairline, the cut. |
| `material-modal` | 0px | Dialogs and sheets. |
| `material-fullscreen` | 0px | Takeovers: paper, edge to edge. |

**Tints.** The small material with a colour in its ring.

| Class | Radius | Use |
| --- | --- | --- |
| `material-accent` | 0px | A card in focus, the recommended row: the ink hairline. |
| `material-active` | 0px | A selected card, a focused control. |
| `material-danger` | 0px | A card in error. |

**When to use.**

- Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.
- Base for almost everything; small for controls; medium for a band or plate. Large only for the one object on a page that must be found first.
- Never stack two materials on one element; never add a border to one; never round a corner.

**Behaviour.**

- The hairline is the edge. Corners are hard.
- Only what floats is cut, and the cut is always the same: 8px, 8px, no blur.
- No glow, no gradient, no inner shadow, no bevel.

**Accessibility.**

- A material is chrome; semantics live on the wrapper.
- Selection is a fill and a word, never the ring alone.

### Layout

**Spacing.** The steps a layout is made of.

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--ova-space-1` | `p-space-1 / gap-space-1` | `4px` | Inside a control: icon to label. |
| `--ova-space-2` | `p-space-2 / gap-space-2` | `8px` | Between controls in a row. |
| `--ova-space-3` | `p-space-3 / gap-space-3` | `12px` | A control's padding. |
| `--ova-space-4` | `p-space-4 / gap-space-4` | `16px` | Inside a card. |
| `--ova-space-6` | `p-space-6 / gap-space-6` | `24px` | Between cards; a dialog's padding. |
| `--ova-space-8` | `p-space-8 / gap-space-8` | `32px` | Between sections of a page. |
| `--ova-space-12` | `p-space-12 / gap-space-12` | `48px` | Between chapters of a page. |
| `--ova-space-16` | `p-space-16 / gap-space-16` | `64px` | Between bands on the site. |
| `--ova-space-24` | `p-space-24 / gap-space-24` | `96px` | The site's section rhythm at its widest. |

**Radius.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--ova-radius-small` | `rounded-small` | `0px` | Menu items, cells, chips: hard. |
| `--ova-radius-regular` | `rounded-regular` | `0px` | Controls, cards, inputs: hard. |
| `--ova-radius-large` | `rounded-large` | `0px` | Menus, larger cards: hard. |
| `--ova-radius-modal` | `rounded-modal` | `0px` | Dialogs and sheets: hard. |
| `--ova-radius-section` | `rounded-section` | `0px` | Sections and panels: hard. |
| `--ova-radius-pill` | `rounded-pill` | `9999px` | Switches only. Not avatars, not chips, not the mark. |

**Motion.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--ova-ease-out` | `ease-brand` | `cubic-bezier(0.22, 1, 0.36, 1)` | Everything that moves: the site's push, fast to start, settling. |
| `--ova-duration-fast` | `duration-fast` | `120ms` | Hover, press, a colour change. |
| `--ova-duration-base` | `duration-base` | `260ms` | The push: a panel, a popover, a page. One axis. |
| `--ova-duration-slow` | `duration-slow` | `320ms` | A block seating: a dialog, a sheet. |

- Move on one axis, as a translate. Nothing fades, blurs, scales, bounces, rotates or dissolves.
- One easing, three durations, none longer than a third of a second.
- Respect prefers-reduced-motion: durations drop to zero, the state change stays.

### Components

61 components on Base UI. Each is documented with a live demo and its source at https://intern.ova.dev/brand/ovadev/<slug>, and as Markdown at the same path with `.md`. The exported names are the parts you compose.

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

Screens and screen parts composed from the components, so a whole page starts from one import. Each is shown with every case at https://intern.ova.dev/brand/ovadev/<slug>, and as Markdown at the same path with `.md`. Start a screen from a block where one fits; compose from components where none does.

```tsx
import { AppShell, AuthLayout } from "@ovadev-gmbh/ui-ovadev/blocks";
```

- App Shell (`app-shell`): AppShell, AppShellHeader, AppShellContent
- Auth (`auth`): AuthLayout, AuthCard, OvadevMark, SecuredBy, GoogleSignInForm
- Error Page (`error-page`): ErrorPage, ErrorPageCode, ErrorPageTitle, ErrorPageDescription, ErrorPageActions
- Stats (`stats`): StatGrid, Stat, StatDelta

### Icons

Lucide. 2,000 icons, stroke 2 at 16px inside controls, 1.75 at 20px standalone, always in the ink. Every icon is exported as `Name` and `NameIcon`; use the `Icon` spelling. The mark itself is not an icon: it comes from Brand Assets. The full set: https://intern.ova.dev/brand/ovadev/icons

```tsx
import { PlusIcon, SearchIcon } from "@ovadev-gmbh/ui-ovadev/icons";

<PlusIcon className="size-4" />
```


## Accessibility and reflow

Use landmarks, one `h1` per screen, ordered headings, native controls with visible labels, semantic tables with header cells, and the package's components, which carry their ARIA. Every state has a word or an icon beside its colour; the red block carries no meaning a word does not also carry. Focus is visible on everything focusable, a 1px ink edge, in tab order that follows reading order. Contrast is measured, not asserted, and each pair has a bar to clear: ink and stone on paper and on a surface clear 4.5:1 for body type; the red block clears 3:1 against paper so it can be found; type on the block is white, the one pair on red that carries type, because ink on red is 3.6:1 and does not; a hairline is a separator, not a control, and is held to 1.2:1. Reduced motion is honoured: durations drop to zero and the end state renders at once.

Reflow before shrinking: rows stack, tables scroll locally in their own container, controls keep their size, type keeps its style, the red block keeps its corner. Give grid and flex children `min-width: 0`. Never conceal overflow. A screen must work on a laptop and at a phone's width without a different design for each.
