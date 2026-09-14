import { Marker, MarkerContent } from "@ovadev-gmbh/ui-ovadev";

export default function MarkerDefault() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-label-13">API requests, September</span>
        <span className="text-label-13-mono">1'512'907</span>
      </div>
      <Marker>
        <MarkerContent>
          Usage for acme-logistics last synced <span className="text-label-12-mono">2026-09-13 14:02 UTC</span>
        </MarkerContent>
      </Marker>
    </div>
  );
}
