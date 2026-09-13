import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@ovadev-gmbh/ui-januna";

const requests = [
  { id: "high-chair", title: "High chair", description: "Set at the table before the party arrives.", on: true },
  { id: "window", title: "Window seat", description: "Only if a window table is free at 19:30.", on: false },
];

export default function CheckboxChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-sm">
      {requests.map((request) => (
        <FieldLabel key={request.id} htmlFor={`checkbox-card-${request.id}`}>
          <Field orientation="horizontal">
            <Checkbox id={`checkbox-card-${request.id}`} defaultChecked={request.on} />
            <FieldContent>
              <FieldTitle>{request.title}</FieldTitle>
              <FieldDescription>{request.description}</FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  );
}
