import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  Label,
  Switch,
} from "@ovadev-gmbh/ui-januna";
import { AppShell, AppShellContent, AppShellHeader } from "@ovadev-gmbh/ui-januna/blocks";
import {
  Analytics01Icon,
  BubbleChatIcon,
  Calendar03Icon,
  Clock01Icon,
  RestaurantTableIcon,
  Settings01Icon,
  UserGroupIcon,
} from "@ovadev-gmbh/ui-januna/icons";

const nav = [
  {
    label: "Tonight",
    items: [
      { title: "Overview", icon: Analytics01Icon, href: "/" },
      { title: "Bookings", icon: Calendar03Icon, href: "/bookings", badge: "42" },
      { title: "Floor plan", icon: RestaurantTableIcon, href: "/floor" },
      { title: "Waitlist", icon: Clock01Icon, href: "/waitlist", badge: "5" },
    ],
  },
  {
    label: "Restaurant",
    items: [
      { title: "Guest book", icon: UserGroupIcon, href: "/guests" },
      { title: "Messages", icon: BubbleChatIcon, href: "/messages", badge: "2" },
      { title: "Settings", icon: Settings01Icon, href: "/settings", active: true },
    ],
  },
];

export default function SettingsExample() {
  return (
    <AppShell
      nav={nav}
      brand={<span className="text-heading-16">Trattoria Sole</span>}
      user={{ name: "Lena Brunner", email: "lena@trattoriasole.ch", settingsHref: "/settings", signOutHref: "/logout" }}
    >
      <AppShellHeader crumbs={["Trattoria Sole", "Settings"]} />
      <AppShellContent>
        <h1 className="text-heading-24">Settings</h1>
        <div className="flex max-w-2xl flex-col gap-space-6">
          <Card>
            <CardHeader>
              <CardTitle>Restaurant</CardTitle>
              <CardDescription>What guests see on their confirmation and on the booking page.</CardDescription>
            </CardHeader>
            <CardContent>
              <form id="settings-restaurant" onSubmit={(event) => event.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="settings-name">Name</FieldLabel>
                    <Input id="settings-name" name="name" defaultValue="Trattoria Sole" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="settings-email">Contact e-mail</FieldLabel>
                    <Input id="settings-email" name="email" type="email" defaultValue="hello@trattoriasole.ch" />
                    <FieldDescription>Replies to confirmations and reminders arrive here.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="settings-phone">Phone</FieldLabel>
                    <Input id="settings-phone" name="phone" type="tel" defaultValue="+41 44 123 45 67" />
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter className="gap-space-2">
              <Button type="submit" form="settings-restaurant">
                Save changes
              </Button>
              <Button type="reset" form="settings-restaurant" variant="outline">
                Discard
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Online bookings</CardTitle>
              <CardDescription>Guests book from your website and Google; you confirm nothing by hand.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between gap-space-4">
                <div className="flex flex-col gap-space-1">
                  <Label htmlFor="settings-online">Accept online bookings</Label>
                  <span className="text-copy-13 text-content-secondary">Turn off for a private event; existing bookings stay.</span>
                </div>
                <Switch id="settings-online" defaultChecked />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Delete workspace</CardTitle>
              <CardDescription>
                Removes Trattoria Sole, its 1'842 guests and every booking. Tonight's guests are not told.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="destructive">Delete workspace</Button>
            </CardFooter>
          </Card>
        </div>
      </AppShellContent>
    </AppShell>
  );
}
