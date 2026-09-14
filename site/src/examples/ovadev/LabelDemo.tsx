import { Input, Label } from "@ovadev-gmbh/ui-ovadev";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-demo-customer">Company</Label>
      <Input id="label-demo-customer" placeholder="Strandbad Türlersee AG" autoComplete="off" spellCheck={false} />
    </div>
  );
}
