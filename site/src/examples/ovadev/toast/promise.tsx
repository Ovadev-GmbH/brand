import { Button, Toaster, toast } from "@ovadev-gmbh/ui-ovadev";

// Stands in for the request: resolves with the number of subscribers the issue went to.
const sendNewsletter = () => new Promise<number>((resolve) => setTimeout(() => resolve(412), 1800));

export default function ToastPromise() {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(sendNewsletter(), {
            loading: "Sending the September issue…",
            success: (count) => ({ title: "Issue sent", description: `${count} subscribers, German and English.` }),
            error: "Sending failed. Nothing went out.",
          })
        }
      >
        Send newsletter
      </Button>
    </Toaster>
  );
}
