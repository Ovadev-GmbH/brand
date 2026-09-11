import { Button, Label, Textarea } from "@ovadev-gmbh/ui-januna";

export default function TextareaDemo() {
  return (
    <div className="grid max-w-[640px] gap-4">
      <Textarea placeholder="Special requests for this booking" />

      <div className="grid gap-2">
        <Label htmlFor="kitchen-note">Note for the kitchen</Label>
        <Textarea
          id="kitchen-note"
          placeholder="Nut allergy at seat 3, birthday dessert after the main course."
        />
        <p className="text-sm text-muted-foreground">
          Visible to the kitchen and the floor team, never to the guest.
        </p>
      </div>

      <div className="grid gap-2">
        <Textarea aria-invalid defaultValue="Table for" />
        <p className="text-sm text-destructive">Tell us the party size too.</p>
      </div>

      <Textarea disabled placeholder="Locked once the shift has started" />

      <div className="grid gap-2">
        <Textarea placeholder="Message to all guests booked tonight" />
        <Button type="button" className="w-fit">Send message</Button>
      </div>
    </div>
  );
}
