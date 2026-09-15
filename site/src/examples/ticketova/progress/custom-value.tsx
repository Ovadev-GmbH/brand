import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-ticketova";

export default function ProgressCustomValue() {
  return (
    <Progress value={184} max={312} className="w-full max-w-sm">
      <ProgressLabel>Tenants migrated to ch-zrh-1</ProgressLabel>
      <ProgressValue>{(_, value) => `${value ?? 0} / 312`}</ProgressValue>
    </Progress>
  );
}
