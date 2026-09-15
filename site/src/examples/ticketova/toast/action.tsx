import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ticketova";

export default function ToastWithAction() {
  function archive() {
    const id = toast.add({
      title: "bergwerk-ag archived",
      description: "Its 12 members can no longer sign in.",
      actionProps: {
        children: "Undo",
        onClick: () => {
          toast.close(id);
          toast.add({ type: "success", title: "bergwerk-ag restored" });
        },
      },
    });
  }

  return (
    <Toaster>
      <Button variant="outline" onClick={archive}>
        Archive tenant
      </Button>
    </Toaster>
  );
}
