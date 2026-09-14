"use client";

import * as React from "react";
import { ChevronsUpDownIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
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
import { cn } from "../lib/utils";

type AppShellNavItem = {
  title: string;
  icon?: React.ComponentType;
  href?: string;
  active?: boolean;
  /** A count beside the title, in mono: unanswered contact requests, draft posts. */
  badge?: string;
};

type AppShellNavGroup = { label: string; items: AppShellNavItem[] };

type AppShellUser = { name: string; email: string };

/* Two capitals from a name: "Robin Markant" reads RM. */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

/* The frame of every screen: the sidebar with the navigation, the page
   beside it. The sidebar is fixed to the viewport; to keep it inside a
   box, make the shell `relative overflow-hidden` with a height and give
   the sidebar `absolute h-full` through `sidebarClassName`. */
function AppShell({
  nav,
  brand,
  user,
  sidebarClassName,
  className,
  children,
  ...props
}: React.ComponentProps<typeof SidebarProvider> & {
  nav: AppShellNavGroup[];
  /** The sidebar's header: the brand word, the site, the language. */
  brand?: React.ReactNode;
  /** Shown in the sidebar's footer with a menu: settings, sign out. */
  user?: AppShellUser;
  sidebarClassName?: string;
}) {
  return (
    <SidebarProvider data-slot="app-shell" className={cn(className)} {...props}>
      <Sidebar className={sidebarClassName}>
        {brand ? (
          <SidebarHeader>
            <div className="flex h-8 items-center gap-space-2 px-2 text-label-13 text-content-primary">{brand}</div>
          </SidebarHeader>
        ) : null}
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
                        {item.icon ? <item.icon /> : null}
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
                    render={<SidebarMenuButton size="lg" className="data-open:bg-surface-active" aria-label={`Account: ${user.name}`} />}
                  >
                    <Avatar size="sm" aria-hidden="true">
                      <AvatarFallback>{initials(user.name)}</AvatarFallback>
                    </Avatar>
                    <span className="flex min-w-0 flex-1 flex-col text-left">
                      <span className="truncate text-label-13">{user.name}</span>
                      <span className="truncate text-label-12 text-content-secondary">{user.email}</span>
                    </span>
                    <ChevronsUpDownIcon className="text-content-secondary" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="start" className="w-(--anchor-width)">
                    <DropdownMenuLabel className="truncate">{user.email}</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <SettingsIcon />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOutIcon />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        ) : null}
      </Sidebar>
      <SidebarInset className="min-h-0 min-w-0">{children}</SidebarInset>
    </SidebarProvider>
  );
}

/* The row at the top of the page: the sidebar's toggle, where the page
   sits, the page's actions at the right. */
function AppShellHeader({
  crumbs = [],
  actions,
  className,
  children,
  ...props
}: React.ComponentProps<"header"> & { crumbs?: string[]; actions?: React.ReactNode }) {
  const last = crumbs.length - 1;
  return (
    <header
      data-slot="app-shell-header"
      className={cn("flex h-12 shrink-0 items-center gap-space-2 border-b border-divider px-space-3", className)}
      {...props}
    >
      <SidebarTrigger />
      <Separator orientation="vertical" className="data-vertical:h-4 data-vertical:self-auto" />
      {crumbs.length ? (
        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map((crumb, index) => (
              <React.Fragment key={`${index}-${crumb}`}>
                {index > 0 ? <BreadcrumbSeparator /> : null}
                <BreadcrumbItem>{index === last ? <BreadcrumbPage>{crumb}</BreadcrumbPage> : crumb}</BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      ) : null}
      {children}
      {actions ? (
        <div data-slot="app-shell-header-actions" className="ml-auto flex items-center gap-space-2">
          {actions}
        </div>
      ) : null}
    </header>
  );
}

/* The page itself: a column of sections, scrolling on its own when the
   shell is boxed. */
function AppShellContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="app-shell-content"
      className={cn("flex min-h-0 flex-1 flex-col gap-space-6 overflow-auto p-space-6", className)}
      {...props}
    />
  );
}

export type { AppShellNavItem, AppShellNavGroup, AppShellUser };
export { AppShell, AppShellHeader, AppShellContent };
