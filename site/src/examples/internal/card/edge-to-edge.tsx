import { Button, Card, CardAction, CardContent, CardHeader, CardTitle } from "@ovadev-gmbh/ui-internal";

const invoices = [
  { id: "INV-2026-0142", tenant: "acme-logistics", amount: "1'240.00" },
  { id: "INV-2026-0138", tenant: "helvetia-labs", amount: "585.00" },
  { id: "INV-2026-0131", tenant: "bergwerk-ag", amount: "3'480.00" },
];

export default function CardEdgeToEdge() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Overdue invoices</CardTitle>
        <CardAction>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing) px-0">
        <ul className="m-0 list-none p-0">
          {invoices.map((invoice) => (
            <li
              key={invoice.id}
              className="flex items-baseline justify-between gap-3 border-t border-divider px-(--card-spacing) py-2.5 text-label-13"
            >
              <span className="flex flex-col">
                <span className="text-label-13-mono">{invoice.id}</span>
                <span className="text-label-12 text-content-secondary">{invoice.tenant}</span>
              </span>
              <span className="text-label-13-mono">CHF {invoice.amount}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
