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
} from "@ovadev-gmbh/ui-internal";
import type { ChartConfig } from "@ovadev-gmbh/ui-internal";
import { AppShell, AppShellContent, AppShellHeader, Stat, StatGrid } from "@ovadev-gmbh/ui-internal/blocks";
import {
  Building2Icon,
  DownloadIcon,
  FileMinusIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  ReceiptIcon,
  RocketIcon,
  ScrollTextIcon,
  TriangleAlertIcon,
} from "@ovadev-gmbh/ui-internal/icons";

const nav = [
  {
    label: "Operations",
    items: [
      { title: "Overview", icon: LayoutDashboardIcon, href: "/", active: true },
      { title: "Tenants", icon: Building2Icon, href: "/tenants" },
      { title: "Deployments", icon: RocketIcon, href: "/deployments" },
      { title: "Incidents", icon: TriangleAlertIcon, href: "/incidents", badge: "2" },
    ],
  },
  {
    label: "Billing",
    items: [
      { title: "Invoices", icon: ReceiptIcon, href: "/invoices", badge: "12" },
      { title: "Credit notes", icon: FileMinusIcon, href: "/credit-notes" },
    ],
  },
  {
    label: "Access",
    items: [
      { title: "API keys", icon: KeyRoundIcon, href: "/api-keys" },
      { title: "Audit log", icon: ScrollTextIcon, href: "/audit" },
    ],
  },
];

const deploymentsPerDay = [
  { day: "09-08", deployments: 31 },
  { day: "09-09", deployments: 44 },
  { day: "09-10", deployments: 38 },
  { day: "09-11", deployments: 52 },
  { day: "09-12", deployments: 27 },
  { day: "09-13", deployments: 9 },
  { day: "09-14", deployments: 23 },
];

const chart = {
  deployments: { label: "Deployments", color: "var(--chart-1)" },
} satisfies ChartConfig;

const recent = [
  { id: "dpl_4f2c9a", tenant: "acme-logistics", ref: "main@7e1d3b0", status: "Live", at: "15:48" },
  { id: "dpl_4f2c88", tenant: "nordlicht", ref: "main@c41a9f2", status: "Building", at: "15:41" },
  { id: "dpl_4f2c71", tenant: "helvetia-labs", ref: "release/2.4@0b8e77d", status: "Live", at: "15:12" },
  { id: "dpl_4f2c5e", tenant: "kaffeehaus", ref: "main@91f0c2a", status: "Failed", at: "14:57" },
  { id: "dpl_4f2c40", tenant: "bergwerk-ag", ref: "main@5d2b1e8", status: "Live", at: "14:30" },
] as const;

const statusVariant = { Live: "secondary", Building: "outline", Failed: "destructive" } as const;

export default function DashboardExample() {
  return (
    // The sidebar is fixed to the viewport by default; absolute keeps it in this box.
    <AppShell
      className="relative h-[720px] min-h-0 overflow-hidden"
      sidebarClassName="absolute h-full"
      nav={nav}
      brand="Ovadev Internal"
      user={{ name: "Robin Markant", email: "robin@ova.dev" }}
    >
      <AppShellHeader
        crumbs={["Operations", "Overview"]}
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
          <p className="text-label-13 text-content-secondary">All tenants, 2026-09-14, times in CEST.</p>
        </div>
        <StatGrid>
          <Stat label="Requests, last 24 h" value="1'284'302" delta="+4.2%" tone="positive" />
          <Stat label="Error rate" value="0.31%" delta="-0.04 pt" tone="positive" />
          <Stat label="p95 latency" value="184 ms" delta="+12 ms" tone="negative" />
          <Stat label="Open incidents" value="2" delta="0" tone="neutral" />
        </StatGrid>
        <Card>
          <CardHeader>
            <CardTitle>Deployments per day</CardTitle>
            <CardDescription>To production, all tenants, 2026-09-08 to 2026-09-14.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chart} className="max-h-48 w-full">
              <BarChart accessibilityLayer data={deploymentsPerDay}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="deployments" fill="var(--color-deployments)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent deployments</CardTitle>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deployment</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Ref</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Started, CEST</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recent.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="text-label-13-mono">{row.id}</TableCell>
                  <TableCell>{row.tenant}</TableCell>
                  <TableCell className="text-label-13-mono text-content-secondary">{row.ref}</TableCell>
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
