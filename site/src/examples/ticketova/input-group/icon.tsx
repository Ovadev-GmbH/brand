import { InputGroup, InputGroupAddon, InputGroupInput } from "@ovadev-gmbh/ui-ticketova";
import { EnvelopeSimpleIcon, RocketIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function InputGroupWithIcon() {
  return (
    <div className="grid w-80 gap-4">
      <InputGroup>
        <InputGroupInput type="email" aria-label="Team member e-mail" placeholder="name@ova.dev" />
        <InputGroupAddon>
          <EnvelopeSimpleIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Deployment ID" className="text-label-13-mono" placeholder="dpl_9f31c" />
        <InputGroupAddon>
          <RocketIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
