import { Marker, MarkerContent, MarkerIcon, Spinner } from "@ovadev-gmbh/ui-ovadev";
import { CircleCheckIcon, GitCommitHorizontalIcon } from "lucide-react";

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Marker>
        <MarkerIcon>
          <GitCommitHorizontalIcon />
        </MarkerIcon>
        <MarkerContent>
          <span className="text-label-12-mono">8f3a21c</span> pushed to main by robin@ova.dev at{" "}
          <span className="text-label-12-mono">14:02 UTC</span>
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CircleCheckIcon />
        </MarkerIcon>
        <MarkerContent>
          Build passed in <span className="text-label-12-mono">2 min 14 s</span>
        </MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>
          Deploying api-gateway to <span className="text-label-12-mono">ch-zrh-1</span>
        </MarkerContent>
      </Marker>
    </div>
  );
}
