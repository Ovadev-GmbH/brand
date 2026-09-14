import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ovadev";

export default function ToastWithAction() {
  function unpublish() {
    const id = toast.add({
      title: "Pool season 2026 unpublished",
      description: "The post is no longer on ova.dev. Its link returns 404.",
      actionProps: {
        children: "Undo",
        onClick: () => {
          toast.close(id);
          toast.add({ type: "success", title: "Pool season 2026 is back online" });
        },
      },
    });
  }

  return (
    <Toaster>
      <Button variant="outline" onClick={unpublish}>
        Unpublish post
      </Button>
    </Toaster>
  );
}
