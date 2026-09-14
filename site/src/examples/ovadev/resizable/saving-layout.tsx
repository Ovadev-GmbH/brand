import * as React from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ovadev-gmbh/ui-ovadev";

// In an app this comes from wherever the layout was saved.
const saved = { list: 40, record: 60 };

export default function ResizableSavingLayout() {
  const [layout, setLayout] = React.useState<Record<string, number>>(saved);
  const [savedAt, setSavedAt] = React.useState<string | null>(null);

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <ResizablePanelGroup
        orientation="horizontal"
        defaultLayout={saved}
        onLayoutChange={setLayout}
        onLayoutChanged={(_, meta) => {
          if (meta.isUserInteraction) setSavedAt(new Date().toTimeString().slice(0, 8));
        }}
        className="h-40 material-base"
      >
        <ResizablePanel id="list" minSize="20">
          <div className="flex h-full items-center justify-center text-label-13">Posts</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="record" minSize="20">
          <div className="flex h-full items-center justify-center text-label-13-mono">season-2026-in-numbers</div>
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
          <dd className="text-label-12-mono text-content-primary">{savedAt ?? "not yet"}</dd>
        </div>
      </dl>
    </div>
  );
}
