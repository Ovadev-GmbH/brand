import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@ovadev-gmbh/ui-ovadev";
import { GlobeIcon } from "lucide-react";

export default function AlertDialogWithMedia() {
  const [open, setOpen] = React.useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={<Button variant="outline" />}>Publish page</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <GlobeIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Publish the brand page?</AlertDialogTitle>
          <AlertDialogDescription>
            <span className="text-label-13-mono">/brand/colour</span> goes live on ova.dev in DE and EN. The previous
            version stays in the history.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setOpen(false)}>Publish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
