import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@ovadev-gmbh/ui-januna";

export default function EmptyOutline() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyTitle>No deposits taken</EmptyTitle>
        <EmptyDescription>
          Parties of 6 or more pay a deposit once a payment account is connected.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Connect payment account</Button>
      </EmptyContent>
    </Empty>
  );
}
