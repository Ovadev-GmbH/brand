import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";

const data = [
  { day: "Mon", lunch: 38, dinner: 48 },
  { day: "Tue", lunch: 41, dinner: 51 },
  { day: "Wed", lunch: 46, dinner: 72 },
  { day: "Thu", lunch: 44, dinner: 90 },
  { day: "Fri", lunch: 58, dinner: 138 },
  { day: "Sat", lunch: 64, dinner: 150 },
  { day: "Sun", lunch: 96, dinner: 56 },
];

const config = {
  dinner: { label: "Dinner", color: "var(--chart-1)" },
  lunch: { label: "Lunch", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartBar() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Covers per shift, week 37</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} width={32} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="dinner" stackId="shift" fill="var(--color-dinner)" />
          <Bar dataKey="lunch" stackId="shift" fill="var(--color-lunch)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
