import { InputGroup, InputGroupAddon, InputGroupInput } from "@ovadev-gmbh/ui-ovadev";
import { MailIcon, PhoneIcon } from "lucide-react";

export default function InputGroupWithIcon() {
  return (
    <div className="grid w-80 gap-4">
      <InputGroup>
        <InputGroupInput type="email" aria-label="E-mail" placeholder="info@tuerlersee.ch" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Phone" className="text-label-13-mono" placeholder="+41 41 000 00 00" />
        <InputGroupAddon>
          <PhoneIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
