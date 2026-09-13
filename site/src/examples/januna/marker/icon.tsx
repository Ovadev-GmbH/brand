import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { CreditCardIcon, Note01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

export default function MarkerIcons() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>Party of 6, two high chairs</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={Note01Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>One nut allergy, noted by the guest when booking</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>
          Deposit of <span className="text-label-13-mono">CHF 120.00</span> charged at{" "}
          <span className="text-label-13-mono">19:30</span> on Wednesday
        </MarkerContent>
      </Marker>
    </div>
  );
}
