import type { Doc } from "../../types";

export default {
  description:
    "Recharts, drawn in the system's ink: a trend over time, or how a total splits. When the reader needs the exact figure rather than the shape, use a [Table](/ovadev/table).",
  usage: `const config = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
} satisfies ChartConfig;

<ChartContainer config={config} className="max-h-56 w-full">
  <BarChart accessibilityLayer data={data}>
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="visitors" fill="var(--color-visitors)" />
  </BarChart>
</ChartContainer>`,
  composition: `ChartContainer
└── BarChart, LineChart, AreaChart (Recharts)
    ├── CartesianGrid, XAxis, YAxis
    ├── ChartTooltip
    │   └── ChartTooltipContent
    ├── ChartLegend
    │   └── ChartLegendContent
    └── Bar, Line, Area`,
  sections: [
    {
      title: "Chart Config",
      text: "`config` names each data key and gives it a colour, which `ChartContainer` publishes as `--color-<key>`. Take colours from `--chart-1` to `--chart-5`: the ink, the red, then three steps of grey. Keep the red for the one series that is a state.",
      code: `const config = {
  delivered: { label: "Delivered", color: "var(--chart-1)" },
  bounced: { label: "Bounced", color: "var(--chart-2)" },
} satisfies ChartConfig;

<Bar dataKey="bounced" fill="var(--color-bounced)" />`,
    },
    {
      title: "Bar Chart",
      text: "Give bars one `stackId` to stack them, so each column still reads as a total. The unit goes in the caption, not in every tick.",
      example: "bar",
    },
    {
      title: "Line Chart",
      text: 'A `Line` per series with `dot={false}` and `type="linear"`: the chart plots the measurements it has, not a smoothed guess between them.',
      example: "line",
    },
    {
      title: "Area Chart",
      text: "An `Area` for one volume over time, its fill at a low `fillOpacity` so the grid stays readable through it.",
      example: "area",
    },
    {
      title: "Tooltip",
      text: '`ChartTooltipContent` lists every series at the pointer. `indicator` sets the mark (`"dot"`, `"line"` or `"dashed"`), `labelFormatter` rewrites the heading, and `hideLabel` and `hideIndicator` remove parts.',
      example: "tooltip",
    },
    {
      title: "Legend",
      text: '`ChartLegendContent` writes the labels from `config` beside a swatch. `verticalAlign="top"` on `ChartLegend` moves it above the plot.',
      example: "legend",
    },
    {
      title: "Accessibility",
      text: "`accessibilityLayer` on the chart lets the arrow keys move between points and announces their values. Colour is never the only key: every series has a label, and the figures a decision depends on belong in a table beside the chart.",
    },
  ],
  api: [
    {
      name: "ChartContainer",
      text: "Wraps the chart in Recharts' `ResponsiveContainer`, sets its colours from `config` and restyles axes, grid and cursor to the system. It takes the `aspect-video` ratio unless a height is given.",
      props: [
        ["config", "ChartConfig", "–"],
        ["initialDimension", "{ width: number; height: number }", "{ width: 320, height: 200 }"],
      ],
    },
    {
      name: "ChartTooltipContent",
      text: "The body of a tooltip, passed as `content` to `ChartTooltip`, which is Recharts' `Tooltip`.",
      props: [
        ["indicator", `"dot" | "line" | "dashed"`, `"dot"`],
        ["hideLabel", "boolean", "false"],
        ["hideIndicator", "boolean", "false"],
        ["labelKey", "string", "–"],
        ["nameKey", "string", "–"],
      ],
    },
    {
      name: "ChartLegendContent",
      text: "The body of a legend, passed as `content` to `ChartLegend`, which is Recharts' `Legend`.",
      props: [
        ["hideIcon", "boolean", "false"],
        ["nameKey", "string", "–"],
      ],
    },
    { name: "ChartConfig", text: "The type of `config`: per data key a `label`, an optional `icon`, and a `color`." },
  ],
  links: { lib: "Recharts", doc: "https://recharts.github.io/en-US/guide/", api: "https://recharts.github.io/en-US/api/" },
} satisfies Doc;
