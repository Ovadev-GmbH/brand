import { Button, Textarea } from "@ovadev-gmbh/ui-januna";

export default function TextareaWithButton() {
  return (
    <div className="grid w-96 gap-2">
      <Textarea aria-label="Message to the waitlist" placeholder="A table for four is free at 20:15." />
      <Button className="justify-self-end">Send to waitlist</Button>
    </div>
  );
}
