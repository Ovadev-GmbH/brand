import { useEffect, useState } from "react";
import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-internal";

export default function ProgressDemo() {
  const [value, setValue] = useState(12);

  useEffect(() => {
    const timer = setTimeout(() => setValue(71), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Progress value={value}>
        <ProgressLabel>Invoice run · September</ProgressLabel>
        <ProgressValue className="font-mono" />
      </Progress>
      <Progress value={184} max={312}>
        <ProgressLabel>Tenants migrated</ProgressLabel>
        <ProgressValue className="font-mono">
          {(_, v) => `${v ?? 0} / 312`}
        </ProgressValue>
      </Progress>
      <Progress value={null}>
        <ProgressLabel>Rebuilding search index</ProgressLabel>
      </Progress>
    </div>
  );
}
