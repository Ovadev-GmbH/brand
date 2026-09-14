import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { hour: "00:00", zrh: 82, fra: 108 },
  { hour: "04:00", zrh: 79, fra: 104 },
  { hour: "08:00", zrh: 96, fra: 131 },
  { hour: "12:00", zrh: 118, fra: 156 },
  { hour: "16:00", zrh: 104, fra: 142 },
  { hour: "20:00", zrh: 91, fra: 120 },
];

const config = {
  zrh: { label: "ch-zrh-1", color: "var(--chart-1)" },
  fra: { label: "eu-central-1", color: "var(--chart-2)" },
} satisfies ChartConfig;

export default function ChartLine() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">p95 latency of api-gateway, ms, 2026-09-13 UTC</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <LineChart accessibilityLayer data={data} margin={{ left: 4, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} width={32} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line dataKey="zrh" type="linear" stroke="var(--color-zrh)" strokeWidth={2} dot={false} />
          <Line dataKey="fra" type="linear" stroke="var(--color-fra)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </figure>
  );
}
