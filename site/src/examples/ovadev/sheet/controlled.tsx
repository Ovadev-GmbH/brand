import * as React from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronRightIcon } from "lucide-react";

type Tenant = { slug: string; plan: string; region: string; mrr: string };

const tenants: Tenant[] = [
  { slug: "acme-logistics", plan: "Scale", region: "ch-zrh-1", mrr: "790.00" },
  { slug: "bergwerk-ag", plan: "Team", region: "eu-central-1", mrr: "190.00" },
  { slug: "helvetia-labs", plan: "Starter", region: "ch-gva-1", mrr: "49.00" },
];

export default function SheetControlled() {
  const [open, setOpen] = React.useState(false);
  const [tenant, setTenant] = React.useState<Tenant | null>(null);

  function show(t: Tenant) {
    setTenant(t);
    setOpen(true);
  }

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tenant</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">MRR, CHF</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Details</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((t) => (
            <TableRow key={t.slug}>
              <TableCell className="text-label-13-mono">{t.slug}</TableCell>
              <TableCell>{t.plan}</TableCell>
              <TableCell className="text-right text-label-13-mono">{t.mrr}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon-sm" aria-label={`Show ${t.slug}`} onClick={() => show(t)}>
                  <ChevronRightIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-label-14-mono">{tenant?.slug}</SheetTitle>
            <SheetDescription>
              {tenant?.plan} plan in {tenant?.region}, CHF {tenant?.mrr} a month.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
