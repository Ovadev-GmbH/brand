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

type Customer = { slug: string; plan: string; region: string; mrr: string };

const customers: Customer[] = [
  { slug: "tuerlersee", plan: "TICKETOVA", region: "Aeugst am Albis ZH", mrr: "390.00" },
  { slug: "hallenbad-baar", plan: "TICKETOVA", region: "Baar ZG", mrr: "290.00" },
  { slug: "restaurant-linde", plan: "JANUNA", region: "Cham ZG", mrr: "190.00" },
];

export default function SheetControlled() {
  const [open, setOpen] = React.useState(false);
  const [customer, setTenant] = React.useState<Customer | null>(null);

  function show(t: Customer) {
    setTenant(t);
    setOpen(true);
  }

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Fee, CHF</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Details</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((t) => (
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
            <SheetTitle className="text-label-14-mono">{customer?.slug}</SheetTitle>
            <SheetDescription>
              {customer?.plan} in {customer?.region}, CHF {customer?.mrr} a month.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
