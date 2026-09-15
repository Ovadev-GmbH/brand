import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ticketova";

const steps = ["Creating the new key", "Moving 4 services to the new key", "Revoking the old key"];

export default function ToastUpdate() {
  function rotate() {
    const id = toast.add({
      type: "loading",
      title: "Rotating sk_live_4f9a…",
      description: `Step 1 of 3 · ${steps[0]}`,
      timeout: 0,
    });
    // Stands in for the rotation reporting its progress.
    setTimeout(() => toast.update(id, { description: `Step 2 of 3 · ${steps[1]}` }), 1200);
    setTimeout(() => toast.update(id, { description: `Step 3 of 3 · ${steps[2]}` }), 2400);
    setTimeout(
      () =>
        toast.update(id, {
          type: "success",
          title: "Key rotated",
          description: "sk_live_9c01… is live. The old key no longer authenticates.",
          timeout: 5000,
        }),
      3600,
    );
  }

  return (
    <Toaster>
      <Button variant="outline" onClick={rotate}>
        Rotate API key
      </Button>
    </Toaster>
  );
}
