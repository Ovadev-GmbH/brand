import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  Switch,
} from "@ovadev-gmbh/ui-ticketova";
import { AppShell, AppShellContent, AppShellHeader } from "@ovadev-gmbh/ui-ticketova/blocks";
import { BellIcon, BuildingsIcon, KeyIcon, ReceiptIcon, RocketIcon, ScrollIcon, GearIcon, UsersIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const nav = [
  {
    label: "Operations",
    items: [
      { title: "Tenants", icon: BuildingsIcon, href: "/tenants" },
      { title: "Deployments", icon: RocketIcon, href: "/deployments" },
      { title: "Invoices", icon: ReceiptIcon, href: "/invoices", badge: "12" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { title: "General", icon: GearIcon, href: "/settings", active: true },
      { title: "Members", icon: UsersIcon, href: "/settings/members" },
      { title: "Notifications", icon: BellIcon, href: "/settings/notifications" },
      { title: "API keys", icon: KeyIcon, href: "/settings/api-keys" },
      { title: "Audit log", icon: ScrollIcon, href: "/settings/audit" },
    ],
  },
];

export default function SettingsExample() {
  return (
    <AppShell
      nav={nav}
      brand="TICKETOVA"
      user={{ name: "Robin Markant", email: "robin@ova.dev", settingsHref: "/settings", signOutHref: "/logout" }}
    >
      <AppShellHeader crumbs={["Workspace", "General"]} />
      <AppShellContent>
        <h1 className="text-heading-20">General</h1>
        <form className="flex max-w-2xl flex-col gap-space-6" onSubmit={(event) => event.preventDefault()}>
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>How the workspace appears in invoices, e-mails and the audit log.</CardDescription>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="settings-name">Workspace name</FieldLabel>
                  <Input id="settings-name" name="name" defaultValue="Ovadev GmbH" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="settings-slug">Slug</FieldLabel>
                  <Input id="settings-slug" name="slug" defaultValue="ovadev" className="text-label-13-mono" spellCheck={false} />
                  <FieldDescription>Part of every URL: intern.ova.dev/ovadev/… Changing it breaks old links.</FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="settings-billing-email">Billing e-mail</FieldLabel>
                  <Input id="settings-billing-email" name="billingEmail" type="email" defaultValue="finance@ova.dev" />
                  <FieldDescription>Receives every invoice and dunning notice.</FieldDescription>
                </Field>
              </FieldGroup>
            </CardContent>
            <CardFooter className="justify-end gap-space-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Deployments</CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldLabel htmlFor="settings-auto-deploy">Auto-deploy main</FieldLabel>
                    <FieldDescription>Every push to main goes to production after the checks pass.</FieldDescription>
                  </FieldContent>
                  <Switch id="settings-auto-deploy" name="autoDeploy" defaultChecked />
                </Field>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldLabel htmlFor="settings-require-approval">Require approval outside office hours</FieldLabel>
                    <FieldDescription>Between 18:00 and 07:00 CET a second person confirms each deployment.</FieldDescription>
                  </FieldContent>
                  <Switch id="settings-require-approval" name="requireApproval" />
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Delete workspace</CardTitle>
              <CardDescription>
                Removes every tenant, deployment and invoice in ovadev after 30 days. The audit log is kept for 10 years as
                the law requires.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-end">
              <Button type="button" variant="destructive">
                Delete workspace
              </Button>
            </CardFooter>
          </Card>
        </form>
      </AppShellContent>
    </AppShell>
  );
}
