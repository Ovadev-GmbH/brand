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
        <FieldLabel htmlFor="collapsible-advanced-name">Venue</FieldLabel>
        <Input id="collapsible-advanced-name" placeholder="Strandbad Türlersee" />
      </Field>
      <Collapsible className="flex flex-col gap-3">
        <CollapsibleTrigger
          render={<Button variant="ghost" size="sm" className="self-start data-panel-open:[&_svg]:rotate-90" />}
        >
          <ChevronRightIcon data-icon="inline-start" className="transition-transform duration-fast ease-brand" />
          More details
        </CollapsibleTrigger>
        <CollapsibleContent keepMounted>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="collapsible-advanced-rate">Visitors per season</FieldLabel>
              <Input id="collapsible-advanced-rate" type="number" defaultValue={48000} className="text-label-13-mono" />
              <FieldDescription>An estimate is enough.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="collapsible-advanced-ips">Website</FieldLabel>
              <Input id="collapsible-advanced-ips" placeholder="www.hausen.ch" className="text-label-13-mono" />
              <FieldDescription>Leave empty if the venue has no site of its own.</FieldDescription>
            </Field>
          </FieldGroup>
        </CollapsibleContent>
      </Collapsible>
      <Button type="submit" className="self-start">
        Request a quote
      </Button>
    </form>
  );
}
