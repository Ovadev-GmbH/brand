import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, RestaurantTableIcon, UserGroupIcon } from "@hugeicons/core-free-icons";
import { Button, ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-januna";

const pages = [
  { label: "Bookings", icon: Calendar03Icon },
  { label: "Tables", icon: RestaurantTableIcon },
  { label: "Guests", icon: UserGroupIcon },
];

export default function ResizableCollapsible() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-56 w-full max-w-xl material-base">
      <ResizablePanel
        defaultSize="30"
        minSize="22"
        collapsible
        collapsedSize={48}
        onResize={(size) => setCollapsed(size.inPixels < 64)}
      >
        <nav aria-label="Restaurant" className="flex flex-col gap-0.5 p-2">
          {pages.map(({ label, icon }) =>
            collapsed ? (
              <Button key={label} variant="ghost" size="icon-sm" aria-label={label}>
                <HugeiconsIcon icon={icon} strokeWidth={2} />
              </Button>
            ) : (
              <Button key={label} variant="ghost" size="sm" className="justify-start">
                <HugeiconsIcon icon={icon} strokeWidth={2} data-icon="inline-start" />
                {label}
              </Button>
            ),
          )}
        </nav>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize="50">
        <div className="flex h-full flex-col gap-1 p-4">
          <h3 className="text-heading-16">Bookings</h3>
          <p className="text-label-14 text-content-secondary">42 tonight, 118 covers, CHF 1'240.00 in deposits</p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
