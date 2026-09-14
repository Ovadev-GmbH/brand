import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ovadev";

export default function ToastTimeout() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "error",
            title: "Connection lost",
            description: "Your draft stays in this tab and is saved when the connection is back.",
            timeout: 0,
            priority: "high",
          })
        }
      >
        Simulate lost connection
      </Button>
    </Toaster>
  );
}
