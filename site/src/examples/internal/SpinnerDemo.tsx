import { Button, Spinner } from "@ovadev-gmbh/ui-internal";

export default function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-3">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" />
      <span className="flex items-center gap-2 text-label-13 text-content-secondary">
        <Spinner />
        Fetching audit log
      </span>
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Deploying
      </Button>
      <Button variant="outline" size="icon" disabled aria-label="Refreshing">
        <Spinner />
      </Button>
    </div>
  );
}
