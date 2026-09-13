import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";

const data = [
  { night: "Mon", covers: 74 },
  { night: "Tue", covers: 81 },
  { night: "Wed", covers: 109 },
  { night: "Thu", covers: 126 },
  { night: "Fri", covers: 188 },
  { night: "Sat", covers: 205 },
  { night: "Sun", covers: 143 },
];

const config = {
  covers: { label: "Covers", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartDemo() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Covers per night, 7 to 13 September</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="night" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="covers" fill="var(--color-covers)" radius={4} />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
