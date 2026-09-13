import type { Doc } from "../../types";

export default {
  description:
    "Recharts, drawn in Januna's ink and greens: covers over a week, the room filling over an evening, how the takings split between shifts. When the manager needs the exact figure rather than the shape, use a [Table](/januna/table).",
  usage: `const config = {
  covers: { label: "Covers", color: "var(--chart-1)" },
} satisfies ChartConfig;

<ChartContainer config={config} className="max-h-56 w-full">
  <BarChart accessibilityLayer data={data}>
    <XAxis dataKey="day" tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="covers" fill="var(--color-covers)" radius={4} />
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
      text: "`config` names each data key and gives it a colour, which `ChartContainer` publishes as `--color-<key>`. Take colours from `--chart-1` to `--chart-5`: the bright green, the dark green, the taupe grey, blue and red. The first series is the bright green; keep red for a series that is a loss, such as no-shows.",
      code: `const config = {
  seated: { label: "Seated", color: "var(--chart-1)" },
  noShows: { label: "No-shows", color: "var(--chart-5)" },
} satisfies ChartConfig;

<Bar dataKey="noShows" fill="var(--color-noShows)" />`,
    },
    {
      title: "Bar Chart",
      text: "Give bars one `stackId` to stack them, so each column still reads as a total, and round only the top one with `radius`. The unit goes in the caption, not in every tick.",
      example: "bar",
    },
    {
      title: "Line Chart",
      text: 'A `Line` per series with `dot={false}` and `type="linear"`: the chart plots the counts it has, not a smoothed guess between them.',
      example: "line",
    },
    {
      title: "Area Chart",
      text: "An `Area` for one volume over time, its fill at a low `fillOpacity` so the grid stays readable through it.",
      example: "area",
    },
    {
      title: "Tooltip",
      text: '`ChartTooltipContent` lists every series at the pointer on `material-tooltip`, figures in `text-label-12-mono`. `indicator` sets the mark (`"dot"`, `"line"` or `"dashed"`), `labelFormatter` rewrites the heading, and `hideLabel` and `hideIndicator` remove parts. Figures are written in the browser\'s locale, so for CHF pass a `formatter`, which draws the whole row in place of the mark, name and value.',
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
      text: "Wraps the chart in Recharts' `ResponsiveContainer`, publishes the colours from `config` and draws ticks in the secondary ink, the grid and cursor in `divider`. It takes the `aspect-video` ratio unless a height is given.",
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
    { name: "ChartStyle", text: "The `<style>` that writes `--color-<key>` for one chart. `ChartContainer` renders it; use it only when drawing a chart without the container." },
  ],
  links: { lib: "Recharts", doc: "https://recharts.github.io/en-US/guide/", api: "https://recharts.github.io/en-US/api/" },
} satisfies Doc;
