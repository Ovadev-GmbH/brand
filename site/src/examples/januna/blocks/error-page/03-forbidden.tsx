import { Button } from "@ovadev-gmbh/ui-januna";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-januna/blocks";

export default function ForbiddenExample() {
  return (
    <ErrorPage className="min-h-[640px]">
      <ErrorPageCode>403</ErrorPageCode>
      <ErrorPageTitle>You don't have access</ErrorPageTitle>
      <ErrorPageDescription>
        Only managers of Trattoria Sole can open its settings. Ask a manager to add you, or sign in with another account.
      </ErrorPageDescription>
      <ErrorPageActions>
        <Button render={<a href="/access/request" />}>Request access</Button>
        <Button variant="outline" render={<a href="/login" />}>
          Sign in as someone else
        </Button>
      </ErrorPageActions>
    </ErrorPage>
  );
}
