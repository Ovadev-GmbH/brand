import {
  Bubble,
  BubbleContent,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { CircleAlertIcon } from "lucide-react";

export default function BubblePopover() {
  return (
    <div className="flex w-full max-w-md flex-col">
      <Bubble variant="destructive" align="end">
        <Popover>
          <BubbleContent render={<PopoverTrigger />}>
            <span className="flex items-center gap-1.5">
              <CircleAlertIcon className="size-3.5" aria-hidden />
              Not delivered to info@tuerlersee.ch
            </span>
          </BubbleContent>
          <PopoverContent align="end" className="w-80">
            <PopoverHeader>
              <PopoverTitle>Delivery failed</PopoverTitle>
              <PopoverDescription>The receiving server refused the message.</PopoverDescription>
            </PopoverHeader>
            <dl className="m-0 grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <dt className="text-label-12 text-content-secondary">SMTP code</dt>
                <dd className="m-0 text-label-13-mono text-content-primary">552</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-label-12 text-content-secondary">Attempts</dt>
                <dd className="m-0 text-label-13-mono text-content-primary">3</dd>
              </div>
              <div className="col-span-2 flex flex-col gap-1">
                <dt className="text-label-12 text-content-secondary">Last attempt</dt>
                <dd className="m-0 text-label-13-mono text-content-primary">2026-09-13 08:14 CEST</dd>
              </div>
            </dl>
          </PopoverContent>
        </Popover>
      </Bubble>
    </div>
  );
}
