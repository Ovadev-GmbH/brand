import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";

const data = [
  { day: "Thu", date: "Thursday 10 September", lunch: 2140, dinner: 6100.5 },
  { day: "Fri", date: "Friday 11 September", lunch: 2860, dinner: 10120 },
  { day: "Sat", date: "Saturday 12 September", lunch: 3240.2, dinner: 11135 },
  { day: "Sun", date: "Sunday 13 September", lunch: 5480, dinner: 3310 },
];

const config = {
  lunch: { label: "Lunch", color: "var(--chart-3)" },
  dinner: { label: "Dinner", color: "var(--chart-1)" },
} satisfies ChartConfig;

/* Two decimals and the Swiss thousands separator: 10'120.00. */
const chf = (value: number) => value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

export default function ChartTooltipExample() {
  return (
    <figure className="m-0 flex w-full max-w-xl flex-col gap-3">
      <figcaption className="text-label-13 text-content-secondary">Revenue per shift, CHF, Thursday to Sunday</figcaption>
      <ChartContainer config={config} className="max-h-56 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(_, payload) => payload[0]?.payload.date}
                formatter={(value, name) => (
                  <div className="flex w-full justify-between gap-4">
                    <span className="text-content-secondary">{config[name as keyof typeof config]?.label}</span>
                    <span className="text-label-12-mono">CHF {chf(Number(value))}</span>
                  </div>
                )}
              />
            }
          />
          <Bar dataKey="lunch" fill="var(--color-lunch)" radius={4} />
          <Bar dataKey="dinner" fill="var(--color-dinner)" radius={4} />
        </BarChart>
      </ChartContainer>
    </figure>
  );
}
