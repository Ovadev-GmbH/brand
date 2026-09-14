import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ovadev";
import { ChevronDownIcon } from "lucide-react";

const details = [
  { name: "UID", value: "CHE-312.481.960" },
  { name: "VAT", value: "CHE-312.481.960 MWST" },
  { name: "Register", value: "CH-170.4.024.331-8" },
];

export default function CollapsibleWithTrigger() {
  return (
    <Collapsible className="flex w-80 flex-col gap-1">
      <CollapsibleTrigger
        render={<Button variant="ghost" size="sm" className="w-full justify-between data-panel-open:[&_svg]:rotate-180" />}
      >
        Company details
        <ChevronDownIcon data-icon="inline-end" className="transition-transform duration-fast ease-brand" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 px-2.5 py-1">
          {details.map((detail) => (
            <div key={detail.name} className="contents">
              <dt className="text-label-13 text-content-secondary">{detail.name}</dt>
              <dd className="text-label-13-mono">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </CollapsibleContent>
    </Collapsible>
  );
}
