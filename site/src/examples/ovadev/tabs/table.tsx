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
} from "@ovadev-gmbh/ui-ovadev";

const devices = [
  { id: "gate-01", venue: "Strandbad Türlersee", place: "Hausen am Albis", lastSeen: "14:02:11", online: true },
  { id: "gate-02", venue: "Strandbad Türlersee", place: "Hausen am Albis", lastSeen: "14:01:58", online: true },
  { id: "kiosk-01", venue: "Hallenbad Baar", place: "Baar", lastSeen: "2026-09-11", online: false },
];

const tabs = [
  { value: "online", label: "Online", rows: devices.filter((d) => d.online) },
  { value: "offline", label: "Offline", rows: devices.filter((d) => !d.online) },
];

export default function TabsWithTable() {
  return (
    <Tabs defaultValue="online" className="w-full max-w-xl">
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
                <TableHead>Device</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Place</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Last seen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tab.rows.map((d) => (
                <TableRow key={d.id}>
                  <TableCell className="text-label-13-mono">{d.id}</TableCell>
                  <TableCell>{d.venue}</TableCell>
                  <TableCell className="text-label-13-mono text-content-secondary">{d.place}</TableCell>
                  <TableCell className={d.online ? "text-status-success" : "text-status-danger"}>
                    {d.online ? "Online" : "Offline"}
                  </TableCell>
                  <TableCell className="text-right text-label-13-mono">{d.lastSeen}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      ))}
    </Tabs>
  );
}
