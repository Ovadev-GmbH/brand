import { Button } from "@ovadev-gmbh/ui-januna";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-januna/blocks";

export default function NotFoundExample() {
  return (
    <ErrorPage>
      <ErrorPageCode>404</ErrorPageCode>
      <ErrorPageTitle>Page not found</ErrorPageTitle>
      <ErrorPageDescription>
        The address does not lead anywhere. The booking may have been moved, or the link was copied incompletely.
      </ErrorPageDescription>
      <ErrorPageActions>
        <Button render={<a href="/" />}>Back to home</Button>
        <Button variant="outline" render={<a href="/search" />}>
          Search
        </Button>
      </ErrorPageActions>
    </ErrorPage>
  );
}
