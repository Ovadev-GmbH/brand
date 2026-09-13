import { useEffect, useState } from "react";
import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-internal";

export default function ProgressDemo() {
  const [value, setValue] = useState(18);

  useEffect(() => {
    const timer = setTimeout(() => setValue(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress value={value} className="w-full max-w-sm">
      <ProgressLabel>Exporting the audit log of acme-logistics</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
