import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-ovadev";
import { ChevronDownIcon, ScrollTextIcon } from "lucide-react";

export default function MarkerLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Marker render={<a href="#changelog" />}>
        <MarkerIcon>
          <ScrollTextIcon />
        </MarkerIcon>
        <MarkerContent>48 entries for TICKETOVA in the changelog</MarkerContent>
      </Marker>
      <Marker render={<button type="button" />} className="hover:text-content-primary">
        <MarkerIcon>
          <ChevronDownIcon />
        </MarkerIcon>
        <MarkerContent>Show 12 older posts</MarkerContent>
      </Marker>
    </div>
  );
}
