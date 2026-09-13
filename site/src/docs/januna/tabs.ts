import type { Doc } from "../../types";

export default {
  description:
    "Views of one evening or one record that share a header: tonight's bookings, the waitlist, the floor. One panel shows at a time; for parts that can be open together, use [Accordion](/januna/accordion).",
  usage: `<Tabs defaultValue="bookings">
  <TabsList>
    <TabsTrigger value="bookings">Bookings</TabsTrigger>
    <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
  </TabsList>
  <TabsContent value="bookings">24 bookings tonight, 86 covers.</TabsContent>
  <TabsContent value="waitlist">4 parties waiting.</TabsContent>
</Tabs>`,
  composition: `Tabs
├── TabsList
│   └── TabsTrigger
└── TabsContent`,
  sections: [
    {
      title: "Line",
      text: '`variant="line"` on `TabsList` drops the taupe well and marks the current tab with a 2px rule in the brand green beneath it. It suits the tabs right under a page title.',
      example: "line",
    },
    {
      title: "Vertical",
      text: '`orientation="vertical"` on `Tabs` stacks the triggers in a column beside the panel, left-aligned and full width, for settings with more sections than fit in a row. The arrow keys follow the orientation.',
      example: "vertical",
    },
    {
      title: "Disabled",
      text: "`disabled` on a `TabsTrigger` dims it and it cannot be chosen. Point `defaultValue` at a tab that is enabled, and say elsewhere why the tab is closed.",
      example: "disabled",
    },
    {
      title: "With Icon",
      text: "An icon before the label is set at 16px, 6px from the words. Give every tab one or none.",
      example: "with-icon",
    },
    {
      title: "With Count",
      text: "A count after the label, in mono and the tertiary colour, says how much is behind a tab before it is opened.",
      example: "with-count",
    },
    {
      title: "With Table",
      text: "A panel usually holds the table its tab names. `Tabs` owns the 8px gap between the list and the panel; `TabsContent` only switches.",
      example: "table",
    },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` hand the state to you, so the current tab can live in the URL and survive a reload at the lectern.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Tabs",
      text: "The root. It lays the list above the panels, or beside them when vertical, with an 8px gap.",
      props: [["orientation", `"horizontal" | "vertical"`, `"horizontal"`]],
    },
    {
      name: "TabsList",
      text: "The row of triggers: 40px tall on the secondary surface, the current tab lifted onto the sheet with a hairline.",
      props: [["variant", `"default" | "line"`, `"default"`]],
    },
    {
      name: "TabsTrigger",
      text: "One tab in Button 14, tertiary until it is current or under the pointer.",
    },
    {
      name: "TabsContent",
      text: "The panel, in Copy 14. It takes the rest of the space beside a vertical list.",
    },
    {
      name: "tabsListVariants",
      text: "The list's classes as a function of `{ variant, className }`, for an element that is not a `TabsList`.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/tabs", api: "https://base-ui.com/react/components/tabs#api-reference" },
} satisfies Doc;
