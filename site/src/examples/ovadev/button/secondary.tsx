import { Button } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonSecondary() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary">Preview post</Button>
      <Button>Publish post</Button>
    </div>
  );
}
