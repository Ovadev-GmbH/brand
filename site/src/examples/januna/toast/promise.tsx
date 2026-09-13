import { Button, Toaster, toast } from "@ovadev-gmbh/ui-januna";

// Stands in for the request: resolves with the number of covers in the report.
const exportCovers = () => new Promise<number>((resolve) => setTimeout(() => resolve(412), 1800));

export default function ToastPromise() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(exportCovers(), {
            loading: "Exporting this week's covers…",
            success: (count) => ({ title: "Covers report ready", description: `${count} covers, Monday to Sunday, sent to the manager.` }),
            error: "Export failed. Nothing was sent.",
          })
        }
      >
        Export covers
      </Button>
    </Toaster>
  );
}
