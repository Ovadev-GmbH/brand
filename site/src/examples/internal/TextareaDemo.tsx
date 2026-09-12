import { Label, Textarea } from "@ovadev-gmbh/ui-internal";

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-xl gap-2">
      <Label htmlFor="textarea-resolution">Resolution note</Label>
      <Textarea
        id="textarea-resolution"
        placeholder="Root cause, fix, and follow-ups for INC-2041…"
        defaultValue="Rolled back deploy dpl_9f31c to dpl_9e02a at 14:07 UTC. Queue backlog drained by 14:19."
      />
      <p className="text-copy-13 text-content-secondary">
        Posted to the incident timeline and the tenant's audit log.
      </p>
    </div>
  );
}
