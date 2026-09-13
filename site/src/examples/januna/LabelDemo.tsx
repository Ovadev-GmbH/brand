import { Input, Label } from "@ovadev-gmbh/ui-januna";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-demo-guest">Guest name</Label>
      <Input id="label-demo-guest" placeholder="Lena Brunner" autoComplete="off" />
    </div>
  );
}
