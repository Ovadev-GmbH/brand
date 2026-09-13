import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Calendar03Icon } from "@hugeicons/core-free-icons";

export default function MarkerLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Marker render={<a href="#marker-visits" />}>
        <MarkerIcon>
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>12 earlier visits by Anna Keller</MarkerContent>
      </Marker>
      <Marker render={<button type="button" />} className="hover:text-content-primary">
        <MarkerIcon>
          <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>Show 8 earlier bookings tonight</MarkerContent>
      </Marker>
    </div>
  );
}
