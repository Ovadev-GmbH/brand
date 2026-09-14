import { Marker, MarkerContent } from "@ovadev-gmbh/ui-ovadev";

export default function MarkerDefault() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-label-13">Blog readers, September</span>
        <span className="text-label-13-mono">15'129</span>
      </div>
      <Marker>
        <MarkerContent>
          Readers for ova.dev last counted <span className="text-label-12-mono">2026-09-13 14:02</span>
        </MarkerContent>
      </Marker>
    </div>
  );
}
