import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { SlashIcon } from "@hugeicons/core-free-icons";

export default function BreadcrumbCustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#breadcrumb-settings">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <HugeiconsIcon icon={SlashIcon} strokeWidth={2} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#breadcrumb-floor-plan">Floor plan</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <HugeiconsIcon icon={SlashIcon} strokeWidth={2} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Terrace</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
