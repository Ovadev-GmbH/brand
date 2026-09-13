import { Snippet } from "@ovadev-gmbh/ui-internal";

export default function SnippetMultipleLines() {
  return (
    <div className="w-full max-w-xl">
      <Snippet
        text={[
          "ova login",
          "ova tenants use acme-logistics",
          "ova deploy api-gateway --env production --region ch-zrh-1",
        ]}
      />
    </div>
  );
}
