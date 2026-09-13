import { Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" strokeWidth={1.5} />
    </div>
  );
}
