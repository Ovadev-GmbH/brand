import { Marker, MarkerContent } from "@ovadev-gmbh/ui-ovadev";

const messages = [
  { id: "m-8f3a21c", from: "Gemeinde Hausen", at: "14:02" },
  { id: "m-77e04b9", from: "Seebad Zug", at: "11:36" },
  { id: "m-2c91f0a", from: "Gemeinde Hausen", at: "08:15" },
];

export default function MarkerBorder() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <Marker variant="border">
        <MarkerContent>
          3 messages through the <span className="text-label-12-mono">contact form</span> today
        </MarkerContent>
      </Marker>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {messages.map((m) => (
          <li key={m.id} className="flex items-baseline justify-between gap-3 text-label-13">
            <span>
              <span className="text-label-13-mono">{m.id}</span> {m.from}
            </span>
            <span className="text-label-13-mono text-content-tertiary">{m.at}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
