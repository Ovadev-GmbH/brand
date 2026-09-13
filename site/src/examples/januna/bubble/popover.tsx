import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import {
  Bubble,
  BubbleContent,
  Description,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function BubblePopover() {
  return (
    <div className="flex w-full max-w-md flex-col">
      <Bubble variant="destructive" align="end">
        <Popover>
          <BubbleContent render={<PopoverTrigger />}>
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} className="size-3.5" aria-hidden />
              Not delivered to Lea Brunner
            </span>
          </BubbleContent>
          <PopoverContent align="end" className="w-80">
            <PopoverHeader>
              <PopoverTitle>Text message not delivered</PopoverTitle>
              <PopoverDescription>The phone network did not accept the message.</PopoverDescription>
            </PopoverHeader>
            <div className="grid grid-cols-2 gap-3">
              <Description title="Channel" content="Text message" />
              <Description title="Attempts" content="3" />
              <Description className="col-span-2" title="Last attempt" content="Friday 12 September, 18:04" />
            </div>
          </PopoverContent>
        </Popover>
      </Bubble>
    </div>
  );
}
