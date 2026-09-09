import { Dialog } from "@ovadev-gmbh/ui-januna";

export default function DialogBasic() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>View notifications</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <div>
            <Dialog.Title>Notifications</Dialog.Title>
            <Dialog.Description>
              You are all caught up. Good job!
            </Dialog.Description>
          </div>
          <div>
            <Dialog.Close>Close</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
