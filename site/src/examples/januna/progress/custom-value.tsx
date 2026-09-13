import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-januna";

export default function ProgressCustomValue() {
  return (
    <Progress value={86} max={110} className="w-full max-w-sm">
      <ProgressLabel>Covers booked, dinner</ProgressLabel>
      <ProgressValue>{(_, value) => `${value ?? 0} of 110`}</ProgressValue>
    </Progress>
  );
}
