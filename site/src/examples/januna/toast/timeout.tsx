import { Button, Toaster, toast } from "@ovadev-gmbh/ui-januna";

export default function ToastTimeout() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "error",
            title: "Connection lost",
            description: "New bookings stay on this tablet and are sent when the connection is back.",
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
