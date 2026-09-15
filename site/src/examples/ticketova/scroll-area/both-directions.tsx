import { ScrollArea, ScrollBar } from "@ovadev-gmbh/ui-ticketova";

const log = [
  "14:02:11.204 INFO  build    d-8f3a21c  checking out 3f6881f from github.com/Ovadev-GmbH/billing",
  "14:02:12.918 INFO  build    d-8f3a21c  resolving 412 packages from bun.lock (lockfileVersion 1)",
  "14:02:21.107 INFO  build    d-8f3a21c  installed 412 packages in 8.19 s",
  "14:02:24.330 INFO  build    d-8f3a21c  bundling src/server.ts to dist/server.mjs (esbuild, target node22)",
  "14:02:27.452 WARN  build    d-8f3a21c  src/lib/invoices/pdf.ts: import of 'sharp' resolved from node_modules/.bun, not hoisted",
  "14:02:27.460 INFO  build    d-8f3a21c  dist/server.mjs 1.84 MB, dist/client 612 KB across 38 files",
  "14:02:31.006 INFO  image    d-8f3a21c  pushing registry.ch-zrh-1.ova.dev/billing:3f6881f (4 layers, 212 MB)",
  "14:02:44.719 INFO  image    d-8f3a21c  pushed sha256:9b1c4e0a7d2f63e815c0b4a2d9f7e6c1a3b58d04e2f19c7a6b3d8e5f4a2c1b09",
  "14:02:45.002 INFO  rollout  d-8f3a21c  ch-zrh-1: starting 3 instances, max surge 1, max unavailable 0",
  "14:02:52.381 INFO  rollout  d-8f3a21c  ch-zrh-1/billing-7f9c: GET /healthz 200 in 14 ms",
  "14:02:58.644 INFO  rollout  d-8f3a21c  ch-zrh-1/billing-2a41: GET /healthz 200 in 11 ms",
  "14:03:04.127 INFO  rollout  d-8f3a21c  ch-zrh-1/billing-c3d8: GET /healthz 200 in 12 ms",
  "14:03:04.300 INFO  rollout  d-8f3a21c  draining d-77b0e19 (3 instances), 42 open connections, timeout 30 s",
  "14:03:31.882 INFO  rollout  d-8f3a21c  d-77b0e19 drained, 0 requests dropped",
  "14:03:32.015 INFO  deploy   d-8f3a21c  promoted to production by r.markant@ova.dev",
];

export default function ScrollAreaBothDirections() {
  return (
    <ScrollArea className="h-56 w-full max-w-xl bg-surface-quaternary">
      <pre aria-label="Deployment log for d-8f3a21c" className="w-max p-3 text-label-12-mono">
        {log.join("\n")}
      </pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
