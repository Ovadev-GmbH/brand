import { useEffect, useState } from "react";
import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-januna";

export default function ProgressDemo() {
  const [value, setValue] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress value={value} className="w-full max-w-sm">
      <ProgressLabel>Reminders sent for Saturday dinner</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
