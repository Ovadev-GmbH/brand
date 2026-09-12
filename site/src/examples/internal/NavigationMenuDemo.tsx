import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-internal";

const tenantLinks = [
  ["All tenants", "412 active"],
  ["Trials", "27 expiring this week"],
  ["Suspended", "3 past due"],
] as const;

const billingLinks = [
  ["Invoices", "18 open"],
  ["Plans", "Starter, Scale, Enterprise"],
  ["Payouts", "Next run 2026-09-15"],
] as const;

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tenants</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-0.5">
              {tenantLinks.map(([label, meta]) => (
                <li key={label}>
                  <NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
                    <span className="text-label-13">{label}</span>
                    <span className="text-copy-13 text-content-secondary">{meta}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Billing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-0.5">
              {billingLinks.map(([label, meta]) => (
                <li key={label}>
                  <NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
                    <span className="text-label-13">{label}</span>
                    <span className="text-copy-13 text-content-secondary">{meta}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Audit log
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
