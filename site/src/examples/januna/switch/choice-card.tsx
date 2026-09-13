import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Switch,
} from "@ovadev-gmbh/ui-januna";

const settings = [
  {
    id: "switch-card-deposit",
    title: "Deposits for large parties",
    description: "Parties of 8 or more pay CHF 50.00 per guest to hold the table.",
    on: true,
  },
  {
    id: "switch-card-reminder",
    title: "Reminder the day before",
    description: "A text message at 10:00 with the time, the party size and a link to cancel.",
    on: false,
  },
];

export default function SwitchChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-sm">
      {settings.map((setting) => (
        <FieldLabel key={setting.id} htmlFor={setting.id}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{setting.title}</FieldTitle>
              <FieldDescription>{setting.description}</FieldDescription>
            </FieldContent>
            <Switch id={setting.id} defaultChecked={setting.on} />
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  );
}
