import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";
import type { ChartConfig } from "@ovadev-gmbh/ui-januna";
import { AppShell, AppShellContent, AppShellHeader, Stat, StatGrid } from "@ovadev-gmbh/ui-januna/blocks";
import {
  Add01Icon,
  Analytics01Icon,
  BubbleChatIcon,
  Calendar03Icon,
  Clock01Icon,
  HugeiconsIcon,
  RestaurantTableIcon,
  Settings01Icon,
  UserGroupIcon,
} from "@ovadev-gmbh/ui-januna/icons";

const nav = [
  {
    label: "Tonight",
    items: [
      { title: "Overview", icon: Analytics01Icon, href: "/", active: true },
      { title: "Bookings", icon: Calendar03Icon, href: "/bookings", badge: "42" },
      { title: "Floor plan", icon: RestaurantTableIcon, href: "/floor" },
      { title: "Waitlist", icon: Clock01Icon, href: "/waitlist", badge: "5" },
    ],
  },
  {
    label: "Restaurant",
    items: [
      { title: "Guest book", icon: UserGroupIcon, href: "/guests" },
      { title: "Messages", icon: BubbleChatIcon, href: "/messages", badge: "2" },
      { title: "Settings", icon: Settings01Icon, href: "/settings" },
    ],
  },
];

const covers = [
  { night: "Mon", covers: 74 },
  { night: "Tue", covers: 81 },
  { night: "Wed", covers: 109 },
  { night: "Thu", covers: 126 },
  { night: "Fri", covers: 188 },
  { night: "Sat", covers: 205 },
  { night: "Sun", covers: 143 },
];

const chart = {
  covers: { label: "Covers", color: "var(--chart-1)" },
} satisfies ChartConfig;

const bookings = [
  { time: "18:30", guest: "Nina Weber", table: "T4", party: 2, status: "Seated" },
  { time: "19:00", guest: "Luca Brunner", table: "T9", party: 4, status: "Confirmed" },
  { time: "19:30", guest: "Anna Keller", table: "T12", party: 6, status: "Confirmed" },
  { time: "20:00", guest: "Marco Rossi", table: "Terrace 3", party: 3, status: "Pending" },
  { time: "20:15", guest: "Meier AG", table: "Private dining", party: 12, status: "Confirmed" },
];

export default function DashboardExample() {
  return (
    <AppShell
      nav={nav}
      brand={<span className="text-heading-16">Trattoria Sole</span>}
      user={{ name: "Lena Brunner", email: "lena@trattoriasole.ch", settingsHref: "/settings", signOutHref: "/logout" }}
    >
      <AppShellHeader
        crumbs={["Trattoria Sole", "Overview"]}
        actions={
          <Button size="sm">
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
            Add booking
          </Button>
        }
      />
      <AppShellContent>
        <h1 className="text-heading-24">Friday 18 September</h1>
        <StatGrid>
          <Stat label="Bookings tonight" value="42" delta="+6" tone="positive" />
          <Stat label="Covers" value="118" delta="+14" tone="positive" />
          <Stat label="No-shows this week" value="3" delta="-2" tone="positive" />
          <Stat label="Waitlist" value="5" />
        </StatGrid>
        <Card>
          <CardHeader>
            <CardTitle>Covers per night</CardTitle>
            <CardDescription>7 to 13 September</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chart} className="max-h-56 w-full">
              <BarChart accessibilityLayer data={covers}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="night" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="covers" fill="var(--color-covers)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Next arrivals</CardTitle>
            <CardDescription>The next five bookings of the evening.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Guest</TableHead>
                  <TableHead>Table</TableHead>
                  <TableHead className="text-right">Party</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.time}>
                    <TableCell className="text-label-13-mono">{booking.time}</TableCell>
                    <TableCell>{booking.guest}</TableCell>
                    <TableCell className="text-content-secondary">{booking.table}</TableCell>
                    <TableCell className="text-right text-label-13-mono">{booking.party}</TableCell>
                    <TableCell>
                      <Badge variant={booking.status === "Pending" ? "outline" : "secondary"}>{booking.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </AppShellContent>
    </AppShell>
  );
}
