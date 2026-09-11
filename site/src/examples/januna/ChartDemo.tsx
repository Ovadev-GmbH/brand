import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";

const data = [
  { day: "Mon", covers: 86, noShows: 4 },
  { day: "Tue", covers: 92, noShows: 3 },
  { day: "Wed", covers: 118, noShows: 6 },
  { day: "Thu", covers: 134, noShows: 5 },
  { day: "Fri", covers: 196, noShows: 11 },
  { day: "Sat", covers: 214, noShows: 9 },
  { day: "Sun", covers: 152, noShows: 7 },
];

const config = {
  covers: { label: "Covers", color: "var(--chart-1)" },
  noShows: { label: "No-shows", color: "var(--chart-2)" },
} satisfies ChartConfig;

export default function ChartDemo() {
  return (
    <div className="w-full max-w-xl">
      <ChartContainer config={config} className="max-h-64 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} tickMargin={8} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="covers" fill="var(--color-covers)" radius={4} />
          <Bar dataKey="noShows" fill="var(--color-noShows)" radius={4} />
        </BarChart>
      </ChartContainer>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Covers served and no-shows per day, last week.
      </p>
    </div>
  );
}
