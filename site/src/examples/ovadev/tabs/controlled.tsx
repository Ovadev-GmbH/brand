import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function TabsControlled() {
  const [tab, setTab] = React.useState("company");

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Tabs value={tab} onValueChange={(value) => setTab(String(value))}>
        <TabsList>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="office">Office</TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="text-content-secondary">
          Beni, Robin and Philip. Two engineers, one in sales.
        </TabsContent>
        <TabsContent value="company" className="text-content-secondary">
          Ovadev GmbH, Baar ZG, founded 2024.
        </TabsContent>
        <TabsContent value="office" className="text-content-secondary">
          Baar, five minutes from the station.
        </TabsContent>
      </Tabs>
      <span className="text-label-13-mono text-content-tertiary">/en/about?tab={tab}</span>
    </div>
  );
}
