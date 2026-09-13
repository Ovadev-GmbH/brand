import { Button, Toaster, toast } from "@ovadev-gmbh/ui-januna";

export default function ToastDemo() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Reminders sent",
            description: "18 guests booked for tonight got a text with their time and table.",
          })
        }
      >
        Send reminders
      </Button>
    </Toaster>
  );
}
