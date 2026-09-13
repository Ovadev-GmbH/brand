import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, CheckmarkCircle02Icon, SmartPhone01Icon } from "@hugeicons/core-free-icons";

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>
          Booked online on Monday for <span className="text-label-13-mono">19:30</span>, party of 6
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={SmartPhone01Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>
          Reminder sent by SMS at <span className="text-label-13-mono">12:00</span>
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>
          Seated at T12 at <span className="text-label-13-mono">19:34</span>
        </MarkerContent>
      </Marker>
    </div>
  );
}
