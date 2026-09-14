import * as React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  NativeSelect,
  NativeSelectOption,
} from "@ovadev-gmbh/ui-ovadev";

function useMediaQuery(query: string) {
  return React.useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function InviteForm({ onDone }: { onDone: () => void }) {
  function submit(e: React.FormEvent) {
    e.preventDefault();
    onDone();
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="drawer-responsive-email">E-mail</FieldLabel>
          <Input id="drawer-responsive-email" type="email" placeholder="lena@ova.dev" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="drawer-responsive-role">Role</FieldLabel>
          <NativeSelect id="drawer-responsive-role" className="w-full" defaultValue="support">
            <NativeSelectOption value="admin">Admin</NativeSelectOption>
            <NativeSelectOption value="support">Support</NativeSelectOption>
            <NativeSelectOption value="billing">Billing</NativeSelectOption>
          </NativeSelect>
        </Field>
      </FieldGroup>
      <Button type="submit">Send invite</Button>
    </form>
  );
}

export default function DrawerResponsive() {
  const [open, setOpen] = React.useState(false);
  const desktop = useMediaQuery("(min-width: 768px)");
  const title = "Invite a team member";
  const description = "They get an e-mail with a link that works for 7 days.";

  if (desktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="outline" />}>Invite member</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <InviteForm onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>Invite member</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <InviteForm onDone={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
