"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { Logout01Icon, Settings01Icon, UnfoldMoreIcon } from "@hugeicons/core-free-icons";
import { cn } from "../lib/utils";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Separator } from "../components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";

/* A nav item's icon: a Hugeicons icon (the set the package ships) or any
   component that draws an svg. */
type NavIcon = IconSvgElement | React.ComponentType<{ className?: string }>;

type NavItem = { title: string; icon?: NavIcon; href?: string; active?: boolean; badge?: string };
type NavGroup = { label: string; items: NavItem[] };
/* The signed-in person at the foot of the sidebar. Settings and Sign out
   each appear only with somewhere to go (…Href) or something to run (on…);
   signing out usually has to POST, so it takes a handler. */
type AppShellUser = {
  name: string;
  /** The line under the name: an e-mail, a phone number, a role. */
  email?: string;
  settingsHref?: string;
  onSettings?: () => void;
  signOutHref?: string;
  onSignOut?: () => void;
};

function NavItemIcon({ icon: Icon }: { icon: NavIcon }) {
  if (typeof Icon === "function") return <Icon />;
  return <HugeiconsIcon icon={Icon} strokeWidth={2} />;
}

/* Two letters for a name without a picture: "Lena Brunner" reads LB. */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

/* The frame of the app: the taupe sidebar with the brand at the top, the
   navigation in groups, the signed-in person at the bottom, and the page to
   its right. The sidebar is fixed to the viewport, as in an app; to keep it
   inside a box (a preview, a demo) make the shell `relative overflow-hidden`
   with a height and pass `sidebarClassName="absolute h-full"`. */
function AppShell({
  nav,
  brand,
  user,
  sidebarClassName,
  className,
  children,
  ...props
}: React.ComponentProps<typeof SidebarProvider> & {
  nav: NavGroup[];
  brand?: React.ReactNode;
  user?: AppShellUser;
  sidebarClassName?: string;
}) {
  const settings = !!(user?.settingsHref || user?.onSettings);
  const signOut = !!(user?.signOutHref || user?.onSignOut);
  return (
    <SidebarProvider data-slot="app-shell" className={cn("bg-surface-primary", className)} {...props}>
      <Sidebar className={sidebarClassName}>
        {brand ? <SidebarHeader className="px-space-3 pt-space-3">{brand}</SidebarHeader> : null}
        <SidebarContent>
          {nav.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={item.active}
                        render={item.href ? <a href={item.href} aria-current={item.active ? "page" : undefined} /> : undefined}
                      >
                        {item.icon ? <NavItemIcon icon={item.icon} /> : null}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        {user ? (
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<SidebarMenuButton size="lg" className="h-12 rounded-regular aria-expanded:bg-sidebar-accent" />}
                    aria-label={`Account menu for ${user.name}`}
                  >
                    <Avatar aria-hidden="true">
                      <AvatarFallback>{initials(user.name)}</AvatarFallback>
                    </Avatar>
                    <span className="flex min-w-0 flex-1 flex-col text-left">
                      <span className="truncate text-label-14">{user.name}</span>
                      {user.email ? <span className="truncate text-label-12 text-content-secondary">{user.email}</span> : null}
                    </span>
                    <HugeiconsIcon icon={UnfoldMoreIcon} strokeWidth={2} className="text-content-tertiary" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="start" sideOffset={8}>
                    {settings ? (
                      <DropdownMenuItem render={user.settingsHref ? <a href={user.settingsHref} /> : undefined} onClick={user.onSettings}>
                        <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                        Settings
                      </DropdownMenuItem>
                    ) : null}
                    {settings && signOut ? <DropdownMenuSeparator /> : null}
                    {signOut ? (
                      <DropdownMenuItem render={user.signOutHref ? <a href={user.signOutHref} /> : undefined} onClick={user.onSignOut}>
                        <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
                        Sign out
                      </DropdownMenuItem>
                    ) : null}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        ) : null}
      </Sidebar>
      <SidebarInset className="min-w-0">{children}</SidebarInset>
    </SidebarProvider>
  );
}

/* The strip above the page: the sidebar toggle, where the reader is, and the
   page's actions at the right end. */
function AppShellHeader({
  crumbs = [],
  actions,
  className,
  children,
  ...props
}: React.ComponentProps<"header"> & { crumbs?: string[]; actions?: React.ReactNode }) {
  return (
    <header
      data-slot="app-shell-header"
      className={cn("flex h-12 shrink-0 items-center gap-space-2 border-b border-divider px-space-4", className)}
      {...props}
    >
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="data-vertical:h-4 data-vertical:self-auto" />
      {crumbs.length ? (
        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;
              return (
                <React.Fragment key={`${index}-${crumb}`}>
                  <BreadcrumbItem className={last ? undefined : "hidden md:inline-flex"}>
                    {last ? <BreadcrumbPage>{crumb}</BreadcrumbPage> : <span>{crumb}</span>}
                  </BreadcrumbItem>
                  {last ? null : <BreadcrumbSeparator className="hidden md:block" />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      ) : null}
      {children}
      {actions ? (
        <div data-slot="app-shell-actions" className="ml-auto flex items-center gap-space-2">
          {actions}
        </div>
      ) : null}
    </header>
  );
}

/* The page itself: a column of sections with one owner for the gaps. */
function AppShellContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="app-shell-content" className={cn("flex min-h-0 flex-1 flex-col gap-space-6 overflow-y-auto p-space-6 *:shrink-0", className)} {...props} />;
}

export type { NavGroup as AppShellNavGroup, NavItem as AppShellNavItem, AppShellUser };
export { AppShell, AppShellHeader, AppShellContent };
