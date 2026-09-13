import { useState } from "react";
import { Toggle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Notification01Icon, Sun03Icon, WalkingIcon } from "@hugeicons/core-free-icons";

export default function ToggleDemo() {
  const [walkIns, setWalkIns] = useState(true);

  return (
    <div className="flex max-w-xl flex-wrap items-center gap-4">
      <Toggle defaultPressed>
        <HugeiconsIcon icon={Sun03Icon} strokeWidth={2} data-icon="inline-start" />
        Terrace open
      </Toggle>
      <Toggle variant="outline" pressed={walkIns} onPressedChange={setWalkIns}>
        <HugeiconsIcon icon={WalkingIcon} strokeWidth={2} data-icon="inline-start" />
        Walk-ins
      </Toggle>
      <Toggle size="sm" variant="outline" aria-label="SMS reminders">
        <HugeiconsIcon icon={Notification01Icon} strokeWidth={2} />
      </Toggle>
      <Toggle size="lg" variant="outline">
        Waitlist
      </Toggle>
      <Toggle disabled>Private room</Toggle>
    </div>
  );
}
