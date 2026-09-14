import * as React from "react";
import { Button, ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ovadev";
import { HouseIcon, MailIcon, NewspaperIcon } from "lucide-react";

const pages = [
  { label: "Home", icon: HouseIcon },
  { label: "Blog", icon: NewspaperIcon },
  { label: "Contact", icon: MailIcon },
];

export default function ResizableCollapsible() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-56 w-full max-w-xl material-base">
      <ResizablePanel
        defaultSize="30"
        minSize="22"
        collapsible
        collapsedSize={44}
        onResize={(size) => setCollapsed(size.inPixels < 60)}
      >
        <nav aria-label="ova.dev" className="flex flex-col gap-0.5 p-1.5">
          {pages.map(({ label, icon: Icon }) =>
            collapsed ? (
              <Button key={label} variant="ghost" size="icon-sm" aria-label={label}>
                <Icon />
              </Button>
            ) : (
              <Button key={label} variant="ghost" size="sm" className="justify-start">
                <Icon data-icon="inline-start" />
                {label}
              </Button>
            ),
          )}
        </nav>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize="50">
        <div className="flex h-full flex-col gap-1 p-4">
          <h3 className="text-heading-16">Blog</h3>
          <p className="text-label-13 text-content-secondary">
            42 posts, last published <span className="text-label-13-mono">2026-09-12</span>
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
