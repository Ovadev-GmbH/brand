import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ovadev";

const steps = ["Rendering the English page", "Rendering the German page", "Refreshing the blog index"];

export default function ToastUpdate() {
  function publish() {
    const id = toast.add({
      type: "loading",
      title: "Publishing Pool season 2026",
      description: `Step 1 of 3 · ${steps[0]}`,
      timeout: 0,
    });
    // Stands in for the build reporting its progress.
    setTimeout(() => toast.update(id, { description: `Step 2 of 3 · ${steps[1]}` }), 1200);
    setTimeout(() => toast.update(id, { description: `Step 3 of 3 · ${steps[2]}` }), 2400);
    setTimeout(
      () =>
        toast.update(id, {
          type: "success",
          title: "Post published",
          description: "ova.dev/blog/pool-season-2026 is live in both languages.",
          timeout: 5000,
        }),
      3600,
    );
  }

  return (
    <Toaster>
      <Button variant="outline" onClick={publish}>
        Publish post
      </Button>
    </Toaster>
  );
}
