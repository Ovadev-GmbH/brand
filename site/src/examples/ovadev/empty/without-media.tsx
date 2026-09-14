import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@ovadev-gmbh/ui-ovadev";

export default function EmptyWithoutMedia() {
  return (
    <Empty className="w-72 border">
      <EmptyHeader>
        <EmptyTitle>No audit events today</EmptyTitle>
        <EmptyDescription>
          Nothing in helvetia-labs has changed since 00:00 UTC. <a href="#audit-log">Open the full log</a>.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
