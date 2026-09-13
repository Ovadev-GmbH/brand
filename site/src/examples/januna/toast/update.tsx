import { Button, Toaster, toast } from "@ovadev-gmbh/ui-januna";

const steps = ["Settling deposits", "Releasing tables", "Sending the shift report"];

export default function ToastUpdate() {
  function closeShift() {
    const id = toast.add({
      type: "loading",
      title: "Closing the dinner shift",
      description: `Step 1 of 3 · ${steps[0]}`,
      timeout: 0,
    });
    // Stands in for the close-out reporting its progress.
    setTimeout(() => toast.update(id, { description: `Step 2 of 3 · ${steps[1]}` }), 1200);
    setTimeout(() => toast.update(id, { description: `Step 3 of 3 · ${steps[2]}` }), 2400);
    setTimeout(
      () =>
        toast.update(id, {
          type: "success",
          title: "Dinner shift closed",
          description: "96 covers. CHF 1'240.00 in deposits settled.",
          timeout: 5000,
        }),
      3600,
    );
  }

  return (
    <Toaster>
      <Button variant="outline" onClick={closeShift}>
        Close shift
      </Button>
    </Toaster>
  );
}
