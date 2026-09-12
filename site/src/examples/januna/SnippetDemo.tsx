import { SecretValue, Snippet } from "@ovadev-gmbh/ui-januna";

export default function SnippetDemo() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Snippet text="bunx januna bookings export --shift tonight" />
      <Snippet
        text={[
          "bunx januna tables block 12 --until 21:00",
          "bunx januna bookings list --table 12",
        ]}
      />
      <Snippet
        variant="success"
        prompt={false}
        text="Exported 48 bookings to tonight.csv"
      />
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-label-13 text-content-secondary">API key</span>
        <SecretValue value="jan_live_4f8c2a91d0e7b3" label="API key" />
      </div>
    </div>
  );
}
