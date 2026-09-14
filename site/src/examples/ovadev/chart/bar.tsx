import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { month: "Apr", starter: 1470, team: 8240, scale: 21600 },
  { month: "May", starter: 1520, team: 8610, scale: 21600 },
  { month: "Jun", starter: 1610, team: 9030, scale: 24300 },
  { month: "Jul", starter: 1580, team: 9390, scale: 24300 },
  { month: "Aug", starter: 1660, team: 9800, scale: 27000 },
  { month: "Sep", starter: 1710, team: 10150, scale: 27000 },
];

const config = {
  scale: { label: "Scale", color: "var(--chart-1)" },
  team: { label: "Team", color: "var(--chart-2)" },
  starter: { label: "Starter", color: "var(--chart-3)" },
} satisfies ChartConfig;

const chf = new Intl.NumberFormat("de-CH");

export default function ChartBar() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Invoiced per plan, CHF, April to September 2026</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} width={56} tickFormatter={(value: number) => chf.format(value)} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="scale" stackId="plan" fill="var(--color-scale)" />
          <Bar dataKey="team" stackId="plan" fill="var(--color-team)" />
          <Bar dataKey="starter" stackId="plan" fill="var(--color-starter)" />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
