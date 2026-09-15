import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-ticketova";
import { ArrowDownIcon, ArrowUpIcon, ArrowElbowDownLeftIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function KbdIcon() {
  return (
    <div className="flex flex-wrap items-center gap-6 text-label-13 text-content-secondary">
      <span className="flex items-center gap-2">
        <KbdGroup>
          <Kbd>
            <ArrowUpIcon />
            <span className="sr-only">Up arrow</span>
          </Kbd>
          <Kbd>
            <ArrowDownIcon />
            <span className="sr-only">Down arrow</span>
          </Kbd>
        </KbdGroup>
        Move between invoices
      </span>
      <span className="flex items-center gap-2">
        <Kbd>
          <ArrowElbowDownLeftIcon />
          <span className="sr-only">Enter</span>
        </Kbd>
        Open invoice
      </span>
    </div>
  );
}
