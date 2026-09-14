import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Switch,
} from "@ovadev-gmbh/ui-ovadev";

const settings = [
  {
    id: "switch-card-dunning",
    title: "Release notes",
    description: "One e-mail when TICKETOVA or JANUNA ships a release.",
    on: true,
  },
  {
    id: "switch-card-suspend",
    title: "Blog posts",
    description: "Every new post on ova.dev, the day it is published.",
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
