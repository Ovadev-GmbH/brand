import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const steps = [
  { name: "Payment link sent", time: "14:02", word: "Sent", tone: "text-status-success" },
  { name: "Reminder sent", time: "17:00", word: "Sent", tone: "text-status-success" },
  { name: "Card charged", time: "17:31", word: "Declined", tone: "text-status-danger" },
] as const;

export default function CollapsibleDefaultOpen() {
  return (
    <Collapsible defaultOpen className="flex w-96 flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-label-14">Deposit for Moreau, party of 8, is unpaid</span>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Toggle deposit history"
              className="data-panel-open:[&_svg]:rotate-180"
            />
          }
        >
          <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} className="transition-transform duration-fast ease-brand" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <ol className="flex flex-col border-t border-divider">
          {steps.map((step) => (
            <li key={step.name} className="flex items-center gap-4 border-b border-divider py-2 text-label-14">
              <span className="flex-1">{step.name}</span>
              <span className="text-label-13-mono text-content-secondary">{step.time}</span>
              <span className={`w-20 text-label-13 ${step.tone}`}>{step.word}</span>
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  );
}
