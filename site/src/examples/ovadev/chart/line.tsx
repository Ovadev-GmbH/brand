import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { hour: "08:00", gate1: 12, gate2: 8 },
  { hour: "10:00", gate1: 84, gate2: 61 },
  { hour: "12:00", gate1: 138, gate2: 96 },
  { hour: "14:00", gate1: 171, gate2: 132 },
  { hour: "16:00", gate1: 104, gate2: 88 },
  { hour: "18:00", gate1: 41, gate2: 27 },
];

const config = {
  gate1: { label: "Gate 1", color: "var(--chart-1)" },
  gate2: { label: "Gate 2", color: "var(--chart-2)" },
} satisfies ChartConfig;

export default function ChartLine() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Admissions per hour and gate, Strandbad Türlersee, 2026-08-15</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <LineChart accessibilityLayer data={data} margin={{ left: 4, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} width={32} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line dataKey="gate1" type="linear" stroke="var(--color-gate1)" strokeWidth={2} dot={false} />
          <Line dataKey="gate2" type="linear" stroke="var(--color-gate2)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </figure>
  );
}
