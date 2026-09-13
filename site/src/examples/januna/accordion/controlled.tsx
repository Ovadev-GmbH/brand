import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@ovadev-gmbh/ui-januna";

const days = [
  { value: "thu", title: "Thursday", body: "Dinner 86 of 110 covers. 2 no-shows, both without a deposit." },
  { value: "fri", title: "Friday", body: "Dinner fully booked from 19:00. 7 parties on the waitlist, 3 seated." },
  { value: "sat", title: "Saturday", body: "Lunch 42 covers, dinner 118. CHF 1'240.00 in deposits taken." },
  { value: "sun", title: "Sunday", body: "Lunch only. 1 booking cancelled after the deadline, deposit kept." },
];

export default function AccordionControlled() {
  const [open, setOpen] = useState<string[]>(["fri"]);

  return (
    <div className="flex w-[28rem] flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setOpen(days.map((d) => d.value))}>
          Expand all
        </Button>
        <Button variant="outline" size="sm" onClick={() => setOpen([])}>
          Collapse all
        </Button>
        <span className="ml-auto text-label-13 text-content-secondary">
          <span className="text-label-13-mono">{open.length}</span> of {days.length} open
        </span>
      </div>
      <Accordion multiple value={open} onValueChange={setOpen}>
        {days.map((day) => (
          <AccordionItem key={day.value} value={day.value}>
            <AccordionTrigger>{day.title}</AccordionTrigger>
            <AccordionContent>
              <p className="text-content-secondary">{day.body}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
