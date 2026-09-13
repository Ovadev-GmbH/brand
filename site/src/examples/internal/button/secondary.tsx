import { Button } from "@ovadev-gmbh/ui-internal";

export default function ButtonSecondary() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary">Preview invoice</Button>
      <Button>Send invoice</Button>
    </div>
  );
}
