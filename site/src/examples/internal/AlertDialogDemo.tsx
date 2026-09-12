import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@ovadev-gmbh/ui-internal";

export default function AlertDialogDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          Revoke API key
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke this API key?</AlertDialogTitle>
            <AlertDialogDescription>
              <span className="text-label-13-mono">ok_live_…4f9c</span> stops
              working immediately. 3 integrations used it in the last 24 hours.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep key</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Revoke</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
