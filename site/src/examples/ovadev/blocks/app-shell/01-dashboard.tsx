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
} from "@ovadev-gmbh/ui-ovadev";
import type { ChartConfig } from "@ovadev-gmbh/ui-ovadev";
import { AppShell, AppShellContent, AppShellHeader, Stat, StatGrid } from "@ovadev-gmbh/ui-ovadev/blocks";
import {
  DownloadIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MailIcon,
  NewspaperIcon,
  ScaleIcon,
  SwatchBookIcon,
  TicketIcon,
  UsersIcon,
  UtensilsIcon,
} from "@ovadev-gmbh/ui-ovadev/icons";

const nav = [
  {
    label: "Site",
    items: [
      { title: "Overview", icon: LayoutDashboardIcon, href: "/", active: true },
      { title: "Pages", icon: FileTextIcon, href: "/pages" },
      { title: "Blog", icon: NewspaperIcon, href: "/blog" },
      { title: "Brand", icon: SwatchBookIcon, href: "/brand" },
    ],
  },
  {
    label: "Products",
    items: [
      { title: "TICKETOVA", icon: TicketIcon, href: "/products/ticketova" },
      { title: "JANUNA", icon: UtensilsIcon, href: "/products/januna" },
    ],
  },
  {
    label: "Company",
    items: [
      { title: "People", icon: UsersIcon, href: "/people" },
      { title: "Contact", icon: MailIcon, href: "/contact", badge: "3" },
      { title: "Legal", icon: ScaleIcon, href: "/legal" },
    ],
  },
];

const visitorsPerDay = [
  { day: "09-08", visitors: 612 },
  { day: "09-09", visitors: 748 },
  { day: "09-10", visitors: 691 },
  { day: "09-11", visitors: 1204 },
  { day: "09-12", visitors: 566 },
  { day: "09-13", visitors: 318 },
  { day: "09-14", visitors: 673 },
];

const chart = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
} satisfies ChartConfig;

const recent = [
  { id: "1042", from: "Gemeinde Hausen", email: "gemeinde@hausen.ch", topic: "TICKETOVA", status: "New", at: "15:48" },
  { id: "1041", from: "Strandbad Türlersee", email: "info@strandbad-tuerlersee.ch", topic: "TICKETOVA", status: "Answered", at: "14:21" },
  { id: "1040", from: "Restaurant Seeblick", email: "kueche@seeblick.ch", topic: "JANUNA", status: "New", at: "11:05" },
  { id: "1039", from: "Kanton Zug", email: "it@zg.ch", topic: "Consulting", status: "Answered", at: "09:37" },
  { id: "1038", from: "Hallenbad Baar", email: "bad@baar.ch", topic: "TICKETOVA", status: "Bounced", at: "08:12" },
] as const;

const statusVariant = { New: "secondary", Answered: "outline", Bounced: "destructive" } as const;

export default function DashboardExample() {
  return (
    // The sidebar is fixed to the viewport by default; absolute keeps it in this box.
    <AppShell
      className="relative h-[720px] min-h-0 overflow-hidden"
      sidebarClassName="absolute h-full"
      nav={nav}
      brand="Ovadev"
      user={{ name: "Robin Markant", email: "robin@ova.dev" }}
    >
      <AppShellHeader
        crumbs={["Site", "Overview"]}
        actions={
          <Button variant="outline" size="sm">
            <DownloadIcon data-icon="inline-start" />
            Export CSV
          </Button>
        }
      />
      <AppShellContent>
        <div className="flex flex-col gap-space-1">
          <h1 className="text-heading-20">Overview</h1>
          <p className="text-label-13 text-content-secondary">ova.dev, 2026-09-14, times in CEST.</p>
        </div>
        <StatGrid>
          <Stat label="Visitors, last 24 h" value="4'812" delta="+6.3%" tone="positive" />
          <Stat label="Blog reads" value="1'207" delta="+12.1%" tone="positive" />
          <Stat label="Contact requests" value="3" delta="+1" tone="neutral" />
          <Stat label="TICKETOVA sign-ups" value="2" delta="0" tone="neutral" />
        </StatGrid>
        <Card>
          <CardHeader>
            <CardTitle>Visitors per day</CardTitle>
            <CardDescription>Both languages, 2026-09-08 to 2026-09-14.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chart} className="max-h-48 w-full">
              <BarChart accessibilityLayer data={visitorsPerDay}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="visitors" fill="var(--color-visitors)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent contact requests</CardTitle>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request</TableHead>
                <TableHead>From</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Received, CEST</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recent.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="text-label-13-mono">{row.id}</TableCell>
                  <TableCell>{row.from}</TableCell>
                  <TableCell className="text-label-13-mono text-content-secondary">{row.email}</TableCell>
                  <TableCell>{row.topic}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right text-label-13-mono text-content-secondary">{row.at}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </AppShellContent>
    </AppShell>
  );
}
