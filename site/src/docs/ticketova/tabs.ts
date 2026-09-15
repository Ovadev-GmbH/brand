import type { Doc } from "../../types";

export default {
  description:
    "Views of one record that share a header: a tenant's overview, invoices and API keys. One panel shows at a time; for sections that can be open together, use [Accordion](/ticketova/accordion).",
  usage: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="invoices">Invoices</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Scale plan, 42 seats, ch-zrh-1.</TabsContent>
  <TabsContent value="invoices">3 open invoices, CHF 1'679.00.</TabsContent>
</Tabs>`,
  composition: `Tabs
├── TabsList
│   └── TabsTrigger
└── TabsContent`,
  sections: [
    {
      title: "Line",
      text: '`variant="line"` on `TabsList` drops the grey well and marks the current tab with a black rule beneath it. It suits the tabs right under a page title.',
      example: "line",
    },
    {
      title: "Vertical",
      text: '`orientation="vertical"` on `Tabs` stacks the triggers in a column beside the panel, for settings with more sections than fit in a row. The arrow keys follow the orientation.',
      example: "vertical",
    },
    {
      title: "Disabled",
      text: "`disabled` on a `TabsTrigger` dims it and it cannot be chosen. Point `defaultValue` at a tab that is enabled.",
      example: "disabled",
    },
    {
      title: "With Icon",
      text: 'Mark the icon `data-icon="inline-start"`; the trigger trims its padding on that side so the label stays centred.',
      example: "with-icon",
    },
    {
      title: "With Count",
      text: "A count after the label, in mono and the tertiary colour, says how much is behind a tab before it is opened.",
      example: "with-count",
    },
    {
      title: "With Table",
      text: "A panel usually holds the table its tab names. `Tabs` owns the gap between the list and the panel; `TabsContent` only switches.",
      example: "table",
    },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` hand the state to you, so the current tab can live in the URL and survive a reload.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Tabs",
      text: "The root. It lays the list above the panels, or beside them when vertical.",
      props: [["orientation", `"horizontal" | "vertical"`, `"horizontal"`]],
    },
    {
      name: "TabsList",
      text: "The row of triggers.",
      props: [["variant", `"default" | "line"`, `"default"`]],
    },
    {
      name: "tabsListVariants",
      text: "The list's classes as a function of `{ variant, className }`, for an element that is not a `TabsList`.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/tabs", api: "https://base-ui.com/react/components/tabs#api-reference" },
} satisfies Doc;
