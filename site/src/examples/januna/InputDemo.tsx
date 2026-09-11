import { Button, Input, Label } from "@ovadev-gmbh/ui-januna";

export default function InputDemo() {
  return (
    <div className="grid max-w-[640px] gap-4">
      <Input type="text" placeholder="Guest name" />

      <div className="grid gap-2">
        <Label htmlFor="guest-email">Email</Label>
        <Input id="guest-email" type="email" placeholder="guest@example.com" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="party-size">Party size</Label>
        <Input id="party-size" type="number" min={1} max={12} defaultValue={2} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="menu-file">Menu PDF</Label>
        <Input id="menu-file" type="file" />
      </div>

      <div className="flex gap-2">
        <Input type="tel" placeholder="Phone number" />
        <Button type="button">Look up guest</Button>
      </div>

      <Input aria-invalid placeholder="Booking reference" defaultValue="JNA-" />

      <Input disabled placeholder="Table 12 (assigned automatically)" />
    </div>
  );
}
