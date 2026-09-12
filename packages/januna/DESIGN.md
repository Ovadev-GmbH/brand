---
name: januna-design-system
description: "Design, build, or substantially improve a Januna product surface: a screen, a page, a form, a panel, a flow, an empty state, an e-mail-like message, or the copy on any of them. Use for the host's tablet at the lectern, the manager's laptop, and the guest's phone, whenever the result must look and behave like Januna without being told twice."
---

# Design Januna product surfaces

Act as an excellent Januna designer, editor and design engineer. Turn the task into a surface that is unmistakably Januna: warm, calm, precise, with the one thing that matters plainly in front of the reader. Shape the job and the interface together; do not merely assemble components around a data model.

## Januna product and brand context

Januna is the reservations product restaurants run their evening on. Hosts stand at a lectern with a tablet at 19:58, managers read the week on a laptop, guests book on their phones. Every surface is Januna talking to one of them, and it has to read like the same product every time.

The brand is warm and calm. The sheet is white, the island is taupe, the ink is a soft black, and there is one green, dark, that does the acting. Nothing glows, nothing floats on a gradient, nothing shouts. A Januna screen looks like a well-set table: everything in its place, more air than object.

Start with the reader's job, not the screen category. Identify what they must understand or decide, the one thing they must not miss, and what they can do about it. Build confidence through clarity and the right state at the right moment, never through decoration, novelty or hype.

## Use this priority order

When requirements compete, protect them in this order:

1. Preserve the data, the words, the units, the states and the constraints you were given. A booking at 19:30 for six is not a booking "around half seven".
2. Preserve the host codebase: its framework, its routes, its data layer, and the Januna package as installed. Do not fork a component to restyle it; do not reach around the package for a raw element when a component exists.
3. Make the reader's job immediately clear: what this screen is for, what needs their decision, and what they can do about it, in that order.
4. Be unmistakably Januna: the semantic colours, the type styles, the materials, the measure, Geist, Hugeicons.
5. Compose for this screen. Reject the obvious template (a centred hero, a grid of cards, a table with a toolbar) unless the material earns it.
6. Refine responsive behaviour, interaction and detail without weakening the hierarchy above.

Ask one grouped set of questions only when proceeding could change what a booking, a guest, a table, a price or a permission means, or who is allowed to act. Otherwise design the missing state honestly (an empty state, a placeholder, a "not yet" note) and proceed.

## Integrate with the caller's project

Preserve the host framework, file structure, routes, data fetching and build. Edit the files that naturally own the screen. Do not force a single-file deliverable, raw HTML or a new framework; when no project exists, the smallest runnable React app with Tailwind 4 is the fallback.

The system is one package: `@ovadev-gmbh/ui-januna`, on the GitHub Packages registry of `Ovadev-GmbH`. Install it, then make its stylesheet the app's only Tailwind entry:

```css
/* app.css */
@import "@ovadev-gmbh/ui-januna/styles.css";
```

That line brings Tailwind, the theme, the type styles, the materials, Geist and Geist Mono. Do not add a second `@import "tailwindcss"`, a `tailwind.config`, a shadcn `components.json`, a registry, a preset, or a theme of your own. Tailwind's default palette is cleared on purpose; if a class does not exist, the system has no name for it, and that is the answer.

Import components from the package root and icons from Hugeicons:

```tsx
import { Button, Dialog, DialogTrigger, DialogContent } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
```

The package ships ESM with `"use client"` preserved, so it works in any React 19 setup, server-rendered or not, without wrappers. Keep screens static except where a control holds state.

When the host already uses the package, reuse what is applied: its providers (`TooltipProvider`, `Toaster`), its layout shell, its `Stack` and grid conventions. Add a component only through the package; never copy a shadcn file into the app. Integration changes syntax, never composition or the published API.

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

## Reject generated-design reflexes

Do not ship any of these recognisable defaults:

- A second green: a lighter or brighter green as a fill, a tint behind a selected row, a green border. Selection is shade, not colour.
- White text on the green. It is taupe.
- Pill buttons in the product. Pills are for badges, switches and chips.
- A 3px glow on focus, or any halo. Focus is a 1px edge.
- Borders on materials, cards in cards, and a box around every section.
- Gradients, blurs behind popups, glass, drop shadows deeper than the materials define.
- All-caps eyebrows, tracked labels, decorative section numbers, a font size that is not a published style.
- `font-medium` or `font-semibold` beside a type style. The style carries the weight.
- A centred hero with a subtitle followed by a grid of three cards.
- Repeated metric tiles where one composed row would say more.
- A badge for ordinary metadata; a status dot without its word.
- Icons as decoration: a tile per feature, an icon per heading, mixed icon sets.
- Empty states with an illustration and a joke. An empty state says what is empty and offers the one action.
- Dismiss buttons on notes; toasts for things the screen already shows.
- Hard-coded hex, `bg-white`, `bg-black`, `text-gray-500`, Tailwind's default palette, `dark:` variants. Januna has one room and it is lit.
- Em dashes in copy.
- Narrating the design: captions that explain why a layout was chosen.

## Use the published API

Install the package and import its stylesheet as the app's Tailwind entry; nothing else is needed.

```css
@import "@ovadev-gmbh/ui-januna/styles.css";
```

```tsx
import { Button, Dialog, DialogTrigger } from "@ovadev-gmbh/ui-januna";
```

Every colour, type style, material and layout token below is a Tailwind class in the app. Tailwind's own palette is cleared: `bg-zinc-500` does not exist, and that is the point.

### Semantic colours

Write with these. Each is a Tailwind colour (`bg-surface-hover`, `text-content-secondary`, `bg-status-danger/10`) and a custom property (`--jan-surface-hover`).

**Surface.** What things sit on.

| Token | Step | Use |
| --- | --- | --- |
| `surface-primary` | `background-100` | The sheet. Pages, cards, inputs. |
| `surface-secondary` | `gray-100` | A quieter area on the sheet: a table header, a well. |
| `surface-tertiary` | `background-200` | The island: sidebars, panels. |
| `surface-quaternary` | `gray-400` | The deepest step: a code block, a well inside a well. |
| `surface-hover` | `gray-alpha-100` | A row, option or button under the pointer: the ink at 5%, so it reads as shade, not as a colour. |
| `surface-active` | `gray-alpha-200` | The selected row, the pressed toggle, the current page: the ink at 8%. |
| `surface-modal` | `gray-alpha-500` | The scrim behind a dialog. |
| `surface-danger` | `red-100` | A destructive callout's fill. |
| `surface-success` | `green-100` | A success callout's fill. |
| `surface-warning` | `amber-100` | A warning callout's fill. |
| `surface-info` | `blue-100` | An information callout's fill. |

**Content.** What is written and drawn.

| Token | Step | Use |
| --- | --- | --- |
| `content-primary` | `gray-1000` | The ink. Headings, body, icons that matter. |
| `content-secondary` | `gray-900` | Descriptions, helper text, secondary icons. |
| `content-tertiary` | `gray-700` | Placeholders, timestamps, the least important line. |
| `content-inverse` | `background-200` | Text on the green or on the ink: taupe, never white. |
| `content-brand` | `green-1000` | Links and emphasis in the brand. |
| `content-disabled` | `gray-600` | Disabled labels and icons. |

**Brand.** The one colour that acts.

| Token | Step | Use |
| --- | --- | --- |
| `brand` | `green-1000` | The primary button, the current item, emphasis. |
| `brand-hover` | `gray-1000` | The primary button under the pointer: the ink, as on the marketing site. |
| `brand-subtle` | `green-200` | A tint of the brand behind a selected control. |
| `brand-bright` | `green-700` | The bright green: the focus ring, a live indicator, the first chart series. |

**Status.** Four meanings, four colours, each with a fill of its own.

| Token | Step | Use |
| --- | --- | --- |
| `status-danger` | `red-700` | Errors, destructive actions. |
| `status-success` | `green-700` | Done, confirmed, live. |
| `status-warning` | `amber-800` | Pending, attention needed. |
| `status-info` | `blue-700` | Neutral information. |

**Stroke.** Lines.

| Token | Step | Use |
| --- | --- | --- |
| `divider` | `gray-alpha-400` | The border between things: the ink at 16%, so it sits on sheet and island alike. |
| `divider-strong` | `gray-alpha-600` | A border that must be seen: an input at rest. |
| `divider-inverse` | `taupe-alpha-400` | A line on the green or on the ink. |

### Scales

Ten steps each, the same roles on every scale. Reach for a step (`bg-green-200`, `--jan-gray-700`) only for an exact colour a semantic name does not cover.

| Steps | Role |
| --- | --- |
| 1, 2, 3 | Component backgrounds: The fills of UI components. On Background 1, use 1 as the resting fill, 2 for hover, 3 for active. Small elements like badges can start at 2 or 3. |
| 4, 5, 6 | Borders: The strokes of UI components: 4 at rest, 5 on hover, 6 when active or focused. |
| 7, 8 | High contrast backgrounds: Solid fills that carry light text: primary buttons, progress, the selected row. 7 at rest, 8 on hover. |
| 9, 10 | Text and icons: The two ink levels. 9 is secondary text and icons, 10 is primary. Both pass 4.5:1 on Background 1 and 2. |

| Scale | Note | 700 |
| --- | --- | --- |
| `gray` | The taupe family, not a grey: warm at every step. 10 is the ink. | `#7d7670` |
| `gray-alpha` | The ink at increasing opacity: the same steps as Gray, but they sit correctly on either background. | `oklch(0.29 0 0 / 55%)` |
| `taupe-alpha` | The taupe at increasing opacity, for what sits on the green or on a photo: translucent buttons, strokes on dark. | `oklch(0.967 0.010 68 / 50%)` |
| `green` | The brand. 7 is the bright green, 10 the dark one every filled button wears. | `oklch(0.548 0.171 145)` |
| `red` | Destructive and errors. 7 is the brand's one red. | `oklch(0.581 0.201 33)` |
| `amber` | Warnings and pending states. | `oklch(0.740 0.160 75)` |
| `blue` | Information and links outside the brand green. | `oklch(0.580 0.170 255)` |
| `teal` | Success that must not be the brand green. | `oklch(0.580 0.120 185)` |
| `purple` | Highlighting and the occasional third series. | `oklch(0.580 0.170 300)` |
| `pink` | Attention where red would read as an error. | `oklch(0.580 0.170 350)` |

Backgrounds: `background-100` oklch(1 0 0) (The sheet. Default page and element background.) and `background-200` oklch(0.967 0.010 68) (The taupe island: panels and sidebars, used sparingly for a subtle step.)

### Type styles

Geist for everything, Geist Mono for figures and code. One class sets size, line height, tracking and weight; never add a weight class beside one. `<strong>` inside a style is its modifier.

**Heading.** Titles for pages and sections. Tight, with the tracking pulled in as the size grows.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-heading-72` | 72 / 72 | 600 |  |
| `text-heading-64` | 64 / 64 | 600 |  |
| `text-heading-56` | 56 / 56 | 600 |  |
| `text-heading-48` | 48 / 56 | 600 |  |
| `text-heading-40` | 40 / 48 | 600 | Page titles. |
| `text-heading-32` | 32 / 40 | 600 |  |
| `text-heading-24` | 24 / 32 | 600 | Section titles. |
| `text-heading-20` | 20 / 26 | 600 |  |
| `text-heading-16` | 16 / 24 | 600 | Card and dialog titles. |
| `text-heading-14` | 14 / 20 | 600 |  |

**Copy.** Running text, several lines at a time. More line height than Label.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-copy-24` | 24 / 36 | 400 | Hero areas on marketing pages. |
| `text-copy-20` | 20 / 30 | 400 | Hero areas on marketing pages. |
| `text-copy-18` | 18 / 28 | 400 | Marketing, big quotes. |
| `text-copy-16` | 16 / 24 | 400 | Simpler, larger views like dialogs, where text can breathe. |
| `text-copy-14` | 14 / 20 | 400 | The most common text style. |
| `text-copy-13` | 13 / 18 | 400 | Secondary text, and views where space is at a premium. |
| `text-copy-13-mono` | 13 / 18 | 400 | Inline code mentions. |

**Label.** A single line: table cells, menu rows, form labels. Enough line height to sit next to an icon.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-label-20` | 20 / 32 | 400 |  |
| `text-label-18` | 18 / 20 | 400 |  |
| `text-label-16` | 16 / 20 | 400 | Titles that must read as more than regular text. |
| `text-label-14` | 14 / 20 | 400 | The most common label. Menus, rows, form labels. |
| `text-label-14-mono` | 14 / 20 | 400 | The largest mono, to pair with text above 14. |
| `text-label-13` | 13 / 16 | 400 | A secondary line next to another label. Tabular figures for numbers. |
| `text-label-13-mono` | 13 / 16 | 400 | Pairs with Label 14. |
| `text-label-12` | 12 / 16 | 400 | Tertiary text in busy views: comments, show more, the capitals in calendars. |
| `text-label-12-mono` | 12 / 16 | 400 |  |

**Button.** Only inside components that render a button.

| Class | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `text-button-16` | 16 / 24 | 500 | The largest button. |
| `text-button-14` | 14 / 20 | 500 | The default button. |
| `text-button-12` | 12 / 16 | 500 | Only when a tiny button sits inside an input. |

### Materials

A material sets radius, fill, stroke and shadow together. The stroke is a hairline in the shadow: never add a border to a material.

**Surface.** On the page.

| Class | Radius | Use |
| --- | --- | --- |
| `material-base` | 12px | Everyday use: cards at rest, list containers. |
| `material-small` | 12px | Slightly raised: an input, a resting button, a card in a list. One hairline and a whisper under it. |
| `material-medium` | 16px | Further raised: a card that invites a click. |
| `material-large` | 16px | The most raised thing on the page. |

**Floating.** Above the page.

| Class | Radius | Use |
| --- | --- | --- |
| `material-tooltip` | 8px | The lightest lift. Tooltips are the only floating element with a stem. |
| `material-menu` | 12px | Menus, popovers, comboboxes: lifted from the page. |
| `material-modal` | 24px | Dialogs and sheets: further lift. |
| `material-fullscreen` | 24px | Takeovers: the biggest lift. |

**Tints.** The small material with a colour in its ring.

| Class | Radius | Use |
| --- | --- | --- |
| `material-accent` | 12px | A card in the brand: the recommended plan, the current step. |
| `material-active` | 12px | A selected card, a focused control. |
| `material-danger` | 12px | A card in error, a destructive confirmation. |

**When to use.**

- Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.
- Pick by where the element sits: base for resting cards, small to large for raised content, tooltip and menu for popovers, modal for dialogs, fullscreen for takeovers.
- Never stack two materials on one element. A child that needs more lift gets its own, one step higher.
- A material draws no border. The ring in the shadow is the edge; add a border and the edge doubles.

**Behaviour.**

- Keep the material and the z-index band in step, so a tooltip never sits visually below a card.
- Prefer the lowest lift that still reads as lifted. Over-elevating is the usual source of noise.
- A tint replaces the small material's ring, it does not add to it: one card is accent or active or danger, never two.

**Accessibility.**

- A material is chrome. The semantics live on the wrapper: role="dialog" on a modal, role="tooltip" on a tooltip.
- Never let the shadow alone say something is raised or selected; pair it with the focus ring and a label.

### Layout

**Spacing.** The steps a layout is made of.

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--jan-space-1` | `p-space-1 / gap-space-1` | `4px` | Inside a control: icon to label. |
| `--jan-space-2` | `p-space-2 / gap-space-2` | `8px` | Between controls in a row. |
| `--jan-space-3` | `p-space-3 / gap-space-3` | `12px` | A control's padding. |
| `--jan-space-4` | `p-space-4 / gap-space-4` | `16px` | Inside a card. |
| `--jan-space-6` | `p-space-6 / gap-space-6` | `24px` | Between cards; a dialog's padding. |
| `--jan-space-8` | `p-space-8 / gap-space-8` | `32px` | Between sections of a page. |
| `--jan-space-12` | `p-space-12 / gap-space-12` | `48px` | Between chapters of a page. |
| `--jan-space-section` | `p-space-section / gap-space-section` | `8rem` | Above a marketing section. |
| `--jan-space-section-end` | `p-space-section-end / gap-space-section-end` | `10.25rem` | Below a marketing section. |

**Radius.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--jan-radius-small` | `rounded-small` | `8px` | Badges, kbd, small chips. |
| `--jan-radius-regular` | `rounded-regular` | `12px` | Controls, cards, inputs. The default. |
| `--jan-radius-large` | `rounded-large` | `16px` | Menus, larger cards. |
| `--jan-radius-modal` | `rounded-modal` | `24px` | Dialogs and sheets. |
| `--jan-radius-section` | `rounded-section` | `4rem` | A marketing section's corner. |
| `--jan-radius-pill` | `rounded-pill` | `9999px` | Buttons and toggles: fully round ends. |

**Motion.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--jan-ease-out` | `ease-brand` | `cubic-bezier(0.215, 0.61, 0.355, 1)` | Everything that moves: an ease-out cubic, quick to start and soft to settle. |
| `--jan-duration-fast` | `duration-fast` | `150ms` | Hover, press, a colour change. |
| `--jan-duration-base` | `duration-base` | `300ms` | A popover, a toggle, a row appearing. |
| `--jan-duration-slow` | `duration-slow` | `450ms` | A page section, a dialog, a marketing reveal. |

- Default to stillness. Add motion only when it explains a state change, keeps continuity, or confirms an action.
- One easing for everything. Different curves in one screen read as different products.
- Respect prefers-reduced-motion: durations drop to zero, the state change stays.

### Components

68 components on Base UI. Each is documented with a live demo and its source at https://ovadev-gmbh.github.io/brand/januna/<slug>, and as Markdown at the same path with `.md`. The exported names are the parts you compose.

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
- Note (`note`): Note, NoteIcon, NoteContent, NoteLabel, NoteAction
- Badge (`badge`): Badge
- Status Dot (`status-dot`): StatusDot
- Progress (`progress`): Progress, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValue
- Gauge (`gauge`): Gauge
- Spinner (`spinner`): Spinner
- Skeleton (`skeleton`): Skeleton
- Empty (`empty`): Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia
- Marker (`marker`): Marker, MarkerIcon, MarkerContent

**Data.**

- Table (`table`): Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption
- Chart (`chart`): ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle
- Description (`description`): Description, DescriptionList
- Entity (`entity`): Entity, EntityContent, EntityList
- Snippet (`snippet`): Snippet, SecretValue
- Pagination (`pagination`): Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious
- Breadcrumb (`breadcrumb`): Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis
- Avatar (`avatar`): Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge
- Card (`card`): Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent
- Item (`item`): Item, ItemMedia, ItemContent, ItemActions, ItemGroup, ItemSeparator, ItemTitle, ItemDescription, ItemHeader, ItemFooter
- Carousel (`carousel`): CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext

**Layout.**

- Stack (`stack`): Stack
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

Icons: Hugeicons, the free set, via `HugeiconsIcon` from `@hugeicons/react` and names from `@hugeicons/core-free-icons` (`<HugeiconsIcon icon={Add01Icon} strokeWidth={2} />`). The full set: https://ovadev-gmbh.github.io/brand/januna/icons


## Accessibility and reflow

Use landmarks, one `h1` per screen, ordered headings, native controls with visible labels, semantic tables, and the package's components, which carry their ARIA. Every state has a word or an icon beside its colour. Focus is visible on everything focusable, in tab order that follows reading order. Contrast meets WCAG AA on both the sheet and the island; the ink levels are published so that it does.

Reflow before shrinking: rows stack, tables scroll locally in their own container, controls keep their size, type keeps its style. Give grid and flex children `min-width: 0`. Never conceal overflow to hide a layout problem. A screen must work at a phone's width, on a tablet at the lectern, and on a laptop, without a different design for each.
