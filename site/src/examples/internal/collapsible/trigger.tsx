import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-internal";
import { ChevronDownIcon } from "lucide-react";

const headers = [
  { name: "content-type", value: "application/json" },
  { name: "x-ova-tenant", value: "acme-logistics" },
  { name: "x-ova-delivery", value: "dlv_8Hq2Zr" },
];

export default function CollapsibleWithTrigger() {
  return (
    <Collapsible className="flex w-80 flex-col gap-1">
      <CollapsibleTrigger
        render={<Button variant="ghost" size="sm" className="w-full justify-between data-panel-open:[&_svg]:rotate-180" />}
      >
        Request headers
        <ChevronDownIcon data-icon="inline-end" className="transition-transform duration-fast ease-brand" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 px-2.5 py-1">
          {headers.map((header) => (
            <div key={header.name} className="contents">
              <dt className="text-label-13 text-content-secondary">{header.name}</dt>
              <dd className="text-label-13-mono">{header.value}</dd>
            </div>
          ))}
        </dl>
      </CollapsibleContent>
    </Collapsible>
  );
}
