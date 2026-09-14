import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { InfoIcon } from "lucide-react";

export default function PopoverWithHeader() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13">6 min read</span>
      <Popover>
        <PopoverTrigger render={<Button variant="ghost" size="icon-xs" aria-label="About reading time" />}>
          <InfoIcon />
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Reading time</PopoverTitle>
            <PopoverDescription>
              Estimated from the word count at 200 words a minute. Code blocks and image captions do not count.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}
