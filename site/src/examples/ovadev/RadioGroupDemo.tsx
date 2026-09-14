import { Label, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-ovadev";

const reasons = [
  { value: "quote", label: "Quote request" },
  { value: "support", label: "Support" },
  { value: "press", label: "Press" },
];

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="quote" aria-label="Reason for contact" className="w-fit">
      {reasons.map((reason) => (
        <div key={reason.value} className="flex items-center gap-3">
          <RadioGroupItem id={`radio-group-${reason.value}`} value={reason.value} />
          <Label htmlFor={`radio-group-${reason.value}`}>{reason.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
