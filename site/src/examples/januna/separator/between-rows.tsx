import { Fragment } from "react";
import { Label, Separator, Switch } from "@ovadev-gmbh/ui-januna";

const settings = [
  {
    id: "separator-deposit",
    label: "Deposit for large parties",
    description: "Ask for CHF 20.00 per guest when a booking is for 8 or more.",
    on: true,
  },
  {
    id: "separator-waitlist-texts",
    label: "Waitlist by text message",
    description: "Text the guest when their table is ready.",
    on: true,
  },
  {
    id: "separator-holidays",
    label: "Online booking on public holidays",
    description: "Let guests book on days the restaurant marks as closed.",
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
