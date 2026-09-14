import { Button, Separator } from "@ovadev-gmbh/ui-ovadev";
import { DownloadIcon, ListFilterIcon, RefreshCwIcon, SendIcon } from "lucide-react";

export default function SeparatorToolbar() {
  return (
    <div role="toolbar" aria-label="Blog posts" className="flex h-7 items-center gap-2">
      <Button variant="ghost" size="sm">
        <ListFilterIcon data-icon="inline-start" />
        Filter
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Refresh posts">
        <RefreshCwIcon />
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" size="sm">
        <DownloadIcon data-icon="inline-start" />
        Export Markdown
      </Button>
      <Button variant="ghost" size="sm">
        <SendIcon data-icon="inline-start" />
        Publish
      </Button>
    </div>
  );
}
