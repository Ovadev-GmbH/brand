import * as React from "react";
import { Button, Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-ticketova";

export default function ProgressControlled() {
  const [value, setValue] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const done = value >= 100;

  // Stands in for the job reporting back: another 10% every quarter second.
  React.useEffect(() => {
    if (!started || done) return;
    const timer = setTimeout(() => setValue((v) => Math.min(100, v + 10)), 250);
    return () => clearTimeout(timer);
  }, [started, done, value]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Progress value={value}>
        <ProgressLabel>{done ? "Audit log exported" : "Audit log export, August 2026"}</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Button
        variant="outline"
        size="sm"
        className="self-start"
        disabled={started && !done}
        onClick={() => {
          setValue(0);
          setStarted(true);
        }}
      >
        {done ? "Export again" : "Export audit log"}
      </Button>
    </div>
  );
}
