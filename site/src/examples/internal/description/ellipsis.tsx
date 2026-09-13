import { Description, DescriptionList } from "@ovadev-gmbh/ui-internal";

export default function DescriptionEllipsis() {
  return (
    <DescriptionList columns={2} className="w-72">
      <Description
        title="Last deployment"
        content="8f3a21c Retry failed invoice webhooks with exponential backoff"
        ellipsis
        className="col-span-2"
      />
      <Description
        title="Webhook endpoint"
        content="https://hooks.helvetia-labs.ch/ova/billing/invoice-events"
        ellipsis
        className="col-span-2"
      />
    </DescriptionList>
  );
}
