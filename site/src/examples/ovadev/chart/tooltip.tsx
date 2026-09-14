import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { day: "Mon", date: "2026-09-07", online: 214, gate: 131 },
  { day: "Tue", date: "2026-09-08", online: 189, gate: 127 },
  { day: "Wed", date: "2026-09-09", online: 317, gate: 240 },
  { day: "Thu", date: "2026-09-10", online: 162, gate: 122 },
  { day: "Fri", date: "2026-09-11", online: 96, gate: 118 },
];

const config = {
  online: { label: "Online shop", color: "var(--chart-1)" },
  gate: { label: "At the gate", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartTooltipExample() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Tickets sold per channel, Hallenbad Baar, week 37</figcaption>
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
          <Bar dataKey="online" fill="var(--color-online)" />
          <Bar dataKey="gate" fill="var(--color-gate)" />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
