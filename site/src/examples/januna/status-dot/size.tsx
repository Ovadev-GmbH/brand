import { StatusDot } from "@ovadev-gmbh/ui-januna";

export default function StatusDotSize() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <StatusDot state="pending" label />
        <StatusDot state="active" label />
        <StatusDot state="error" label />
      </div>
      <div className="flex items-center gap-5">
        <StatusDot state="pending" size="sm" label />
        <StatusDot state="active" size="sm" label />
        <StatusDot state="error" size="sm" label />
      </div>
    </div>
  );
}
