import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";

const data = [
  { week: "W32", online: 412, phone: 138, walkIn: 96 },
  { week: "W33", online: 436, phone: 131, walkIn: 104 },
  { week: "W34", online: 471, phone: 126, walkIn: 88 },
  { week: "W35", online: 498, phone: 119, walkIn: 112 },
  { week: "W36", online: 524, phone: 112, walkIn: 97 },
  { week: "W37", online: 551, phone: 104, walkIn: 121 },
];

const config = {
  online: { label: "Online", color: "var(--chart-1)" },
  phone: { label: "Phone", color: "var(--chart-2)" },
  walkIn: { label: "Walk-in", color: "var(--chart-3)" },
} satisfies ChartConfig;

export default function ChartLegendExample() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Covers per week by how the booking came in</figcaption>
      <ChartContainer config={config} className="max-h-64 w-full">
        <LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
          <Line dataKey="online" type="linear" stroke="var(--color-online)" strokeWidth={2} dot={false} />
          <Line dataKey="phone" type="linear" stroke="var(--color-phone)" strokeWidth={2} dot={false} />
          <Line dataKey="walkIn" type="linear" stroke="var(--color-walkIn)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </figure>
  );
}
