import { Input, Label } from "@ovadev-gmbh/ui-januna";

export default function LabelWithHint() {
  return (
    <div className="grid w-72 gap-2">
      <Label htmlFor="label-hint-occasion">
        Occasion
        <span className="text-content-tertiary">optional</span>
      </Label>
      <Input id="label-hint-occasion" placeholder="Birthday, anniversary, business dinner" />
    </div>
  );
}
