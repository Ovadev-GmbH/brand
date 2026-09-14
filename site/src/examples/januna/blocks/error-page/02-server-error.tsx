import { Button } from "@ovadev-gmbh/ui-januna";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-januna/blocks";

export default function ServerErrorExample() {
  return (
    <ErrorPage className="min-h-[640px]">
      <ErrorPageCode>500</ErrorPageCode>
      <ErrorPageTitle>Something went wrong</ErrorPageTitle>
      <ErrorPageDescription>
        Tonight's bookings are safe. Try again in a moment; if it keeps happening, send us the request id below.
      </ErrorPageDescription>
      <p className="text-label-12-mono text-content-tertiary">req_01J7Q4Z9K3M2N8P5R6S7T8U9V0</p>
      <ErrorPageActions>
        <Button onClick={() => window.location.reload()}>Try again</Button>
        <Button variant="outline" render={<a href="mailto:support@januna.ch" />}>
          Contact support
        </Button>
      </ErrorPageActions>
    </ErrorPage>
  );
}
