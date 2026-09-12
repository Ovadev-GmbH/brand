import { SecretValue, Snippet } from "@ovadev-gmbh/ui-internal";

export default function SnippetDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Snippet text="ova deploy api-gateway --env production" />
      <Snippet
        text={[
          "ova tenants suspend acme-gmbh --reason unpaid",
          "ova invoices list --tenant acme-gmbh --status open",
        ]}
      />
      <Snippet
        variant="success"
        prompt={false}
        text="Promoted b31e07d to production in 42s"
      />
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-label-13 text-content-secondary">API key</span>
        <SecretValue value="int_live_4f8c2a91d0e7b3" label="API key" />
      </div>
    </div>
  );
}
