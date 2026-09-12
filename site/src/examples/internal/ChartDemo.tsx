import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@ovadev-gmbh/ui-internal";
import type { ChartConfig } from "@ovadev-gmbh/ui-internal";

const data = [
  { day: "Mon", succeeded: 42, rolledBack: 2 },
  { day: "Tue", succeeded: 58, rolledBack: 1 },
  { day: "Wed", succeeded: 61, rolledBack: 4 },
  { day: "Thu", succeeded: 47, rolledBack: 0 },
  { day: "Fri", succeeded: 73, rolledBack: 3 },
  { day: "Sat", succeeded: 12, rolledBack: 0 },
  { day: "Sun", succeeded: 9, rolledBack: 1 },
];

const config = {
  succeeded: { label: "Deployed", color: "var(--chart-1)" },
  rolledBack: { label: "Rolled back", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartDemo() {
  return (
    <ChartContainer config={config} className="max-h-56 w-full max-w-xl">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} tickMargin={8} axisLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="succeeded" fill="var(--color-succeeded)" radius={0} />
        <Bar dataKey="rolledBack" fill="var(--color-rolledBack)" radius={0} />
      </BarChart>
    </ChartContainer>
  );
}
