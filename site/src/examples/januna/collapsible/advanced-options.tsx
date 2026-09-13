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
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function CollapsibleAdvancedOptions() {
  return (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Field>
        <FieldLabel htmlFor="collapsible-advanced-guest">Guest name</FieldLabel>
        <Input id="collapsible-advanced-guest" placeholder="Anna Keller" />
      </Field>
      <Collapsible className="flex flex-col gap-3">
        <CollapsibleTrigger
          render={<Button variant="ghost" size="sm" className="self-start data-panel-open:[&_svg]:rotate-90" />}
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            strokeWidth={2}
            data-icon="inline-start"
            className="transition-transform duration-fast ease-brand"
          />
          More options
        </CollapsibleTrigger>
        <CollapsibleContent keepMounted>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="collapsible-advanced-turn">Turn time</FieldLabel>
              <Input id="collapsible-advanced-turn" type="number" defaultValue={120} className="text-label-14-mono" />
              <FieldDescription>Minutes the table is held for this party.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="collapsible-advanced-deposit">Deposit per guest</FieldLabel>
              <Input id="collapsible-advanced-deposit" defaultValue="CHF 20.00" className="text-label-14-mono" />
              <FieldDescription>Leave at CHF 0.00 to book without a deposit.</FieldDescription>
            </Field>
          </FieldGroup>
        </CollapsibleContent>
      </Collapsible>
      <Button type="submit" className="self-start">
        Create booking
      </Button>
    </form>
  );
}
