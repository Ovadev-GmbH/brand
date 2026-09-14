import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ovadev";

export default function ToastTimeout() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "error",
            title: "Connection to ch-zrh-1 lost",
            description: "Changes stay in this tab and are saved when the connection is back.",
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
