import { Button } from "@ovadev-gmbh/ui-ovadev";
import { ErrorPage, ErrorPageActions, ErrorPageCode, ErrorPageDescription, ErrorPageTitle } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function ForbiddenExample() {
  return (
    <ErrorPage className="min-h-[640px]">
      <ErrorPageCode>403</ErrorPageCode>
      <ErrorPageTitle>This page isn't yours.</ErrorPageTitle>
      <ErrorPageDescription>
        Editing the blog is limited to the team. You are signed in as guest@ova.dev, and a guest reads only.
      </ErrorPageDescription>
      <ErrorPageActions>
        <Button render={<a href="/access/request?scope=blog" />}>Request access</Button>
        <Button variant="outline" render={<a href="/sign-out?next=/blog" />}>
          Sign in as someone else
        </Button>
      </ErrorPageActions>
    </ErrorPage>
  );
}
