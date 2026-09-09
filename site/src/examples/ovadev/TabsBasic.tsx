import { Tabs } from "@ovadev-gmbh/ui-ovadev";

export default function TabsBasic() {
  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Tab value="overview">
          Overview
        </Tabs.Tab>
        <Tabs.Tab value="projects">
          Projects
        </Tabs.Tab>
        <Tabs.Tab value="account">
          Account
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <div>
        <Tabs.Panel value="overview">
          <p>Workspace stats and activity.</p>
        </Tabs.Panel>
        <Tabs.Panel value="projects">
          <p>Milestones and deadlines.</p>
        </Tabs.Panel>
        <Tabs.Panel value="account">
          <p>Profile and preferences.</p>
        </Tabs.Panel>
      </div>
    </Tabs.Root>
  );
}
