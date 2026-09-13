import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ovadev-gmbh/ui-internal";

export default function DropdownMenuDisabled() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Deployment dpl_4f2c91</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuItem>View build logs</DropdownMenuItem>
        <DropdownMenuItem>Redeploy</DropdownMenuItem>
        <DropdownMenuItem disabled>
          Roll back
          <span className="ml-auto text-label-12 text-content-tertiary">No earlier build</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Promote to production
          <span className="ml-auto text-label-12 text-content-tertiary">Already live</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
