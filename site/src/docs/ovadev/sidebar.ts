import type { Doc } from "../../types";

export default {
  description:
    "The navigation column of the site's admin: its sections, their pages and counts, collapsing to icons or off the edge. For a few views of one record, use [Tabs](/ovadev/tabs).",
  usage: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Site</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>Pages</SidebarMenuButton>
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
      text: '`variant` on `Sidebar`: `"sidebar"` sits against the edge behind a rule, `"floating"` stands off it with its own edge, and `"inset"` turns `SidebarInset` into a sheet on the sidebar\'s surface.',
      example: "variant",
    },
    {
      title: "Collapsible",
      text: '`collapsible` decides what closing does: `"offcanvas"` slides the sidebar out, `"icon"` shrinks it to its icons with each button\'s `tooltip` as its label, `"none"` keeps it open. `SidebarTrigger`, `SidebarRail` and ⌘B or Ctrl+B toggle it.',
      example: "collapsible",
    },
    {
      title: "Header",
      text: "`SidebarHeader` stays above the scrolling content: the place for what the whole admin is looking at, here the language, chosen from a `DropdownMenu` on a large `SidebarMenuButton`.",
      example: "header",
    },
    {
      title: "Search",
      text: "`SidebarInput` is an `Input` sized for the sidebar. In the header it filters the menu below it; say so when nothing matches.",
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
      text: "`SidebarMenuSub` indents a page's children under a rule. `SidebarMenuSubButton` renders an `<a>`; pass `render` for a button, and `isActive` on the current page.",
      example: "submenu",
    },
    {
      title: "Loading",
      text: "While the menu's items are on their way, `SidebarMenuSkeleton` holds their place, with `showIcon` where the items carry one.",
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
      text: "Below 768px the sidebar leaves the layout and opens as a [Sheet](/ovadev/sheet) from its `side` when `SidebarTrigger` is pressed. `useSidebar` reports this as `isMobile`, with `openMobile` as its own state.",
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
      text: "Holds the open state for everything inside it and toggles it on ⌘B or Ctrl+B. It writes the state to the `sidebar_state` cookie, so a server can render the next page the same way.",
      props: [
        ["defaultOpen", "boolean", "true"],
        ["open", "boolean", "–"],
        ["onOpenChange", "(open: boolean) => void", "–"],
      ],
    },
    {
      name: "Sidebar",
      text: 'The column. With `collapsible="none"` it is a plain `<div>` in the flow; otherwise it is fixed to the viewport\'s edge beside a gap that holds its place.',
      props: [
        ["side", `"left" | "right"`, `"left"`],
        ["variant", `"sidebar" | "floating" | "inset"`, `"sidebar"`],
        ["collapsible", `"offcanvas" | "icon" | "none"`, `"offcanvas"`],
      ],
    },
    {
      name: "SidebarMenuButton",
      text: "A `<button>` unless given `render`. `tooltip` shows only while the sidebar is collapsed to icons.",
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
      text: "An `<a>` unless given `render`.",
      props: [
        ["size", `"sm" | "md"`, `"md"`],
        ["isActive", "boolean", "false"],
      ],
    },
    {
      name: "SidebarMenuSkeleton",
      text: "A placeholder row with a text bar of random width.",
      props: [["showIcon", "boolean", "false"]],
    },
    {
      name: "SidebarInset",
      text: 'The `<main>` beside the sidebar. With `variant="inset"` it takes a margin and an edge.',
    },
    {
      name: "SidebarTrigger",
      text: "A ghost icon `Button` that toggles the sidebar, after running its own `onClick`.",
    },
    {
      name: "useSidebar",
      text: 'Returns `state` (`"expanded"` or `"collapsed"`), `open`, `setOpen`, `openMobile`, `setOpenMobile`, `isMobile` and `toggleSidebar`. It throws outside a `SidebarProvider`.',
    },
  ],
} satisfies Doc;
