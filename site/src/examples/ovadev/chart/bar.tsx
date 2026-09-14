import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { month: "Apr", single: 1470, day: 8240, season: 21600 },
  { month: "May", single: 4520, day: 12610, season: 31600 },
  { month: "Jun", single: 26610, day: 41030, season: 24300 },
  { month: "Jul", single: 48580, day: 69390, season: 4300 },
  { month: "Aug", single: 41660, day: 58800, season: 2000 },
  { month: "Sep", single: 12710, day: 16150, season: 700 },
];

const config = {
  season: { label: "Season pass", color: "var(--chart-1)" },
  day: { label: "Day ticket", color: "var(--chart-2)" },
  single: { label: "Single entry", color: "var(--chart-3)" },
} satisfies ChartConfig;

const chf = new Intl.NumberFormat("de-CH");

export default function ChartBar() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Revenue per ticket type, CHF, Strandbad Türlersee, April to September 2026</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} width={56} tickFormatter={(value: number) => chf.format(value)} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="season" stackId="type" fill="var(--color-season)" />
          <Bar dataKey="day" stackId="type" fill="var(--color-day)" />
          <Bar dataKey="single" stackId="type" fill="var(--color-single)" />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
