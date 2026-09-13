import { Fragment } from "react";
import { Label, Separator, Switch } from "@ovadev-gmbh/ui-internal";

const settings = [
  {
    id: "separator-dunning",
    label: "Automatic dunning",
    description: "Send a reminder 7 days after an invoice is due.",
    on: true,
  },
  {
    id: "separator-usage-alerts",
    label: "Usage alerts",
    description: "E-mail the tenant at 80% of the plan's API requests.",
    on: true,
  },
  {
    id: "separator-sandbox",
    label: "Sandbox tenants",
    description: "Let tenants on Starter create a sandbox.",
    on: false,
  },
];

export default function SeparatorBetweenRows() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {settings.map((setting, index) => (
        <Fragment key={setting.id}>
          {index > 0 ? <Separator /> : null}
          <div className="flex items-center justify-between gap-4">
            <div className="grid gap-1">
              <Label htmlFor={setting.id}>{setting.label}</Label>
              <p className="text-copy-13 text-content-secondary">{setting.description}</p>
            </div>
            <Switch id={setting.id} defaultChecked={setting.on} />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
