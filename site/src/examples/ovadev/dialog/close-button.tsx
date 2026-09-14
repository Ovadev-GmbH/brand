import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from "@ovadev-gmbh/ui-ovadev";

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Share draft</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share draft</DialogTitle>
          <DialogDescription>Anyone with the link can read the draft until the post is published.</DialogDescription>
        </DialogHeader>
        <Input
          className="text-label-13-mono"
          defaultValue="https://ova.dev/blog/draft/9fK2qL"
          aria-label="Draft link"
          readOnly
        />
        <DialogFooter>
          <DialogClose render={<Button />}>Done</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
