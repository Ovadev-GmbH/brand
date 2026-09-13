import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
} from "@ovadev-gmbh/ui-januna";

export default function BreadcrumbPageHeader() {
  return (
    <header className="flex w-full max-w-xl flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#breadcrumb-guests">Guests</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#breadcrumb-anna-keller">Anna Keller</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#breadcrumb-visits">Bookings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-label-13-mono">JAN-4821</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="m-0 text-heading-16">Friday 19:30, party of 6</h3>
          <Badge variant="secondary">Pending</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Edit booking
          </Button>
          <Button size="sm">Send deposit link</Button>
        </div>
      </div>
    </header>
  );
}
