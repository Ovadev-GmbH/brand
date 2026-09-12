import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-internal";
import { RocketLaunchIcon } from "@phosphor-icons/react";

export default function MarkerDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <Marker>
        <MarkerIcon>
          <RocketLaunchIcon />
        </MarkerIcon>
        <MarkerContent>
          Deploy #4821 by robin ·{" "}
          <span className="font-mono tabular-nums">14:02</span>
        </MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>
          Audit log · <span className="font-mono tabular-nums">12 Sep</span> ·
          48 events
        </MarkerContent>
      </Marker>
    </div>
  );
}
