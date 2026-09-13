import { Progress, ProgressLabel, Spinner } from "@ovadev-gmbh/ui-januna";

export default function ProgressIndeterminate() {
  return (
    <Progress value={null} className="w-full max-w-sm">
      <ProgressLabel>Importing bookings from the old system</ProgressLabel>
      <Spinner aria-hidden className="ml-auto text-content-secondary" />
    </Progress>
  );
}
