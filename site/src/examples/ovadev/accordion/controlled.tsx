import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@ovadev-gmbh/ui-ovadev";

const sections = [
  {
    value: "summary",
    title: "Summary",
    body: "The TICKETOVA shop answered slowly for 34 minutes on 2026-08-02. 212 payments were retried by customers and went through.",
  },
  {
    value: "timeline",
    title: "Timeline",
    body: "09:14 alert on response time. 09:21 traffic moved to the second data centre. 09:48 the morning release rolled back.",
  },
  {
    value: "cause",
    title: "Root cause",
    body: "The new season-pass report filtered orders on a column without an index, and the query fell back to a full scan.",
  },
  {
    value: "follow-up",
    title: "Follow-ups",
    body: "Add the index. Check query plans for new reports before release. Due 2026-08-07.",
  },
];

export default function AccordionControlled() {
  const [open, setOpen] = React.useState<string[]>(["summary"]);

  return (
    <div className="flex w-[28rem] flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setOpen(sections.map((s) => s.value))}>
          Expand all
        </Button>
        <Button variant="outline" size="sm" onClick={() => setOpen([])}>
          Collapse all
        </Button>
        <span className="ml-auto text-label-13 text-content-secondary">
          <span className="text-label-13-mono">{open.length}</span> of {sections.length} open
        </span>
      </div>
      <Accordion multiple value={open} onValueChange={setOpen}>
        {sections.map((s) => (
          <AccordionItem key={s.value} value={s.value}>
            <AccordionTrigger>{s.title}</AccordionTrigger>
            <AccordionContent>
              <p className="m-0 text-content-secondary">{s.body}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
