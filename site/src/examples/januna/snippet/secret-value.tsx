import { SecretValue } from "@ovadev-gmbh/ui-januna";

export default function SnippetSecretValue() {
  return (
    <dl className="m-0 grid w-full max-w-md grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3">
      <dt className="text-label-13 text-content-secondary">Live API key</dt>
      <dd className="m-0 min-w-0">
        <SecretValue value="jan_live_4f8c2a91d0e7b3" label="live API key" />
      </dd>
      <dt className="text-label-13 text-content-secondary">Payment webhook secret</dt>
      <dd className="m-0 min-w-0">
        <SecretValue value="whsec_7Qm2vX9kLp4R" label="payment webhook secret" />
      </dd>
    </dl>
  );
}
