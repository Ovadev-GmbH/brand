import { useState } from "react";
import { Bubble, BubbleContent, Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-januna";

const notes = [
  "Two of us are vegan.",
  "One guest has a severe nut allergy, so please check the dessert.",
  "Six of us would like the wine pairing.",
  "A birthday cake arrives at 19:00. Could you keep it cold until 21:00?",
];

export default function BubbleShowMore() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full max-w-md flex-col">
      <Bubble variant="muted">
        <BubbleContent>
          <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col items-start gap-1">
            <p>A few notes for Saturday, party of 8.</p>
            <CollapsibleContent>
              <ul className="flex list-disc flex-col gap-1 pl-5">
                {notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </CollapsibleContent>
            <CollapsibleTrigger render={<Button variant="link" size="xs" className="px-0" />}>
              {open ? "Hide the notes" : "Show all 4 notes"}
            </CollapsibleTrigger>
          </Collapsible>
        </BubbleContent>
      </Bubble>
    </div>
  );
}
