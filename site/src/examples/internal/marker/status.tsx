import { Marker, MarkerContent, MarkerIcon, Spinner } from "@ovadev-gmbh/ui-internal";

export default function MarkerStatus() {
  return (
    <div className="w-full max-w-md">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>
          Rolling out <span className="text-label-12-mono">d-8f3a21c</span> to{" "}
          <span className="text-label-12-mono">ch-zrh-1</span>, 7 of 12 pods ready
        </MarkerContent>
      </Marker>
    </div>
  );
}
