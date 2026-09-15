import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-ticketova";
import { CaretDownIcon, ScrollIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function MarkerLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Marker render={<a href="#audit-log" />}>
        <MarkerIcon>
          <ScrollIcon />
        </MarkerIcon>
        <MarkerContent>48 events for acme-logistics in the audit log</MarkerContent>
      </Marker>
      <Marker render={<button type="button" />} className="hover:text-content-primary">
        <MarkerIcon>
          <CaretDownIcon />
        </MarkerIcon>
        <MarkerContent>Show 12 older deployments</MarkerContent>
      </Marker>
    </div>
  );
}
