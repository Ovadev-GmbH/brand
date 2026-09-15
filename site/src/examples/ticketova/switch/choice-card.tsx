import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Switch,
} from "@ovadev-gmbh/ui-ticketova";

const settings = [
  {
    id: "switch-card-dunning",
    title: "Dunning e-mails",
    description: "Remind the billing contact 3, 7 and 14 days after an invoice is due.",
    on: true,
  },
  {
    id: "switch-card-suspend",
    title: "Suspend on non-payment",
    description: "Pause the tenant's API keys 30 days after the due date.",
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
