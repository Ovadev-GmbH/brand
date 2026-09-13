import { Marker, MarkerContent, MarkerIcon, Spinner } from "@ovadev-gmbh/ui-januna";

export default function MarkerStatus() {
  return (
    <div className="w-full max-w-md">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>
          Sending SMS reminders for tonight, <span className="text-label-13-mono">18</span> of{" "}
          <span className="text-label-13-mono">42</span> sent
        </MarkerContent>
      </Marker>
    </div>
  );
}
