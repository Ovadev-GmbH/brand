import { Button } from "@ovadev-gmbh/ui-ticketova";

export default function ButtonLink() {
  return (
    <p className="m-0 text-copy-14 text-content-secondary">
      The reminder for INV-2026-0139 went out on 10 September.{" "}
      <Button variant="link" className="h-auto p-0">
        Send it again
      </Button>
    </p>
  );
}
