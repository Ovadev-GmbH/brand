import { Description, DescriptionList, SecretValue, StatusDot } from "@ovadev-gmbh/ui-internal";

export default function DescriptionContent() {
  return (
    <DescriptionList className="w-full max-w-md">
      <Description title="Status" content={<StatusDot state="ready" label titlePrefix="This tenant" />} />
      <Description title="Region" content={<span className="text-label-14-mono">ch-zrh-1</span>} />
      <Description
        title="Billing contact"
        content={
          <a href="mailto:billing@helvetia-labs.ch" className="text-content-brand underline-offset-4 hover:underline">
            billing@helvetia-labs.ch
          </a>
        }
      />
      <Description title="API key" content={<SecretValue value="sk_live_9c2e41b7d08a53f6" label="API key" />} />
    </DescriptionList>
  );
}
