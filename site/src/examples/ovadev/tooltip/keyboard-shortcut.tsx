import { Button, Kbd, KbdGroup, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";
import { DownloadIcon, EyeIcon, SearchIcon } from "lucide-react";

const actions = [
  { label: "Search posts", icon: SearchIcon, keys: ["⌘", "K"] },
  { label: "Preview", icon: EyeIcon, keys: ["P"] },
  { label: "Download press kit", icon: DownloadIcon, keys: ["⇧", "D"] },
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
