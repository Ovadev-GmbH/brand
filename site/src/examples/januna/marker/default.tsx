import { Marker, MarkerContent } from "@ovadev-gmbh/ui-januna";

export default function MarkerDefault() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-label-14">Covers booked, dinner</span>
        <span className="text-label-13-mono">118</span>
      </div>
      <Marker>
        <MarkerContent>
          Updated at <span className="text-label-13-mono">18:42</span> after 3 online bookings
        </MarkerContent>
      </Marker>
    </div>
  );
}
