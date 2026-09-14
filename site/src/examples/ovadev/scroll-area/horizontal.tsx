import { ScrollArea, ScrollBar } from "@ovadev-gmbh/ui-ovadev";

const deployments = [
  { id: "d-8f3a21c", environment: "production", region: "ch-zrh-1", at: "09-12 14:03" },
  { id: "d-77b0e19", environment: "staging", region: "eu-central-1", at: "09-12 11:40" },
  { id: "d-5c2d4a8", environment: "preview", region: "ch-zrh-1", at: "09-12 10:18" },
  { id: "d-41e9f02", environment: "production", region: "eu-central-1", at: "09-11 17:52" },
  { id: "d-3a7c611", environment: "staging", region: "ch-zrh-1", at: "09-11 15:09" },
  { id: "d-2b8d9e4", environment: "production", region: "ch-zrh-1", at: "09-10 09:31" },
  { id: "d-19f0c3b", environment: "preview", region: "eu-central-1", at: "09-09 16:44" },
];

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-full max-w-xl material-base">
      <ol aria-label="Recent deployments" className="flex w-max">
        {deployments.map((deployment) => (
          <li key={deployment.id} className="flex w-44 flex-col gap-1 border-r border-divider px-3 pt-3 pb-4 last:border-r-0">
            <span className="text-label-13-mono">{deployment.id}</span>
            <span className="text-label-12 text-content-secondary">{deployment.environment}</span>
            <span className="text-label-12-mono text-content-secondary">
              {deployment.region} {deployment.at}
            </span>
          </li>
        ))}
      </ol>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
