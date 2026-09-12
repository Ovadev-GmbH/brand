import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ovadev-gmbh/ui-internal";
import { CaretDownIcon } from "@phosphor-icons/react";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-xl flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-label-13">deploy-api · 3 recent runs</span>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="Toggle runs" />}
        >
          <CaretDownIcon />
        </CollapsibleTrigger>
      </div>
      <div className="border border-divider px-2.5 py-1.5 text-label-13-mono">
        #4821 · main · 2m 14s · ok
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="border border-divider px-2.5 py-1.5 text-label-13-mono">
          #4820 · main · 2m 09s · ok
        </div>
        <div className="border border-divider px-2.5 py-1.5 text-label-13-mono">
          #4819 · fix/invoice-index · 3m 41s · rolled back
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
