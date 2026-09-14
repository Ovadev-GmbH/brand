import { Button } from "@ovadev-gmbh/ui-ovadev";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function ServerErrorExample() {
  return (
    <ErrorPage className="min-h-[640px]">
      <ErrorPageCode>500</ErrorPageCode>
      <ErrorPageTitle>This didn't go through.</ErrorPageTitle>
      <ErrorPageDescription>
        The request failed on our side at 2026-09-14 14:32:07 CEST. Nothing was saved. Quote the request ID if you
        write to us.
      </ErrorPageDescription>
      <p className="text-label-12-mono text-content-tertiary">req_01J7Y4K3Q8ZV2N9M6B1C5D7E8F</p>
      <ErrorPageActions>
        <Button onClick={() => location.reload()}>Try again</Button>
        <Button variant="outline" render={<a href="mailto:hello@ova.dev" />}>
          Write to us
        </Button>
      </ErrorPageActions>
    </ErrorPage>
  );
}
