import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
} from "@ovadev-gmbh/ui-ovadev";

export default function BreadcrumbPageHeader() {
  return (
    <header className="flex w-full max-w-xl flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#product">Product</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#2026">2026</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ticketing, rebuilt</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="m-0 text-heading-16">
            Ticketing, rebuilt
          </h3>
          <Badge variant="secondary">Draft</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Preview
          </Button>
          <Button size="sm">Publish</Button>
        </div>
      </div>
    </header>
  );
}
