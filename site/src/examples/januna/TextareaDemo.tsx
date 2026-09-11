import { Button, Label, Textarea } from "@ovadev-gmbh/ui-januna";

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <div className="grid gap-2">
        <Label htmlFor="kitchen-note">Note for the kitchen</Label>
        <Textarea
          id="kitchen-note"
          placeholder="Nut allergy at seat 3, birthday dessert after the main course."
        />
        <p className="text-copy-13 text-content-secondary">
          Visible to the kitchen and the floor team, never to the guest.
        </p>
      </div>
      <div className="grid gap-2">
        <Textarea placeholder="Message to all guests booked tonight" />
        <Button type="button" className="w-fit">
          Send message
        </Button>
      </div>
    </div>
  );
}
