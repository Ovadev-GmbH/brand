import { Button, Input, Label } from "@ovadev-gmbh/ui-januna";

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="guest-name">Guest name</Label>
          <Input id="guest-name" placeholder="Ada Lovelace" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="party-size">Party size</Label>
          <Input id="party-size" type="number" min={1} max={12} defaultValue={2} />
        </div>
      </div>
      <div className="flex gap-2">
        <Input type="tel" placeholder="Phone number" />
        <Button type="button">Look up guest</Button>
      </div>
      <Input disabled placeholder="Table 12 (assigned automatically)" />
    </div>
  );
}
