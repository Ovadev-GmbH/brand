import { useEffect, useState } from "react";
import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-januna";

export default function ProgressDemo() {
  const [value, setValue] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Progress value={value}>
        <ProgressLabel>Tables seated</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={38} max={50}>
        <ProgressLabel>Guests arrived</ProgressLabel>
        <ProgressValue>{(_, v) => `${v ?? 0} of 50`}</ProgressValue>
      </Progress>
      <Progress value={null}>
        <ProgressLabel>Syncing bookings</ProgressLabel>
      </Progress>
    </div>
  );
}
