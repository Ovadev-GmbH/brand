import { Button } from "@ovadev-gmbh/ui-internal";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-internal/blocks";
import { SearchIcon } from "@ovadev-gmbh/ui-internal/icons";

export default function NotFoundExample() {
  return (
    <ErrorPage>
      <ErrorPageCode>404</ErrorPageCode>
      <ErrorPageTitle>Page not found</ErrorPageTitle>
      <ErrorPageDescription>
        There is nothing at /tenants/acme-logistics/invoices/INV-2026-0142. The invoice may have been voided, or the
        address has a typo.
      </ErrorPageDescription>
      <ErrorPageActions>
        <Button render={<a href="/" />}>Back to home</Button>
        <Button variant="outline" render={<a href="/search" />}>
          <SearchIcon data-icon="inline-start" />
          Search
        </Button>
      </ErrorPageActions>
    </ErrorPage>
  );
}
