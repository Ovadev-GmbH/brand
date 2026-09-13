import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function BreadcrumbCollapsed() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#breadcrumb-restaurant">Zum Hirschen</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Show 2 hidden levels"
              className="flex items-center rounded-small outline-none hover:text-content-primary focus-visible:ring-1 focus-visible:ring-brand-bright"
            >
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem render={<a href="#breadcrumb-settings" />}>Settings</DropdownMenuItem>
              <DropdownMenuItem render={<a href="#breadcrumb-floor-plan" />}>Floor plan</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#breadcrumb-terrace">Terrace</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Terrace 3</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
