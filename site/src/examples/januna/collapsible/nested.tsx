import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const areas = [
  {
    name: "Dining room",
    tables: [
      { name: "T12", bookings: ["18:30 Keller, 6", "21:00 Brunner, 4"] },
      { name: "T14", bookings: ["19:15 Rossi, 2"] },
    ],
  },
  {
    name: "Terrace",
    tables: [{ name: "Terrace 3", bookings: ["20:00 Moreau, 8"] }],
  },
];

const trigger = <Button variant="ghost" size="sm" className="data-panel-open:[&_svg]:rotate-90" />;
const arrow = (
  <HugeiconsIcon
    icon={ArrowRight01Icon}
    strokeWidth={2}
    data-icon="inline-start"
    className="transition-transform duration-fast ease-brand"
  />
);

export default function CollapsibleNested() {
  return (
    <ul className="flex w-72 flex-col gap-1">
      {areas.map((area) => (
        <li key={area.name}>
          <Collapsible defaultOpen={area.name === "Dining room"}>
            <CollapsibleTrigger render={trigger}>
              {arrow}
              {area.name}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="ml-4 flex flex-col border-l border-divider pl-2">
                {area.tables.map((table) => (
                  <li key={table.name}>
                    <Collapsible>
                      <CollapsibleTrigger render={trigger}>
                        {arrow}
                        {table.name}
                        <span className="text-label-13-mono text-content-tertiary">{table.bookings.length}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul className="ml-4 flex flex-col border-l border-divider pl-4">
                          {table.bookings.map((booking) => (
                            <li key={booking} className="py-1 text-label-13 text-content-secondary">
                              {booking}
                            </li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </li>
      ))}
    </ul>
  );
}
