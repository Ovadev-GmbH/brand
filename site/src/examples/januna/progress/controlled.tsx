import { useEffect, useState } from "react";
import { Button, Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-januna";

const guests = 24;

export default function ProgressControlled() {
  const [sent, setSent] = useState(0);
  const [started, setStarted] = useState(false);
  const done = sent >= guests;

  // Stands in for the text service reporting back: another 3 guests every quarter second.
  useEffect(() => {
    if (!started || done) return;
    const timer = setTimeout(() => setSent((n) => Math.min(guests, n + 3)), 250);
    return () => clearTimeout(timer);
  }, [started, done, sent]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Progress value={sent} max={guests}>
        <ProgressLabel>{done ? "Reminders sent for dinner" : "Sending reminders for dinner"}</ProgressLabel>
        <ProgressValue>{(_, value) => `${value ?? 0} of ${guests}`}</ProgressValue>
      </Progress>
      <Button
        variant="outline"
        size="sm"
        className="self-start"
        disabled={started && !done}
        onClick={() => {
          setSent(0);
          setStarted(true);
        }}
      >
        {done ? "Send again" : "Send reminders"}
      </Button>
    </div>
  );
}
