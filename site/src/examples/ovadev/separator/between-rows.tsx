import { Fragment } from "react";
import { Label, Separator, Switch } from "@ovadev-gmbh/ui-ovadev";

const settings = [
  {
    id: "separator-analytics",
    label: "Analytics",
    description: "Count page views on ova.dev. No personal data is stored.",
    on: true,
  },
  {
    id: "separator-newsletter",
    label: "Newsletter",
    description: "One e-mail a month about TICKETOVA and JANUNA.",
    on: true,
  },
  {
    id: "separator-jobs",
    label: "Job alerts",
    description: "E-mail when Ovadev posts a position in Baar.",
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
