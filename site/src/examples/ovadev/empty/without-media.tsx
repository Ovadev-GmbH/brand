import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@ovadev-gmbh/ui-ovadev";

export default function EmptyWithoutMedia() {
  return (
    <Empty className="w-72 border">
      <EmptyHeader>
        <EmptyTitle>No messages today</EmptyTitle>
        <EmptyDescription>
          Nothing has come in through the contact form since 00:00. <a href="#messages">Open all messages</a>.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
