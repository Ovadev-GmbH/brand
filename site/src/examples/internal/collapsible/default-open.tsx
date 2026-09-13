import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger, StatusDot } from "@ovadev-gmbh/ui-internal";
import { ChevronDownIcon } from "lucide-react";

const steps = [
  { name: "Install dependencies", duration: "41 s", state: "ready" },
  { name: "Run migrations", duration: "12 s", state: "error" },
  { name: "Start instances", duration: "–", state: "canceled" },
] as const;

export default function CollapsibleDefaultOpen() {
  return (
    <Collapsible defaultOpen className="flex w-96 flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-label-13">
          <StatusDot state="error" titlePrefix="Deployment 9d02c5f" />
          Deployment <span className="text-label-13-mono">9d02c5f</span> failed
        </span>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Toggle build steps"
              className="data-panel-open:[&_svg]:rotate-180"
            />
          }
        >
          <ChevronDownIcon className="transition-transform duration-fast ease-brand" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <ol className="flex flex-col border-t border-divider">
          {steps.map((step) => (
            <li key={step.name} className="flex items-center gap-4 border-b border-divider py-2 text-label-13">
              <span className="flex-1">{step.name}</span>
              <span className="text-label-13-mono text-content-secondary">{step.duration}</span>
              <StatusDot state={step.state} size="sm" label titlePrefix={step.name} className="w-20" />
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  );
}
