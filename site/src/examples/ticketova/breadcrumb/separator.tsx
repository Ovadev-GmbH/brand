import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ovadev-gmbh/ui-ticketova";

export default function BreadcrumbCustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#tenants">Tenants</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <span aria-hidden="true">/</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#helvetia-labs">helvetia-labs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <span aria-hidden="true">/</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>API keys</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
