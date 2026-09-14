import { Progress, ProgressLabel, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function ProgressIndeterminate() {
  return (
    <Progress value={null} className="w-full max-w-sm">
      <ProgressLabel>Rebuilding the invoices index</ProgressLabel>
      <Spinner className="ml-auto size-3.5 text-content-secondary" />
    </Progress>
  );
}
