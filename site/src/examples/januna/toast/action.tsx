import { Button, Toaster, toast } from "@ovadev-gmbh/ui-januna";

export default function ToastWithAction() {
  function moveToWaitlist() {
    const id = toast.add({
      title: "Keller moved to the waitlist",
      description: "Party of 2, third in line, quoted 25 min.",
      actionProps: {
        children: "Undo",
        onClick: () => {
          toast.close(id);
          toast.add({ type: "success", title: "Keller is back at T4" });
        },
      },
    });
  }

  return (
    <Toaster>
      <Button variant="outline" onClick={moveToWaitlist}>
        Move to waitlist
      </Button>
    </Toaster>
  );
}
