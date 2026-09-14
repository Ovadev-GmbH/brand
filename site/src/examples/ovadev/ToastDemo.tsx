import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ovadev";

export default function ToastDemo() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Message sent",
            description: "Your request went to hello@ova.dev. We answer within two working days.",
          })
        }
      >
        Send message
      </Button>
    </Toaster>
  );
}
