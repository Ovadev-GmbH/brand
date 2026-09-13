import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@ovadev-gmbh/ui-internal";
import type { ChartConfig } from "@ovadev-gmbh/ui-internal";

const data = [
  { month: "Apr", acme: 1.18, bergwerk: 0.42, helvetia: 0.31 },
  { month: "May", acme: 1.24, bergwerk: 0.47, helvetia: 0.36 },
  { month: "Jun", acme: 1.2, bergwerk: 0.55, helvetia: 0.44 },
  { month: "Jul", acme: 1.39, bergwerk: 0.61, helvetia: 0.52 },
  { month: "Aug", acme: 1.51, bergwerk: 0.66, helvetia: 0.58 },
];

const config = {
  acme: { label: "acme-logistics", color: "var(--chart-1)" },
  bergwerk: { label: "bergwerk-ag", color: "var(--chart-2)" },
  helvetia: { label: "helvetia-labs", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartLegendExample() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">API requests per tenant, millions, 2026</figcaption>
      <ChartContainer config={config} className="max-h-64 w-full">
        <LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
          <Line dataKey="acme" type="linear" stroke="var(--color-acme)" strokeWidth={2} dot={false} />
          <Line dataKey="bergwerk" type="linear" stroke="var(--color-bergwerk)" strokeWidth={2} dot={false} />
          <Line dataKey="helvetia" type="linear" stroke="var(--color-helvetia)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </figure>
  );
}
