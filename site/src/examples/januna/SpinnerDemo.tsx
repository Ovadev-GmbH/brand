import { Badge, Button, Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerDemo() {
  return (
    <div className="flex max-w-2xl flex-wrap items-center gap-4">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-primary" />
      <Button disabled>
        <Spinner />
        Saving booking
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Loading tables
      </Button>
      <Badge variant="secondary">
        <Spinner />
        Syncing
      </Badge>
    </div>
  );
}
