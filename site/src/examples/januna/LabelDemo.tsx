import { Checkbox, Input, Label, Switch } from "@ovadev-gmbh/ui-januna";

export default function LabelDemo() {
  return (
    <div className="grid max-w-[640px] gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I accept the cancellation policy</Label>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="guest-name">Guest name</Label>
        <Input id="guest-name" placeholder="Ada Lovelace" />
      </div>

      <div className="flex items-center gap-3">
        <Switch id="sms" defaultChecked />
        <Label htmlFor="sms">Text the guest when the table is ready</Label>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="closed">
          Table 7
          <span className="font-normal text-muted-foreground">out of service</span>
        </Label>
        <Input id="closed" disabled placeholder="Not bookable" />
      </div>
    </div>
  );
}
