import type { Doc } from "../../types";

export default {
  description:
    "A search box over a list of records and commands, filtered as you type and worked with the arrow keys: the ⌘K palette of a tool. To choose a value inside a form, use [Combobox](/ticketova/combobox).",
  usage: `<Command className="w-96">
  <CommandInput placeholder="Search tenants" />
  <CommandList>
    <CommandEmpty>No tenant matches.</CommandEmpty>
    <CommandGroup heading="Tenants">
      <CommandItem>acme-logistics</CommandItem>
      <CommandItem>bergwerk-ag</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
  composition: `Command
├── CommandInput
└── CommandList
    ├── CommandEmpty
    ├── CommandGroup
    │   └── CommandItem
    │       └── CommandShortcut
    ├── CommandSeparator
    └── CommandGroup
        └── CommandItem`,
  sections: [
    {
      title: "Dialog",
      text: "`CommandDialog` puts a `Command` in a dialog a third of the way down the screen. Open it with `open` and `onOpenChange` from a button and from ⌘K.",
      example: "dialog",
    },
    {
      title: "Groups",
      text: "`CommandGroup` with a `heading` for each kind of result, and `CommandSeparator` between groups. A group whose items are all filtered out hides with them.",
      example: "groups",
    },
    {
      title: "Shortcuts",
      text: "`CommandShortcut` shows a key at the end of the item, in mono. It only shows the key; bind it yourself.",
      example: "shortcuts",
    },
    {
      title: "Keywords",
      text: "The filter matches an item's `value`, which is its text unless you set one. `keywords` adds words it should also match, such as a tenant's ID.",
      example: "keywords",
    },
    {
      title: "Checked",
      text: "`data-checked` on a `CommandItem` shows a check at the end of the row, for the current choice. An item with a `CommandShortcut` has no room for it.",
      example: "checked",
    },
    { title: "Disabled", text: "`disabled` on a `CommandItem` dims it and the arrow keys pass over it.", example: "disabled" },
    {
      title: "Scrollable",
      text: "`CommandList` stops at 288px and scrolls, keeping the highlighted item in view as the arrow keys move.",
      example: "scrollable",
    },
    {
      title: "Server Search",
      text: "When the results come from a request, `shouldFilter={false}` on `Command` shows the items as you render them, and `value` and `onValueChange` on `CommandInput` hand you the query.",
      example: "server-search",
    },
  ],
  api: [
    {
      name: "Command",
      text: "cmdk's root on the menu material. It filters and sorts the items by what is typed and takes cmdk's props, among them `filter`, `shouldFilter` and `loop`.",
    },
    {
      name: "CommandDialog",
      text: "A `Dialog` holding the palette, with the Dialog's `open` and `onOpenChange`. `title` and `description` are read only by screen readers.",
      props: [
        ["title", "string", `"Command Palette"`],
        ["description", "string", `"Search for a command to run..."`],
        ["showCloseButton", "boolean", "false"],
      ],
    },
    {
      name: "CommandItem",
      text: "One row. `onSelect` runs on a click and on Enter, with the item's `value`.",
    },
  ],
  links: { doc: "https://github.com/pacocoursey/cmdk", api: "https://github.com/pacocoursey/cmdk#parts-and-styling", lib: "cmdk" },
} satisfies Doc;
