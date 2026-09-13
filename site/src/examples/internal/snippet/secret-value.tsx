import { SecretValue } from "@ovadev-gmbh/ui-internal";

export default function SnippetSecretValue() {
  return (
    <dl className="m-0 grid w-full max-w-md grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3">
      <dt className="text-label-13 text-content-secondary">Live key</dt>
      <dd className="m-0 min-w-0">
        <SecretValue value="sk_live_4f9a2c81d0e7b36a" label="live API key" />
      </dd>
      <dt className="text-label-13 text-content-secondary">Signing secret</dt>
      <dd className="m-0 min-w-0">
        <SecretValue value="whsec_7Qm2vX9kLp4R" label="webhook signing secret" />
      </dd>
    </dl>
  );
}
