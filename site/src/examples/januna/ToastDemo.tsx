import { Button, Toaster, toast } from "@ovadev-gmbh/ui-januna";

export default function ToastDemo() {
  return (
    <Toaster>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: "success",
              title: "Booking confirmed",
              description: "Table 12 for Nora Keller, tonight at 19:30.",
            })
          }
        >
          Confirm booking
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Table 7 released",
              description: "It is back in online booking for tonight.",
              actionProps: {
                children: "Undo",
                onClick: () => toast.add({ title: "Table 7 is reserved again" }),
              },
            })
          }
        >
          Release table
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const id = toast.add({
              type: "loading",
              title: "Sending reminders",
              description: "18 guests are booked for the dinner shift.",
              timeout: 0,
            });
            window.setTimeout(() => {
              toast.update(id, {
                type: "success",
                title: "Reminders sent",
                description: "18 guests were reminded by SMS.",
                timeout: 4000,
              });
            }, 1500);
          }}
        >
          Send reminders
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: "error",
              title: "Table 12 is double-booked",
              description: "Two parties at 19:30. Move one before service.",
            })
          }
        >
          Report conflict
        </Button>
      </div>
    </Toaster>
  );
}
