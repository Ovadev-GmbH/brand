import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";

const data = [
  { month: "Mar", deployments: 184 },
  { month: "Apr", deployments: 212 },
  { month: "May", deployments: 243 },
  { month: "Jun", deployments: 198 },
  { month: "Jul", deployments: 167 },
  { month: "Aug", deployments: 231 },
];

const config = {
  deployments: { label: "Deployments", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartDemo() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">
        Deployments to production per month, all tenants, March to August 2026
      </figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="deployments" fill="var(--color-deployments)" />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
