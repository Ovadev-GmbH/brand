import { Button, Popover, PopoverContent, PopoverTrigger } from "@ovadev-gmbh/ui-ticketova";

const aligns = ["start", "center", "end"] as const;

export default function PopoverAlign() {
  return (
    <div className="flex items-center gap-2">
      {aligns.map((align) => (
        <Popover key={align}>
          <PopoverTrigger render={<Button variant="outline" size="sm" className="capitalize" />}>{align}</PopoverTrigger>
          <PopoverContent align={align}>
            <p className="m-0 text-label-13 text-content-secondary">
              The key <span className="text-label-13-mono text-content-primary">sk_live_4f9a…</span> was last used
              2026-09-13 at 14:02 CEST.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
