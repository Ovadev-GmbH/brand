import { Textarea } from "@ovadev-gmbh/ui-internal";

export default function TextareaDemo() {
  return (
    <Textarea
      className="w-full max-w-sm"
      aria-label="Incident summary"
      placeholder="What failed in INC-2041, who was paged, what was rolled back"
    />
  );
}
