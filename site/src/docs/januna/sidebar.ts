import type { Doc } from "../../types";

export default {
  description:
    "The navigation column of a Januna screen, on the taupe island: its sections, their pages and counts, collapsing to icons or off the edge. For a few views of one booking, use [Tabs](/januna/tabs).",
  usage: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Tonight</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>Bookings</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
  </SidebarInset>
</SidebarProvider>`,
  composition: `SidebarProvider
├── Sidebar
│   ├── SidebarHeader
│   ├── SidebarContent
│   │   └── SidebarGroup
│   │       ├── SidebarGroupLabel
│   │       ├── SidebarGroupAction
│   │       └── SidebarGroupContent
│   │           └── SidebarMenu
│   │               └── SidebarMenuItem
│   │                   ├── SidebarMenuButton
│   │                   ├── SidebarMenuAction
│   │                   ├── SidebarMenuBadge
│   │                   └── SidebarMenuSub
│   │                       └── SidebarMenuSubItem
│   │                           └── SidebarMenuSubButton
│   ├── SidebarFooter
│   └── SidebarRail
└── SidebarInset
    └── SidebarTrigger`,
  sections: [
    {
      title: "Variant",
      text: '`variant` on `Sidebar`: `"sidebar"` sits against the edge behind a rule in `divider`, `"floating"` stands off it with 16px corners and a medium lift, and `"inset"` puts the whole screen on the island and lifts `SidebarInset` from it as the white sheet.',
      example: "variant",
    },
    {
      title: "Collapsible",
      text: '`collapsible` decides what closing does: `"offcanvas"` slides the sidebar out, `"icon"` shrinks it to its icons with each button\'s `tooltip` as its label, `"none"` keeps it open. `SidebarTrigger`, `SidebarRail` and ⌘B or Ctrl+B toggle it.',
      example: "collapsible",
    },
    {
      title: "Header",
      text: "`SidebarHeader` stays above the scrolling content: the place for what the whole screen is looking at, here the manager's restaurant, chosen from a `DropdownMenu` on a large `SidebarMenuButton`.",
      example: "header",
    },
    {
      title: "Search",
      text: "`SidebarInput` is a 40px `Input` on a shade of the island. In the header it filters the menu below it; say so in words when nothing matches.",
      example: "search",
    },
    {
      title: "Group Action",
      text: "`SidebarGroupAction` puts one icon button at the end of a group's label, for the action that adds to the group. Give it an `aria-label`.",
      example: "group-action",
    },
    {
      title: "Collapsible Group",
      text: "Wrap a `SidebarGroup` in a `Collapsible` and render its `SidebarGroupLabel` as the `CollapsibleTrigger`, so a section can be folded away.",
      example: "collapsible-group",
    },
    {
      title: "Menu Action",
      text: "`SidebarMenuAction` sits at the end of a menu item, usually as the trigger of a `DropdownMenu`. `showOnHover` hides it until the item is hovered or focused.",
      example: "menu-action",
    },
    {
      title: "Submenu",
      text: "`SidebarMenuSub` indents a page's children under a rule in `divider`. `SidebarMenuSubButton` renders an `<a>`; pass `render` for a button, and `isActive` on the current page.",
      example: "submenu",
    },
    {
      title: "Loading",
      text: "While the menu's items are on their way, `SidebarMenuSkeleton` holds their place at the same 40px, with `showIcon` where the items carry one. Mark the menu `aria-busy` meanwhile.",
      example: "loading",
    },
    {
      title: "Width",
      text: "The sidebar is 16rem wide, 3rem as icons and 18rem as a sheet. Set `--sidebar-width` and `--sidebar-width-icon` in the `style` of `SidebarProvider` to change the first two.",
      code: `<SidebarProvider
  style={{ "--sidebar-width": "20rem", "--sidebar-width-icon": "3.5rem" } as React.CSSProperties}
>`,
    },
    {
      title: "Mobile",
      text: "Below 768px, on a guest's phone or a narrow tablet, the sidebar leaves the layout and opens as a [Sheet](/januna/sheet) from its `side` when `SidebarTrigger` is pressed. `useSidebar` reports this as `isMobile`, with `openMobile` as its own state.",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` on `SidebarProvider` hand the state to you, for a sidebar that follows a setting. Anything inside the provider can read it with `useSidebar`.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "SidebarProvider",
      text: "Holds the open state for everything inside it and toggles it on ⌘B or Ctrl+B. It writes the state to the `sidebar_state` cookie for a week, so a server can render the next page the same way. It is `min-h-svh` unless its `className` says otherwise.",
      props: [
        ["defaultOpen", "boolean", "true"],
        ["open", "boolean", "–"],
        ["onOpenChange", "(open: boolean) => void", "–"],
      ],
    },
    {
      name: "Sidebar",
      text: 'The column, on `surface-tertiary`. With `collapsible="none"` it is a plain `<div>` in the flow; otherwise it is fixed to the viewport\'s edge beside a gap that holds its place.',
      props: [
        ["side", `"left" | "right"`, `"left"`],
        ["variant", `"sidebar" | "floating" | "inset"`, `"sidebar"`],
        ["collapsible", `"offcanvas" | "icon" | "none"`, `"offcanvas"`],
      ],
    },
    {
      name: "SidebarMenuButton",
      text: "A `<button>` unless given `render`, 40px tall in `text-label-14`; `sm` is 32px in `text-label-12` and `lg` 48px. `isActive` shades it with `surface-active`, never the green. `tooltip` shows only while the sidebar is collapsed to icons.",
      props: [
        ["isActive", "boolean", "false"],
        ["variant", `"default" | "outline"`, `"default"`],
        ["size", `"default" | "sm" | "lg"`, `"default"`],
        ["tooltip", "string | TooltipContent props", "–"],
      ],
    },
    {
      name: "SidebarMenuAction",
      text: "A `<button>` at the end of a menu item.",
      props: [["showOnHover", "boolean", "false"]],
    },
    {
      name: "SidebarMenuSubButton",
      text: "An `<a>` unless given `render`, 32px tall.",
      props: [
        ["size", `"sm" | "md"`, `"md"`],
        ["isActive", "boolean", "false"],
      ],
    },
    {
      name: "SidebarMenuSkeleton",
      text: "A 40px placeholder row with a text bar of random width.",
      props: [["showIcon", "boolean", "false"]],
    },
    {
      name: "SidebarInset",
      text: 'The `<main>` beside the sidebar, on `surface-primary`. With `variant="inset"` it takes a margin, 16px corners and a small lift.',
    },
    {
      name: "SidebarTrigger",
      text: "A ghost icon `Button` at 32px that toggles the sidebar, after running its own `onClick`.",
    },
    {
      name: "useSidebar",
      text: 'Returns `state` (`"expanded"` or `"collapsed"`), `open`, `setOpen`, `openMobile`, `setOpenMobile`, `isMobile` and `toggleSidebar`. It throws outside a `SidebarProvider`.',
    },
  ],
} satisfies Doc;
