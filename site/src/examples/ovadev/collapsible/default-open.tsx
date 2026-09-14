import { Badge, Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ovadev";
import { ChevronDownIcon } from "lucide-react";

const steps = [
  { name: "Render the issue", duration: "41 s", state: "Passed", tone: "text-status-success" },
  { name: "Send to 1'204 readers", duration: "12 s", state: "Failed", tone: "text-status-danger" },
  { name: "Record opens", duration: "–", state: "Canceled", tone: "text-content-tertiary" },
] as const;

export default function CollapsibleDefaultOpen() {
  return (
    <Collapsible defaultOpen className="flex w-96 flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-label-13">
          <span>
            Newsletter <span className="text-label-13-mono">2026-09</span>
          </span>
          <Badge variant="destructive">Failed</Badge>
        </span>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Toggle send steps"
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
              <span className={`w-20 text-label-13 ${step.tone}`}>{step.state}</span>
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  );
}
