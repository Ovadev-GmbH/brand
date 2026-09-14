import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { month: "Apr", turlersee: 1.8, baar: 4.2, enge: 3.1 },
  { month: "May", turlersee: 6.1, baar: 4.7, enge: 9.6 },
  { month: "Jun", turlersee: 18.4, baar: 3.5, enge: 24.4 },
  { month: "Jul", turlersee: 31.9, baar: 2.1, enge: 38.2 },
  { month: "Aug", turlersee: 27.3, baar: 2.6, enge: 33.8 },
];

const config = {
  turlersee: { label: "Strandbad Türlersee", color: "var(--chart-1)" },
  baar: { label: "Hallenbad Baar", color: "var(--chart-2)" },
  enge: { label: "Seebad Enge", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartLegendExample() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Tickets sold per pool, thousands, 2026</figcaption>
      <ChartContainer config={config} className="max-h-64 w-full">
        <LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
          <Line dataKey="turlersee" type="linear" stroke="var(--color-turlersee)" strokeWidth={2} dot={false} />
          <Line dataKey="baar" type="linear" stroke="var(--color-baar)" strokeWidth={2} dot={false} />
          <Line dataKey="enge" type="linear" stroke="var(--color-enge)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </figure>
  );
}
