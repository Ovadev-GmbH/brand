import { Button } from "@ovadev-gmbh/ui-ovadev";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-ovadev/blocks";
import { SearchIcon } from "@ovadev-gmbh/ui-ovadev/icons";

export default function NotFoundExample() {
  return (
    <ErrorPage>
      <ErrorPageCode>404</ErrorPageCode>
      <ErrorPageTitle>This page doesn't fit.</ErrorPageTitle>
      <ErrorPageDescription>
        There is nothing at /blog/2026/season-opening-tuerlersee. The post may have moved, or the address has a typo.
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
