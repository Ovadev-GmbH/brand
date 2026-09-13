import { Button, Toaster, toast } from "@ovadev-gmbh/ui-januna";

const messages = [
  { type: "success", title: "Booking confirmed", description: "Table 12 for Nora Keller, tonight at 19:30." },
  { type: "info", title: "Terrace closes at 22:00", description: "Bookings after that are placed in the main room." },
  { type: "warning", title: "Deposit not paid", description: "Lina Brunner, party of 6 at 20:15. The link expires at 18:00." },
  { type: "error", title: "SMS not sent", description: "The number for Amir Haddad was rejected. Call him instead." },
  { type: "loading", title: "Syncing tonight's bookings", description: "24 bookings from the online widget." },
];

export default function ToastTypes() {
  return (
    <Toaster>
      <div className="flex flex-wrap items-center gap-2">
        {messages.map(({ type, title, description }) => (
          <Button key={type} variant="outline" className="capitalize" onClick={() => toast.add({ type, title, description })}>
            {type}
          </Button>
        ))}
      </div>
    </Toaster>
  );
}
