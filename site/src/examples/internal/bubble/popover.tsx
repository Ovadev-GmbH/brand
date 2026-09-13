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
} from "@ovadev-gmbh/ui-internal";
import { CircleAlertIcon } from "lucide-react";

export default function BubblePopover() {
  return (
    <div className="flex w-full max-w-md flex-col">
      <Bubble variant="destructive" align="end">
        <Popover>
          <BubbleContent render={<PopoverTrigger />}>
            <span className="flex items-center gap-1.5">
              <CircleAlertIcon className="size-3.5" aria-hidden />
              Not delivered to billing@bergwerk.ch
            </span>
          </BubbleContent>
          <PopoverContent align="end" className="w-80">
            <PopoverHeader>
              <PopoverTitle>Delivery failed</PopoverTitle>
              <PopoverDescription>The receiving server refused the message.</PopoverDescription>
            </PopoverHeader>
            <div className="grid grid-cols-2 gap-3">
              <Description title="SMTP code" content={<span className="text-label-13-mono">552</span>} />
              <Description title="Attempts" content={<span className="text-label-13-mono">3</span>} />
              <Description
                className="col-span-2"
                title="Last attempt"
                content={<span className="text-label-13-mono">2026-09-13 08:14 CEST</span>}
              />
            </div>
          </PopoverContent>
        </Popover>
      </Bubble>
    </div>
  );
}
