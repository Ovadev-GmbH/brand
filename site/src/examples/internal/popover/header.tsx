import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-internal";
import { InfoIcon } from "lucide-react";

export default function PopoverWithHeader() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13">Net 30</span>
      <Popover>
        <PopoverTrigger render={<Button variant="ghost" size="icon-xs" aria-label="About payment terms" />}>
          <InfoIcon />
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Payment terms</PopoverTitle>
            <PopoverDescription>
              Invoices for acme-logistics are due 30 days after they are sent. A reminder goes out on day 31 and day 45.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}
