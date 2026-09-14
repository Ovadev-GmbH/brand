import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { day: "09-07", readers: 382 },
  { day: "09-08", readers: 2194 },
  { day: "09-09", readers: 1541 },
  { day: "09-10", readers: 987 },
  { day: "09-11", readers: 733 },
  { day: "09-12", readers: 415 },
  { day: "09-13", readers: 298 },
];

const config = {
  readers: { label: "Readers", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartArea() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Blog readers per day, ova.dev, week of the Türlersee post, 2026</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <AreaChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="readers"
            type="linear"
            stroke="var(--color-readers)"
            strokeWidth={2}
            fill="var(--color-readers)"
            fillOpacity={0.08}
          />
        </AreaChart>
      </ChartContainer>
    </figure>
  );
}
