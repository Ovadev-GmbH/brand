import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-internal";
import type { ChartConfig } from "@ovadev-gmbh/ui-internal";

const data = [
  { day: "Mon", date: "2026-09-07", production: 14, staging: 31 },
  { day: "Tue", date: "2026-09-08", production: 9, staging: 27 },
  { day: "Wed", date: "2026-09-09", production: 17, staging: 40 },
  { day: "Thu", date: "2026-09-10", production: 12, staging: 22 },
  { day: "Fri", date: "2026-09-11", production: 6, staging: 18 },
];

const config = {
  production: { label: "Production", color: "var(--chart-1)" },
  staging: { label: "Staging", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartTooltipExample() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Deployments per environment, week 37</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                indicator="line"
                labelFormatter={(_, payload) => payload[0]?.payload.date}
              />
            }
          />
          <Bar dataKey="production" fill="var(--color-production)" />
          <Bar dataKey="staging" fill="var(--color-staging)" />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
