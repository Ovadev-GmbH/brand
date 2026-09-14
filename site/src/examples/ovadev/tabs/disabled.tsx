import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="members" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="roles">Roles</TabsTrigger>
        <TabsTrigger value="sso" disabled>
          SSO
        </TabsTrigger>
      </TabsList>
      <TabsContent value="members" className="text-content-secondary">
        bergwerk-ag has 18 members. SSO comes with the Scale plan.
      </TabsContent>
      <TabsContent value="roles" className="text-content-secondary">
        Owner, Admin, Billing and Member.
      </TabsContent>
      <TabsContent value="sso" className="text-content-secondary">
        No identity provider connected.
      </TabsContent>
    </Tabs>
  );
}
