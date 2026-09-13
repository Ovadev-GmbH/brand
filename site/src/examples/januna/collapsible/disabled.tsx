import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-januna";

export default function CollapsibleDisabled() {
  return (
    <Collapsible disabled className="flex w-96 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-label-14">Waitlist, Saturday dinner</span>
          <span className="text-label-12 text-content-tertiary">
            Opens once the shift is full. <span className="text-label-12-mono">96</span> of{" "}
            <span className="text-label-12-mono">110</span> covers booked.
          </span>
        </div>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show waitlist</CollapsibleTrigger>
      </div>
      <CollapsibleContent className="text-copy-14 text-content-secondary">No one is waiting.</CollapsibleContent>
    </Collapsible>
  );
}
