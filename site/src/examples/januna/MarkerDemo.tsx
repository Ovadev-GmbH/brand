import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>Party of 6, patio requested</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Dinner shift · 18:00</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>Last seating at 21:30</MarkerContent>
      </Marker>
    </div>
  );
}
