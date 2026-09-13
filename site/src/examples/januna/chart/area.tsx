import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";

const data = [
  { time: "18:00", seated: 12 },
  { time: "18:30", seated: 34 },
  { time: "19:00", seated: 58 },
  { time: "19:30", seated: 86 },
  { time: "20:00", seated: 104 },
  { time: "20:30", seated: 98 },
  { time: "21:00", seated: 76 },
  { time: "21:30", seated: 52 },
  { time: "22:00", seated: 28 },
];

const config = {
  seated: { label: "Guests seated", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartArea() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Guests in the room, Saturday 12 September</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <AreaChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="seated"
            type="linear"
            stroke="var(--color-seated)"
            strokeWidth={2}
            fill="var(--color-seated)"
            fillOpacity={0.1}
          />
        </AreaChart>
      </ChartContainer>
    </figure>
  );
}
