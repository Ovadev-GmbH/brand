import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

const regions = ["ch-zrh-1", "ch-gva-1", "eu-central-1"];
const plans = ["Starter", "Team", "Scale"];

export default function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>helvetia-labs</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>Overview</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Move to region</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {regions.map((region) => (
              <DropdownMenuItem key={region} className="text-label-13-mono">
                {region}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Change plan</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {plans.map((plan) => (
              <DropdownMenuItem key={plan}>{plan}</DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
