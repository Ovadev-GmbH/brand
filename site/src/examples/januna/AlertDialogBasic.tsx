import { AlertDialog } from "@ovadev-gmbh/ui-januna";

export default function AlertDialogBasic() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger data-color="red">
        Discard draft
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <div>
            <AlertDialog.Title>Discard draft?</AlertDialog.Title>
            <AlertDialog.Description>
              You can't undo this action.
            </AlertDialog.Description>
          </div>
          <div>
            <AlertDialog.Close>Cancel</AlertDialog.Close>
            <AlertDialog.Close data-color="red">
              Discard
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
