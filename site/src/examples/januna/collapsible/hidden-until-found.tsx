import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-januna";

const notes = [
  { time: "18:30", table: "T12", note: "Keller: one guest without gluten" },
  { time: "19:15", table: "T14", note: "Rossi: shellfish allergy" },
  { time: "20:00", table: "Terrace 3", note: "Moreau: birthday, cake at 21:30" },
];

export default function CollapsibleHiddenUntilFound() {
  return (
    <Collapsible className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-label-14">Kitchen notes, dinner</span>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show notes</CollapsibleTrigger>
      </div>
      <CollapsibleContent hiddenUntilFound>
        <ul className="flex flex-col rounded-regular bg-surface-secondary px-3 py-2">
          {notes.map((n) => (
            <li key={n.time} className="flex gap-3 py-1 text-label-13">
              <span className="text-label-13-mono text-content-secondary">{n.time}</span>
              <span className="w-20 text-content-secondary">{n.table}</span>
              <span>{n.note}</span>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
