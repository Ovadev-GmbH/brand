import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-ovadev";

export default function ProgressWithLabel() {
  return (
    <Progress value={64} className="w-full max-w-sm">
      <ProgressLabel>Pool season 2026, days elapsed</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
