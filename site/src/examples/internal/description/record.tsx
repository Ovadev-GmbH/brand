import { Button, Description, DescriptionList, StatusDot } from "@ovadev-gmbh/ui-internal";

export default function DescriptionRecord() {
  return (
    <section className="flex w-full max-w-xl flex-col gap-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="m-0 text-heading-16">
            Deployment <span className="text-label-14-mono">d-8f3a21c</span>
          </h3>
          <StatusDot state="ready" label titlePrefix="This deployment" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            View logs
          </Button>
          <Button variant="outline" size="sm">
            Roll back
          </Button>
        </div>
      </header>
      <DescriptionList columns={3}>
        <Description title="Service" content="api-gateway" />
        <Description title="Environment" content="Production" />
        <Description title="Region" content={<span className="text-label-14-mono">ch-zrh-1</span>} />
        <Description title="Commit" content={<span className="text-label-14-mono">8f3a21c</span>} />
        <Description title="Deployed by" content="robin@ova.dev" />
        <Description title="Finished" content={<span className="text-label-14-mono">2026-09-13 14:02 UTC</span>} />
      </DescriptionList>
    </section>
  );
}
