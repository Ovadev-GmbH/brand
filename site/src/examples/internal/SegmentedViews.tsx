import { useState } from "react";
import { Segmented } from "@ovadev-gmbh/ui-internal";

export default function SegmentedViews() {
  const [v, setV] = useState<"all" | "open" | "done">("all");
  return (
    <Segmented
      ariaLabel="Status"
      value={v}
      onChange={setV}
      options={[
        { value: "all", label: "Alle" },
        { value: "open", label: "Offen" },
        { value: "done", label: "Erledigt", off: true },
      ]}
    />
  );
}
