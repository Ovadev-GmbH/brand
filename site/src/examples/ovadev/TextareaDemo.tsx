import { Textarea } from "@ovadev-gmbh/ui-ovadev";

export default function TextareaDemo() {
  return (
    <Textarea
      className="w-full max-w-sm"
      aria-label="Message"
      placeholder="What you run, how many visitors a season, what you need from us"
    />
  );
}
