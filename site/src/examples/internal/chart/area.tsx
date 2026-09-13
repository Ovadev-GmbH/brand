import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-internal";
import type { ChartConfig } from "@ovadev-gmbh/ui-internal";

const data = [
  { day: "09-07", requests: 38210 },
  { day: "09-08", requests: 51940 },
  { day: "09-09", requests: 54102 },
  { day: "09-10", requests: 49876 },
  { day: "09-11", requests: 57330 },
  { day: "09-12", requests: 22415 },
  { day: "09-13", requests: 19870 },
];

const config = {
  requests: { label: "Requests", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartArea() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">API requests per day, acme-logistics, 2026</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <AreaChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="requests"
            type="linear"
            stroke="var(--color-requests)"
            strokeWidth={2}
            fill="var(--color-requests)"
            fillOpacity={0.08}
          />
        </AreaChart>
      </ChartContainer>
    </figure>
  );
}
