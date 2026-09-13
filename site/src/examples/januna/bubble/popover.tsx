import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import {
  Bubble,
  BubbleContent,
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
            <dl className="m-0 grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <dt className="text-label-13 text-content-secondary">Channel</dt>
                <dd className="m-0 text-label-14 text-content-primary">Text message</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-label-13 text-content-secondary">Attempts</dt>
                <dd className="m-0 text-label-13-mono text-content-primary">3</dd>
              </div>
              <div className="col-span-2 flex flex-col gap-1">
                <dt className="text-label-13 text-content-secondary">Last attempt</dt>
                <dd className="m-0 text-label-14 text-content-primary">Friday 12 September, 18:04</dd>
              </div>
            </dl>
          </PopoverContent>
        </Popover>
      </Bubble>
    </div>
  );
}
