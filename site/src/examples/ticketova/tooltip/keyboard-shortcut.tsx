import { Button, Kbd, KbdGroup, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ticketova";
import { DownloadSimpleIcon, ArrowsClockwiseIcon, MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const actions = [
  { label: "Search tenants", icon: MagnifyingGlassIcon, keys: ["⌘", "K"] },
  { label: "Refresh", icon: ArrowsClockwiseIcon, keys: ["R"] },
  { label: "Export CSV", icon: DownloadSimpleIcon, keys: ["⇧", "E"] },
];

export default function TooltipKeyboardShortcut() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        {actions.map(({ label, icon: Icon, keys }) => (
          <Tooltip key={label}>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label={label} />}>
              <Icon />
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
