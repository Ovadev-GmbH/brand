import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-ovadev";

export default function ProgressCustomValue() {
  return (
    <Progress value={184} max={312} className="w-full max-w-sm">
      <ProgressLabel>Season passes sold</ProgressLabel>
      <ProgressValue>{(_, value) => `${value ?? 0} / 312`}</ProgressValue>
    </Progress>
  );
}
