import { Fragment } from "react";
import { ScrollArea, Separator } from "@ovadev-gmbh/ui-internal";

const tenants = [
  "acme-logistics", "alpenwerk-ag", "bergwerk-ag", "brunner-bau", "codex-labs", "fonduta-gmbh",
  "gotthard-rail", "helvetia-labs", "jura-energie", "lakeside-hotels", "matterhorn-it", "nordlicht",
  "pilatus-pay", "rhone-media", "saentis-cloud", "ticino-foods", "uri-logistik", "zuger-treuhand",
];

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-56 material-base">
      <div className="p-3">
        <h4 className="mb-3 text-label-13">Tenants</h4>
        {tenants.map((tenant, index) => (
          <Fragment key={tenant}>
            {index > 0 ? <Separator className="my-2" /> : null}
            <div className="text-label-13-mono">{tenant}</div>
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
