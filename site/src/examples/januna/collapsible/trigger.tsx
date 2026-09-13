import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const notes = [
  { name: "Allergy", value: "Shellfish" },
  { name: "Occasion", value: "Anniversary" },
  { name: "Seating", value: "Window table if free" },
];

export default function CollapsibleWithTrigger() {
  return (
    <Collapsible className="flex w-80 flex-col gap-1">
      <CollapsibleTrigger
        render={<Button variant="ghost" size="sm" className="w-full justify-between data-panel-open:[&_svg]:rotate-180" />}
      >
        Guest notes
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          strokeWidth={2}
          data-icon="inline-end"
          className="transition-transform duration-fast ease-brand"
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 px-3 py-2">
          {notes.map((note) => (
            <div key={note.name} className="contents">
              <dt className="text-label-13 text-content-secondary">{note.name}</dt>
              <dd className="text-label-14">{note.value}</dd>
            </div>
          ))}
        </dl>
      </CollapsibleContent>
    </Collapsible>
  );
}
