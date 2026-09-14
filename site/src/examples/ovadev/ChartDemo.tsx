import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { month: "Apr", tickets: 1840 },
  { month: "May", tickets: 6120 },
  { month: "Jun", tickets: 18412 },
  { month: "Jul", tickets: 31907 },
  { month: "Aug", tickets: 27255 },
  { month: "Sep", tickets: 9380 },
];

const config = {
  tickets: { label: "Tickets", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartDemo() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">
        Tickets sold per month, Strandbad Türlersee, April to September 2026
      </figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="tickets" fill="var(--color-tickets)" />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
