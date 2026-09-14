import { Button, Textarea } from "@ovadev-gmbh/ui-ovadev";

export default function TextareaWithButton() {
  return (
    <div className="grid w-96 gap-2">
      <Textarea aria-label="Message to Ovadev" placeholder="Write to us" />
      <Button className="justify-self-end">Send message</Button>
    </div>
  );
}
