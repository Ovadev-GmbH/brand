import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";

const data = [
  { day: "Mon", thisWeek: 86, lastWeek: 79 },
  { day: "Tue", thisWeek: 92, lastWeek: 88 },
  { day: "Wed", thisWeek: 118, lastWeek: 101 },
  { day: "Thu", thisWeek: 134, lastWeek: 127 },
  { day: "Fri", thisWeek: 196, lastWeek: 181 },
  { day: "Sat", thisWeek: 214, lastWeek: 222 },
  { day: "Sun", thisWeek: 152, lastWeek: 140 },
];

const config = {
  thisWeek: { label: "Week 37", color: "var(--chart-1)" },
  lastWeek: { label: "Week 36", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartLine() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Covers per night, this week against last week</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <LineChart accessibilityLayer data={data} margin={{ left: 4, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} width={32} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line dataKey="thisWeek" type="linear" stroke="var(--color-thisWeek)" strokeWidth={2} dot={false} />
          <Line dataKey="lastWeek" type="linear" stroke="var(--color-lastWeek)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </figure>
  );
}
