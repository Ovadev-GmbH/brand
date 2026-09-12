import { Toggle } from "@ovadev-gmbh/ui-internal";
import { EyeIcon, TextBIcon, TextItalicIcon } from "@phosphor-icons/react";

export default function ToggleDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-3">
      <Toggle aria-label="Bold">
        <TextBIcon />
      </Toggle>
      <Toggle aria-label="Italic" defaultPressed>
        <TextItalicIcon />
      </Toggle>
      <Toggle variant="outline">
        <EyeIcon data-icon="inline-start" />
        Watch incident
      </Toggle>
      <Toggle variant="outline" size="sm">
        Archived
      </Toggle>
      <Toggle variant="outline" size="lg" defaultPressed>
        Live tail
      </Toggle>
      <Toggle disabled>Disabled</Toggle>
    </div>
  );
}
