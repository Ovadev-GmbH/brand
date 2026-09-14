import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";
import { ChartLineIcon, RocketIcon, TerminalIcon } from "lucide-react";

export default function TabsWithIcon() {
  return (
    <Tabs defaultValue="logs" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="logs">
          <TerminalIcon data-icon="inline-start" />
          Logs
        </TabsTrigger>
        <TabsTrigger value="metrics">
          <ChartLineIcon data-icon="inline-start" />
          Metrics
        </TabsTrigger>
        <TabsTrigger value="deployments">
          <RocketIcon data-icon="inline-start" />
          Deployments
        </TabsTrigger>
      </TabsList>
      <TabsContent value="logs" className="text-content-secondary">
        Streaming from api-gateway in ch-zrh-1.
      </TabsContent>
      <TabsContent value="metrics" className="text-content-secondary">
        p99 latency 182 ms over the last hour.
      </TabsContent>
      <TabsContent value="deployments" className="text-content-secondary">
        4f8c2a9 is live; 9d02c5f failed at 13:48 UTC.
      </TabsContent>
    </Tabs>
  );
}
