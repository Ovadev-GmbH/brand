import { Marker, MarkerContent } from "@ovadev-gmbh/ui-ticketova";

const deployments = [
  { id: "d-8f3a21c", service: "api-gateway", at: "14:02" },
  { id: "d-77e04b9", service: "billing-worker", at: "11:36" },
  { id: "d-2c91f0a", service: "api-gateway", at: "08:15" },
];

export default function MarkerBorder() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <Marker variant="border">
        <MarkerContent>
          3 deployments to <span className="text-label-12-mono">ch-zrh-1</span> today
        </MarkerContent>
      </Marker>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {deployments.map((d) => (
          <li key={d.id} className="flex items-baseline justify-between gap-3 text-label-13">
            <span>
              <span className="text-label-13-mono">{d.id}</span> {d.service}
            </span>
            <span className="text-label-13-mono text-content-tertiary">{d.at}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
