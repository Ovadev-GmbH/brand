import { useState } from "react";
import { Toggle } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { TextBoldIcon, TextItalicIcon, TextUnderlineIcon } from "@hugeicons/core-free-icons";

export default function ToggleDemo() {
  const [walkIns, setWalkIns] = useState(true);

  return (
    <div className="flex max-w-xl flex-wrap items-center gap-4">
      <Toggle aria-label="Toggle bold">
        <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
      </Toggle>
      <Toggle size="sm" aria-label="Toggle underline">
        <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
      </Toggle>
      <Toggle size="lg" variant="outline" pressed={walkIns} onPressedChange={setWalkIns}>
        Walk-ins {walkIns ? "on" : "off"}
      </Toggle>
      <Toggle disabled aria-label="Disabled toggle">
        Closed
      </Toggle>
    </div>
  );
}
