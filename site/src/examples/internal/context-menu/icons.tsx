import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@ovadev-gmbh/ui-internal";
import { ExternalLinkIcon, KeyRoundIcon, ReceiptIcon, UsersIcon } from "lucide-react";

export default function ContextMenuIcons() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13">helvetia-labs</span>
        <span className="text-label-12 text-content-tertiary">Right-click the tenant</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <ExternalLinkIcon />
          Open tenant
        </ContextMenuItem>
        <ContextMenuItem>
          <UsersIcon />
          Members
        </ContextMenuItem>
        <ContextMenuItem>
          <KeyRoundIcon />
          API keys
        </ContextMenuItem>
        <ContextMenuItem>
          <ReceiptIcon />
          Invoices
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
