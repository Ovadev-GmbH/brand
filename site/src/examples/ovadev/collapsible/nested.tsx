import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ovadev";
import { ChevronRightIcon } from "lucide-react";

const products = [
  {
    name: "TICKETOVA",
    venues: [
      { name: "Strandbad Türlersee", devices: ["gate-01", "gate-02", "kiosk-01"] },
      { name: "Hallenbad Baar", devices: ["gate-01"] },
    ],
  },
  {
    name: "JANUNA",
    venues: [{ name: "Restaurant Seerose", devices: ["till-01"] }],
  },
];

const trigger = <Button variant="ghost" size="sm" className="data-panel-open:[&_svg]:rotate-90" />;
const chevron = <ChevronRightIcon data-icon="inline-start" className="transition-transform duration-fast ease-brand" />;

export default function CollapsibleNested() {
  return (
    <ul className="flex w-72 flex-col gap-1">
      {products.map((product) => (
        <li key={product.name}>
          <Collapsible defaultOpen={product.name === "TICKETOVA"}>
            <CollapsibleTrigger render={trigger}>
              {chevron}
              {product.name}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="ml-4 flex flex-col border-l border-divider pl-2">
                {product.venues.map((venue) => (
                  <li key={venue.name}>
                    <Collapsible>
                      <CollapsibleTrigger render={trigger}>
                        {chevron}
                        {venue.name}
                        <span className="text-label-13-mono text-content-tertiary">{venue.devices.length}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul className="ml-4 flex flex-col border-l border-divider pl-4">
                          {venue.devices.map((id) => (
                            <li key={id} className="py-1 text-label-13-mono text-content-secondary">
                              {id}
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
