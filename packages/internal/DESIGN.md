---
name: internal-design-system
description: "Design, build, or substantially improve an Intern surface: Ovadev's internal tools for operations, billing, deployments, support and audit. Use for any admin screen, table, form, panel, console or report that staff use daily, whenever the result must look and behave like Intern: black on white, dense, exact, quiet."
---

# Design Intern tool surfaces

Act as an excellent Intern designer and design engineer. Turn the task into a tool that staff can work in for hours: dense where it needs density, exact in every figure, quiet everywhere else. Shape the job and the interface together; a tool is not a dashboard of cards.

## Intern product and brand context

Intern is the layer Ovadev runs itself on: tenants, invoices, deployments, incidents, API keys, the audit log. The people using it are the team, every day, often with three other windows open. They do not need to be persuaded of anything; they need to find the row, read the number, and act.

The look is black on white. Four neutrals between them, one colour per meaning (red, green, blue, yellow), black hairline rules for structure, corners barely rounded, figures in mono. No warmth, no lift, no gradient. An Intern screen looks like a well-kept ledger.

Start with the operator's job, not the screen category. Identify what they are looking for, what they must not misread, and the one action that follows. Build confidence through exactness: units, timestamps, IDs, states, all visible, all in the system's words.

## Use this priority order

When requirements compete, protect them in this order:

1. Preserve the data, the words, the units, the states and the constraints you were given. An invoice of CHF 1'240.00 due 2026-10-01 is not "about twelve hundred, due next month".
2. Preserve the host codebase: its framework, its routes, its data layer, and the Intern package as installed. Do not fork a component to restyle it; do not reach around the package for a raw element when a component exists.
3. Make the operator's job immediately clear: what this screen lists or shows, what needs their decision, and what they can do about it.
4. Be unmistakably Intern: the semantic colours, the type styles, the materials, the measure, Geist, Phosphor.
5. Compose for this screen. Reject the obvious template (a hero, a card grid, KPI tiles) unless the material earns it. In a tool, the material is usually a table.
6. Refine responsive behaviour, interaction and detail without weakening the hierarchy above.

Ask one grouped set of questions only when proceeding could change what a record, an amount, a permission or a deletion means. Otherwise design the missing state honestly (an empty state, a placeholder, a "not yet" note) and proceed.

## Integrate with the caller's project

Preserve the host framework, file structure, routes, data fetching and build. Edit the files that naturally own the screen. Do not force a single-file deliverable, raw HTML or a new framework; when no project exists, the smallest runnable React app with Tailwind 4 is the fallback.

The system is one package: `@ovadev-gmbh/ui-internal`, on the GitHub Packages registry of `Ovadev-GmbH`. Install it, then make its stylesheet the app's only Tailwind entry:

```css
/* app.css */
@import "@ovadev-gmbh/ui-internal/styles.css";
```

That line brings Tailwind, the theme, the type styles, the materials, Geist and Geist Mono. Do not add a second `@import "tailwindcss"`, a `tailwind.config`, a shadcn `components.json`, a registry, a preset, or a theme of your own. Tailwind's default palette is cleared on purpose; if a class does not exist, the system has no name for it, and that is the answer.

Import components from the package root and icons from Phosphor:

```tsx
import { Button, Table, TableRow, DropdownMenu } from "@ovadev-gmbh/ui-internal";
import { PlusIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
```

The package ships ESM with `"use client"` preserved, so it works in any React 19 setup, server-rendered or not, without wrappers. Keep screens static except where a control holds state.

When the host already uses the package, reuse what is applied: its providers (`TooltipProvider`, `Toaster`), its layout shell and grid conventions. Add a component only through the package; never copy a shadcn file into the app. Integration changes syntax, never composition or the published API. Intern shares its class vocabulary with Januna; a screen written for one reads in the other, only the values differ.

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

## Reject generated-design reflexes

Do not ship any of these recognisable defaults:

- A dashboard of KPI cards where a table with three figures above it would do.
- Colour as decoration: a coloured header, a tinted sidebar, a gradient anywhere, an accent that is not a state.
- Rounded corners beyond 2px on what acts or holds; pill buttons; pill badges.
- Soft shadows on cards at rest. A card is a hairline.
- A 3px glow on focus, or any halo. Focus is a 1px blue edge.
- Borders on materials, cards in cards, a box around every section.
- All-caps eyebrows, tracked labels, decorative section numbers, a font size that is not a published style.
- `font-medium` or `font-semibold` beside a type style.
- Proportional figures in a column of numbers. Figures are mono and right-aligned.
- Relative times without the exact one; amounts without currency; IDs truncated without a way to copy them.
- A badge for ordinary metadata; a status dot without its word.
- Icons as decoration: a tile per feature, an icon per heading, mixed weights.
- Empty states with an illustration. An empty state says what is empty and offers the one action.
- Dismiss buttons on notes; toasts for things the screen already shows.
- Hard-coded hex, `bg-white`, `bg-black`, `text-zinc-500`, Tailwind's default palette, `dark:` variants.
- Em dashes in copy.
- Narrating the design: captions that explain why a layout was chosen.

## Use the published API

Install the package and import its stylesheet as the app's Tailwind entry; nothing else is needed.

```css
@import "@ovadev-gmbh/ui-internal/styles.css";
```

```tsx
import { Button, Dialog, DialogTrigger } from "@ovadev-gmbh/ui-internal";
```

Every colour, type style, material and layout token below is a Tailwind class in the app. Tailwind's own palette is cleared: `bg-zinc-500` does not exist, and that is the point.

### Semantic colours

Write with these. Each is a Tailwind colour (`bg-surface-hover`, `text-content-secondary`, `bg-status-danger/10`) and a custom property (`--int-surface-hover`).

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
| `surface-danger` | `red-100` | A destructive callout's fill. |
| `surface-success` | `green-100` | A success callout's fill. |
| `surface-warning` | `yellow-100` | A warning callout's fill. |
| `surface-info` | `blue-100` | An information callout's fill. |

**Content.** What is written and drawn.

| Token | Step | Use |
| --- | --- | --- |
| `content-primary` | `gray-1000` | Black. Headings, body, icons that matter. |
| `content-secondary` | `gray-700` | Descriptions, helper text, secondary icons. |
| `content-tertiary` | `gray-500` | Placeholders, timestamps, the least important line. |
| `content-inverse` | `background-100` | Text on black: white. |
| `content-brand` | `blue-800` | Links. |
| `content-disabled` | `gray-500` | Disabled labels and icons. |

**Brand.** The one colour that acts. For a tool it is the ink.

| Token | Step | Use |
| --- | --- | --- |
| `brand` | `gray-1000` | The primary button, the current item: black. |
| `brand-hover` | `gray-800` | The primary button under the pointer. |
| `brand-subtle` | `gray-200` | A tint behind a selected control. |
| `brand-bright` | `blue-800` | The focus ring and a live indicator: INTERN's blue. |

**Status.** Four meanings, four colours, each with a fill of its own.

| Token | Step | Use |
| --- | --- | --- |
| `status-danger` | `red-800` | Errors, destructive actions. |
| `status-success` | `green-800` | Done, confirmed, live. |
| `status-warning` | `yellow-700` | Pending, attention needed. |
| `status-info` | `blue-800` | Neutral information. |

**Stroke.** Lines. INTERN draws them in black; the soft one is for inside things.

| Token | Step | Use |
| --- | --- | --- |
| `divider` | `gray-300` | The soft line: between rows, inside a component. |
| `divider-strong` | `gray-1000` | The rule: an input's edge, a card's edge, a section's end. Black. |
| `divider-inverse` | `white-alpha-400` | A line on black. |

### Scales

Ten steps each, the same roles on every scale. Reach for a step (`bg-green-200`, `--int-gray-700`) only for an exact colour a semantic name does not cover.

| Steps | Role |
| --- | --- |
| 1, 2, 3 | Component backgrounds: The fills of UI components: 1 at rest, 2 on hover, 3 when active. |
| 4, 5, 6 | Borders: The strokes of UI components: 4 at rest, 5 on hover, 6 when active or focused. |
| 7, 8 | High contrast backgrounds: Solid fills that carry light text: 7 at rest, 8 on hover. |
| 9, 10 | Text and icons: The two ink levels: 9 secondary, 10 primary. Both pass 4.5:1 on either background. |

| Scale | Note | 700 |
| --- | --- | --- |
| `gray` | INTERN's neutrals, a touch warm in the middle: s, m, y, x sit at 3, 5, 7, 9. 10 is black. | `#57534e` |
| `gray-alpha` | Black at increasing opacity, for what must sit on either sheet. | `oklch(0 0 0 / 55%)` |
| `white-alpha` | White at increasing opacity, for what sits on black: strokes, translucent buttons. | `oklch(1 0 0 / 55%)` |
| `red` | Errors and destructive actions. 2 and 8 are INTERN's red-s and red-x. | `oklch(0.580 0.190 25)` |
| `green` | Success and live. 2 and 8 are INTERN's green-s and green-x. | `oklch(0.580 0.160 150)` |
| `blue` | Focus, links, information. 2 and 8 are INTERN's blue-s and blue-x. | `oklch(0.580 0.170 275)` |
| `yellow` | Warnings and pending. 2 and 7 are INTERN's yellow-s and yellow-x. | `#ca8a04` |

Backgrounds: `background-100` #ffffff (The sheet. White; the page and every element on it.) and `background-200` #fafafa (A quieter sheet: a panel, a sidebar, a well.)

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
| `material-base` | 2px | Everything at rest: cards, inputs, list containers. One black hairline. |
| `material-small` | 2px | The same rule; kept as a name so components read like Januna's. |
| `material-medium` | 2px | A card that invites a click: the rule, and a hard 2px offset. |
| `material-large` | 2px | The one thing on the page that must be found: a 4px offset. |

**Floating.** Above the page.

| Class | Radius | Use |
| --- | --- | --- |
| `material-tooltip` | 2px | Black, white text, no stem. |
| `material-menu` | 2px | Menus, popovers, comboboxes: the rule and a short lift. |
| `material-modal` | 4px | Dialogs and sheets. |
| `material-fullscreen` | 4px | Takeovers. |

**Tints.** The small material with a colour in its ring.

| Class | Radius | Use |
| --- | --- | --- |
| `material-accent` | 2px | A card in focus, the recommended row. |
| `material-active` | 2px | A selected card, a focused control. |
| `material-danger` | 2px | A card in error. |

**When to use.**

- Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.
- Base for almost everything. Medium and large only for the one object on a page that must be found first.
- Never stack two materials on one element; never add a border to one.

**Behaviour.**

- The rule is the edge. Nothing in Intern has a soft edge.
- Only what floats lifts, and it lifts little.

**Accessibility.**

- A material is chrome; semantics live on the wrapper.
- Selection is a fill and a word, never the ring alone.

### Layout

**Spacing.** The steps a layout is made of.

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--int-space-1` | `p-space-1 / gap-space-1` | `4px` | Inside a control: icon to label. |
| `--int-space-2` | `p-space-2 / gap-space-2` | `8px` | Between controls in a row. |
| `--int-space-3` | `p-space-3 / gap-space-3` | `12px` | A control's padding. |
| `--int-space-4` | `p-space-4 / gap-space-4` | `16px` | Inside a card. |
| `--int-space-6` | `p-space-6 / gap-space-6` | `24px` | Between cards; a dialog's padding. |
| `--int-space-8` | `p-space-8 / gap-space-8` | `32px` | Between sections of a page. |
| `--int-space-12` | `p-space-12 / gap-space-12` | `48px` | Between chapters of a page. |

**Radius.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--int-radius-small` | `rounded-small` | `0px` | Menu items, cells, chips inside things: square. |
| `--int-radius-regular` | `rounded-regular` | `2px` | Controls, cards, inputs. Enough to not look cut with scissors. |
| `--int-radius-large` | `rounded-large` | `2px` | Menus, larger cards. |
| `--int-radius-modal` | `rounded-modal` | `4px` | Dialogs and sheets. |
| `--int-radius-section` | `rounded-section` | `0px` | Sections and panels: square. |
| `--int-radius-pill` | `rounded-pill` | `9999px` | Status dots, avatars, switches. Nothing else. |

**Motion.**

| Token | Tailwind | Value | Use |
| --- | --- | --- | --- |
| `--int-ease-out` | `ease-brand` | `cubic-bezier(0.2, 0, 0, 1)` | Everything that moves: INTERN's ease, fast to start, done quickly. |
| `--int-duration-fast` | `duration-fast` | `120ms` | Hover, press, a colour change. |
| `--int-duration-base` | `duration-base` | `160ms` | A popover, a toggle, a row appearing. |
| `--int-duration-slow` | `duration-slow` | `240ms` | A dialog, a panel. |

- Default to stillness. A tool moves only to explain a state change.
- One easing, three durations, none longer than a quarter second.
- Respect prefers-reduced-motion: durations drop to zero, the state change stays.

### Components

65 components on Base UI. Each is documented with a live demo and its source at https://ovadev-gmbh.github.io/brand/internal/<slug>, and as Markdown at the same path with `.md`. The exported names are the parts you compose.

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
- Snippet (`snippet`): Snippet, SecretValue
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

### Icons

Phosphor. 1,500 icons, regular weight. 16px inside controls, 20px standalone. Every icon is exported as `Name` and `NameIcon`; use the `Icon` spelling. The full set: https://ovadev-gmbh.github.io/brand/internal/icons

```tsx
import { PlusIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";

<PlusIcon className="size-4" />
```


## Accessibility and reflow

Use landmarks, one `h1` per screen, ordered headings, native controls with visible labels, semantic tables with header cells, and the package's components, which carry their ARIA. Every state has a word or an icon beside its colour. Focus is visible on everything focusable, in tab order that follows reading order; a tool is driven from the keyboard more than a product is, so shortcuts are documented in `Kbd` where they exist. Contrast meets WCAG AA; the ink levels are published so that it does.

Reflow before shrinking: rows stack, tables scroll locally in their own container, controls keep their size, type keeps its style. Give grid and flex children `min-width: 0`. Never conceal overflow. A screen must work on a laptop and at a narrow width without a different design for each.
