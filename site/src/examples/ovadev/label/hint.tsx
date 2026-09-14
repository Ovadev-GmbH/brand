import { Input, Label } from "@ovadev-gmbh/ui-ovadev";

export default function LabelWithHint() {
  return (
    <div className="grid w-72 gap-2">
      <Label htmlFor="label-hint-vat">
        Phone
        <span className="text-content-tertiary">optional</span>
      </Label>
      <Input id="label-hint-vat" className="text-label-13-mono" placeholder="+41 41 000 00 00" />
    </div>
  );
}
