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
          <Input id="drawer-responsive-email" type="email" placeholder="beni@ova.dev" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="drawer-responsive-role">Role</FieldLabel>
          <NativeSelect id="drawer-responsive-role" className="w-full" defaultValue="author">
            <NativeSelectOption value="editor">Editor</NativeSelectOption>
            <NativeSelectOption value="author">Author</NativeSelectOption>
            <NativeSelectOption value="reviewer">Reviewer</NativeSelectOption>
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
  const title = "Invite an author";
  const description = "They get an e-mail with a link to the blog editor that works for 7 days.";

  if (desktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="outline" />}>Invite author</DialogTrigger>
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
      <DrawerTrigger render={<Button variant="outline" />}>Invite author</DrawerTrigger>
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
