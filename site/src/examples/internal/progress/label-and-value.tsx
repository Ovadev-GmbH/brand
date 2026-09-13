import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-internal";

export default function ProgressWithLabel() {
  return (
    <Progress value={64} className="w-full max-w-sm">
      <ProgressLabel>Invoice run, September 2026</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
