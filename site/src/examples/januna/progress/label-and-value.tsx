import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-januna";

export default function ProgressWithLabel() {
  return (
    <Progress value={64} className="w-full max-w-sm">
      <ProgressLabel>Reminders sent for dinner</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
