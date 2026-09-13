import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";

export default function PopoverWithHeader() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-14">No-show fee</span>
      <Popover>
        <PopoverTrigger render={<Button variant="ghost" size="icon-xs" aria-label="About the no-show fee" />}>
          <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>No-show fee</PopoverTitle>
            <PopoverDescription>
              A party that has not arrived 30 minutes after its booking is charged CHF 20.00 per guest, on the card it
              booked with.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}
