import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ticketova";
import { CaretRightIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const environments = [
  {
    name: "production",
    services: [
      { name: "api-gateway", instances: ["inst_4f9a2c", "inst_4f9a2d", "inst_4f9a2e"] },
      { name: "billing-worker", instances: ["inst_b21c07"] },
    ],
  },
  {
    name: "staging",
    services: [{ name: "api-gateway", instances: ["inst_77e0a1"] }],
  },
];

const trigger = <Button variant="ghost" size="sm" className="data-panel-open:[&_svg]:rotate-90" />;
const chevron = <CaretRightIcon data-icon="inline-start" className="transition-transform duration-fast ease-brand" />;

export default function CollapsibleNested() {
  return (
    <ul className="flex w-72 flex-col gap-1">
      {environments.map((env) => (
        <li key={env.name}>
          <Collapsible defaultOpen={env.name === "production"}>
            <CollapsibleTrigger render={trigger}>
              {chevron}
              {env.name}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="ml-4 flex flex-col border-l border-divider pl-2">
                {env.services.map((service) => (
                  <li key={service.name}>
                    <Collapsible>
                      <CollapsibleTrigger render={trigger}>
                        {chevron}
                        {service.name}
                        <span className="text-label-13-mono text-content-tertiary">{service.instances.length}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul className="ml-4 flex flex-col border-l border-divider pl-4">
                          {service.instances.map((id) => (
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
