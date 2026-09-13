import { Button } from "@ovadev-gmbh/ui-januna";

export default function ButtonLink() {
  return (
    <p className="m-0 text-copy-14 text-content-secondary">
      The reminder for the 19:30 booking went out at 17:30.{" "}
      <Button variant="link" className="h-auto p-0">
        Send it again
      </Button>
    </p>
  );
}
