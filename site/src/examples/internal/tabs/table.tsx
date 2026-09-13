import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@ovadev-gmbh/ui-internal";

const deployments = [
  { id: "4f8c2a9", service: "api-gateway", region: "ch-zrh-1", duration: "2m 14s", live: true },
  { id: "b31e07d", service: "billing-worker", region: "ch-zrh-1", duration: "1m 52s", live: true },
  { id: "9d02c5f", service: "tenant-sync", region: "eu-central-1", duration: "0m 41s", live: false },
];

const tabs = [
  { value: "live", label: "Live", rows: deployments.filter((d) => d.live) },
  { value: "failed", label: "Failed", rows: deployments.filter((d) => !d.live) },
];

export default function TabsWithTable() {
  return (
    <Tabs defaultValue="live" className="w-full max-w-xl">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deployment</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Build time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tab.rows.map((d) => (
                <TableRow key={d.id}>
                  <TableCell className="text-label-13-mono">{d.id}</TableCell>
                  <TableCell>{d.service}</TableCell>
                  <TableCell className="text-label-13-mono text-content-secondary">{d.region}</TableCell>
                  <TableCell className={d.live ? "text-status-success" : "text-status-danger"}>
                    {d.live ? "Live" : "Failed"}
                  </TableCell>
                  <TableCell className="text-right text-label-13-mono">{d.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      ))}
    </Tabs>
  );
}
