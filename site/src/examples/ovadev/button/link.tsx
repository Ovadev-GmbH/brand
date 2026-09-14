import { Button } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonLink() {
  return (
    <p className="m-0 text-copy-14 text-content-secondary">
      The confirmation for the newsletter went to hello@tuerlersee.ch on 10 September.{" "}
      <Button variant="link" className="h-auto p-0">
        Send it again
      </Button>
    </p>
  );
}
