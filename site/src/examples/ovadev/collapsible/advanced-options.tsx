import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronRightIcon } from "lucide-react";

export default function CollapsibleAdvancedOptions() {
  return (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Field>
        <FieldLabel htmlFor="collapsible-advanced-name">Key name</FieldLabel>
        <Input id="collapsible-advanced-name" placeholder="Checkout backend" />
      </Field>
      <Collapsible className="flex flex-col gap-3">
        <CollapsibleTrigger
          render={<Button variant="ghost" size="sm" className="self-start data-panel-open:[&_svg]:rotate-90" />}
        >
          <ChevronRightIcon data-icon="inline-start" className="transition-transform duration-fast ease-brand" />
          Advanced options
        </CollapsibleTrigger>
        <CollapsibleContent keepMounted>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="collapsible-advanced-rate">Rate limit</FieldLabel>
              <Input id="collapsible-advanced-rate" type="number" defaultValue={600} className="text-label-13-mono" />
              <FieldDescription>Requests per minute, per key.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="collapsible-advanced-ips">Allowed IP ranges</FieldLabel>
              <Input id="collapsible-advanced-ips" placeholder="185.12.0.0/24" className="text-label-13-mono" />
              <FieldDescription>Leave empty to accept requests from any address.</FieldDescription>
            </Field>
          </FieldGroup>
        </CollapsibleContent>
      </Collapsible>
      <Button type="submit" className="self-start">
        Create key
      </Button>
    </form>
  );
}
