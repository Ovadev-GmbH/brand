import { Spinner } from "@ovadev-gmbh/ui-internal";

export default function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-5" />
    </div>
  );
}
