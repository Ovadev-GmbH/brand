import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
} from "@ovadev-gmbh/ui-ticketova";

export default function BreadcrumbPageHeader() {
  return (
    <header className="flex w-full max-w-xl flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#tenants">Tenants</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#bergwerk-ag">bergwerk-ag</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#invoices">Invoices</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-label-13-mono">INV-2026-0142</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="m-0 text-heading-16">
            Invoice <span className="text-label-14-mono">INV-2026-0142</span>
          </h3>
          <Badge variant="secondary">Pending</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Download PDF
          </Button>
          <Button size="sm">Send reminder</Button>
        </div>
      </div>
    </header>
  );
}
