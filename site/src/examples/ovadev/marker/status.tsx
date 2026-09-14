import { Marker, MarkerContent, MarkerIcon, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function MarkerStatus() {
  return (
    <div className="w-full max-w-md">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>
          Sending the newsletter <span className="text-label-12-mono">2026-09</span> to{" "}
          <span className="text-label-12-mono">1'412</span> subscribers, 7 of 12 batches done
        </MarkerContent>
      </Marker>
    </div>
  );
}
