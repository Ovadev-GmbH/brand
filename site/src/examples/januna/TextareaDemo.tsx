import { Textarea } from "@ovadev-gmbh/ui-januna";

export default function TextareaDemo() {
  return (
    <Textarea
      className="w-full max-w-sm"
      aria-label="Note for the kitchen"
      placeholder="A nut allergy at seat 3, a candle on the dessert"
    />
  );
}
