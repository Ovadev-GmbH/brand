import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-januna";

// In an app this comes from wherever the manager's layout was saved.
const saved = { bookings: 40, floor: 60 };

export default function ResizableSavingLayout() {
  const [layout, setLayout] = useState<Record<string, number>>(saved);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <ResizablePanelGroup
        orientation="horizontal"
        defaultLayout={saved}
        onLayoutChange={setLayout}
        onLayoutChanged={(_, meta) => {
          if (meta.isUserInteraction) setSavedAt(new Date().toTimeString().slice(0, 5));
        }}
        className="h-40 material-base"
      >
        <ResizablePanel id="bookings" minSize="20">
          <div className="flex h-full items-center justify-center text-label-14">Bookings</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="floor" minSize="20">
          <div className="flex h-full items-center justify-center text-label-14">Floor plan</div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <dl className="flex gap-6 text-label-12 text-content-secondary">
        {Object.entries(layout).map(([id, size]) => (
          <div key={id} className="flex gap-2">
            <dt className="text-label-12-mono">{id}</dt>
            <dd className="text-label-12-mono text-content-primary">{size.toFixed(1)}%</dd>
          </div>
        ))}
        <div className="ml-auto flex gap-2">
          <dt>Saved</dt>
          <dd className="text-content-primary">{savedAt ?? "not yet"}</dd>
        </div>
      </dl>
    </div>
  );
}
