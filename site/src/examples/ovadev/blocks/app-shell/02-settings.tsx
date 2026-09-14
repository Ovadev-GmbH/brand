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
} from "@ovadev-gmbh/ui-ovadev";
import { AppShell, AppShellContent, AppShellHeader } from "@ovadev-gmbh/ui-ovadev/blocks";
import {
  BellIcon,
  FileTextIcon,
  GlobeIcon,
  MailIcon,
  NewspaperIcon,
  SettingsIcon,
  SwatchBookIcon,
  UsersIcon,
} from "@ovadev-gmbh/ui-ovadev/icons";

const nav = [
  {
    label: "Site",
    items: [
      { title: "Pages", icon: FileTextIcon, href: "/pages" },
      { title: "Blog", icon: NewspaperIcon, href: "/blog" },
      { title: "Brand", icon: SwatchBookIcon, href: "/brand" },
    ],
  },
  {
    label: "Settings",
    items: [
      { title: "General", icon: SettingsIcon, href: "/settings", active: true },
      { title: "People", icon: UsersIcon, href: "/settings/people" },
      { title: "Contact", icon: MailIcon, href: "/settings/contact", badge: "3" },
      { title: "Notifications", icon: BellIcon, href: "/settings/notifications" },
      { title: "Domains", icon: GlobeIcon, href: "/settings/domains" },
    ],
  },
];

export default function SettingsExample() {
  return (
    // The sidebar is fixed to the viewport by default; absolute keeps it in this box.
    <AppShell
      className="relative h-[720px] min-h-0 overflow-hidden"
      sidebarClassName="absolute h-full"
      nav={nav}
      brand="Ovadev"
      user={{ name: "Robin Markant", email: "robin@ova.dev" }}
    >
      <AppShellHeader crumbs={["Settings", "General"]} />
      <AppShellContent>
        <h1 className="text-heading-20">General</h1>
        <form className="flex max-w-2xl flex-col gap-space-6" onSubmit={(event) => event.preventDefault()}>
          <Card>
            <CardHeader>
              <CardTitle>Site</CardTitle>
              <CardDescription>How the site names itself in the browser tab, in e-mails and in the imprint.</CardDescription>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="settings-name">Site name</FieldLabel>
                  <Input id="settings-name" name="name" defaultValue="Ovadev" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="settings-language">Default language</FieldLabel>
                  <Input id="settings-language" name="language" defaultValue="DE" className="text-label-13-mono" spellCheck={false} />
                  <FieldDescription>DE or EN. The other language is reached through the switch in the header: ova.dev/en/…</FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="settings-contact-email">Contact e-mail</FieldLabel>
                  <Input id="settings-contact-email" name="contactEmail" type="email" defaultValue="hello@ova.dev" />
                  <FieldDescription>Receives every request from the contact form and the replies to the newsletter.</FieldDescription>
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
              <CardTitle>Blog</CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldLabel htmlFor="settings-publish-blog">Publish blog</FieldLabel>
                    <FieldDescription>The blog is linked from the header and listed in the sitemap.</FieldDescription>
                  </FieldContent>
                  <Switch id="settings-publish-blog" name="publishBlog" defaultChecked />
                </Field>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldLabel htmlFor="settings-newsletter">Newsletter sign-up</FieldLabel>
                    <FieldDescription>Shows the sign-up form at the end of every post.</FieldDescription>
                  </FieldContent>
                  <Switch id="settings-newsletter" name="newsletter" />
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reset site</CardTitle>
              <CardDescription>
                Removes every page, post and contact request and restores the defaults. The imprint and the privacy notice
                are kept, as the law requires.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-end">
              <Button type="button" variant="destructive">
                Reset site
              </Button>
            </CardFooter>
          </Card>
        </form>
      </AppShellContent>
    </AppShell>
  );
}
