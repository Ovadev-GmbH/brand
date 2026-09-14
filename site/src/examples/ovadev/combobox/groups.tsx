import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@ovadev-gmbh/ui-ovadev";

const events = [
  { value: "Billing", items: ["invoice.created", "invoice.voided", "payment.failed"] },
  { value: "Access", items: ["api_key.created", "api_key.revoked", "member.invited"] },
  { value: "Deployments", items: ["deployment.started", "deployment.succeeded", "deployment.rolled_back"] },
];

export default function ComboboxGroups() {
  return (
    <Combobox items={events}>
      <ComboboxInput placeholder="Filter by event" aria-label="Event type" className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No event type matches.</ComboboxEmpty>
        <ComboboxList>
          {(group: (typeof events)[number], index: number) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(event: string) => (
                  <ComboboxItem key={event} value={event}>
                    <span className="text-label-13-mono">{event}</span>
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < events.length - 1 ? <ComboboxSeparator /> : null}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
