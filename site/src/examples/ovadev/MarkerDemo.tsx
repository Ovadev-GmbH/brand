import { Marker, MarkerContent, MarkerIcon, Spinner } from "@ovadev-gmbh/ui-ovadev";
import { CircleCheckIcon, PenLineIcon } from "lucide-react";

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Marker>
        <MarkerIcon>
          <PenLineIcon />
        </MarkerIcon>
        <MarkerContent>
          Draft <span className="text-label-12-mono">admission-control</span> saved by robin@ova.dev at{" "}
          <span className="text-label-12-mono">14:02</span>
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CircleCheckIcon />
        </MarkerIcon>
        <MarkerContent>
          Reviewed by beni@ova.dev in <span className="text-label-12-mono">2 min 14 s</span>
        </MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>
          Publishing to <span className="text-label-12-mono">ova.dev/blog</span>
        </MarkerContent>
      </Marker>
    </div>
  );
}
