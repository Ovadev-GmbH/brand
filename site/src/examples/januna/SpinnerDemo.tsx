import { Badge, Button, Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-content-brand" />
      <Button disabled>
        <Spinner />
        Saving booking
      </Button>
      <Badge variant="secondary">
        <Spinner />
        Syncing
      </Badge>
    </div>
  );
}
