import { Button, Kbd, KbdGroup, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, PrinterIcon, Search01Icon } from "@hugeicons/core-free-icons";

const actions = [
  { label: "Search bookings", icon: Search01Icon, keys: ["⌘", "K"] },
  { label: "New booking", icon: Add01Icon, keys: ["N"] },
  { label: "Print run sheet", icon: PrinterIcon, keys: ["⌘", "P"] },
];

export default function TooltipKeyboardShortcut() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        {actions.map(({ label, icon, keys }) => (
          <Tooltip key={label}>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label={label} />}>
              <HugeiconsIcon icon={icon} strokeWidth={2} />
            </TooltipTrigger>
            <TooltipContent>
              {label}
              <KbdGroup>
                {keys.map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </KbdGroup>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
