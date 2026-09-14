import type { Doc } from "../../types";

export default {
  description:
    "Panels that share a group, with a handle between them the editor drags to change their split: a list beside its record, a console over its log.",
  usage: `<ResizablePanelGroup orientation="horizontal" className="h-64 material-base">
  <ResizablePanel defaultSize="35">Posts</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize="65">Season opening at Türlersee</ResizablePanel>
</ResizablePanelGroup>`,
  composition: `ResizablePanelGroup
├── ResizablePanel
├── ResizableHandle
└── ResizablePanel`,
  sections: [
    {
      title: "Vertical",
      text: '`orientation="vertical"` on `ResizablePanelGroup` stacks the panels, and the handle runs across the group.',
      example: "vertical",
    },
    {
      title: "Handle",
      text: "`withHandle` on `ResizableHandle` draws a grip on the rule, so the drag target can be seen before the pointer finds it.",
      example: "handle",
    },
    {
      title: "Size Limits",
      text: "`minSize` and `maxSize` stop the handle at a limit. A string without a unit is a percentage of the group and a number is pixels, so a column can keep 180px however wide the page is.",
      example: "size-limits",
    },
    {
      title: "Collapsible",
      text: "A `collapsible` panel dragged below its `minSize` snaps to `collapsedSize`. Read the size in `onResize` to switch the panel to its narrow form.",
      example: "collapsible",
    },
    {
      title: "Saving the Layout",
      text: "`onLayoutChange` reports each panel's percentage, keyed by its `id`, as the handle moves; `onLayoutChanged` fires once on release, the moment to save it. Hand the saved object back as `defaultLayout`.",
      example: "saving-layout",
    },
  ],
  api: [
    {
      name: "ResizablePanelGroup",
      text: 'react-resizable-panels\' `Group`, filling its container. `orientation` is `"horizontal"` unless set.',
    },
    {
      name: "ResizablePanel",
      text: "A `Panel`. Its `className` and `style` land on the element inside, where the content is.",
    },
    {
      name: "ResizableHandle",
      text: "A `Separator` drawn as a 1px rule. It takes focus, and the arrow keys move it.",
      props: [["withHandle", "boolean", "false"]],
    },
  ],
  links: {
    lib: "react-resizable-panels",
    doc: "https://react-resizable-panels.vercel.app/",
    api: "https://github.com/bvaughn/react-resizable-panels#readme",
  },
} satisfies Doc;
