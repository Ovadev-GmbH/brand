import { Button } from "@ovadev-gmbh/ui-ticketova";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-ticketova/blocks";

export default function ForbiddenExample() {
  return (
    <ErrorPage>
      <ErrorPageCode>403</ErrorPageCode>
      <ErrorPageTitle>You don't have access</ErrorPageTitle>
      <ErrorPageDescription>
        Billing for bergwerk-ag is limited to the finance role. You are signed in as robin@ova.dev with the operations
        role.
      </ErrorPageDescription>
      <ErrorPageActions>
        <Button render={<a href="/access/request?scope=billing:bergwerk-ag" />}>Request access</Button>
        <Button variant="outline" render={<a href="/sign-out?next=/tenants/bergwerk-ag/billing" />}>
          Sign in as someone else
        </Button>
      </ErrorPageActions>
    </ErrorPage>
  );
}
