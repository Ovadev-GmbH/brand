/* The introduction's card previews: one small, inert picture per
   foundation, in the shape Geist gives its own front door. Each draws with
   the brand's real values (read from the package) and nothing else. */

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon, UserGroupIcon, RestaurantTableIcon, Home01Icon, Settings01Icon, Search01Icon,
  Mail01Icon, Notification01Icon, Clock01Icon, Location01Icon, CreditCardIcon, ChartLineData01Icon,
  Invoice01Icon, Dish01Icon, ChefHatIcon, Call02Icon, Message01Icon, Tick02Icon, Wallet01Icon,
  Analytics01Icon, Timer01Icon, Globe02Icon, QrCodeIcon, Tag01Icon,
} from "@hugeicons/core-free-icons";
import * as Ph from "@phosphor-icons/react";
import type { IconSet, LayoutSystem, MaterialSystem, TypeSystem } from "../brands";

const PHOSPHOR = [
  Ph.CalendarIcon, Ph.UsersIcon, Ph.ReceiptIcon, Ph.HouseIcon, Ph.GearIcon, Ph.MagnifyingGlassIcon, Ph.EnvelopeIcon, Ph.BellIcon,
  Ph.ClockIcon, Ph.MapPinIcon, Ph.CreditCardIcon, Ph.ChartLineIcon, Ph.InvoiceIcon, Ph.RocketLaunchIcon, Ph.ShieldCheckIcon, Ph.PhoneIcon,
  Ph.ChatCircleIcon, Ph.CheckIcon, Ph.WalletIcon, Ph.ChartBarIcon, Ph.TimerIcon, Ph.GlobeIcon, Ph.QrCodeIcon, Ph.TagIcon,
];

const ICONS = [
  Calendar03Icon, UserGroupIcon, RestaurantTableIcon, Home01Icon, Settings01Icon, Search01Icon, Mail01Icon, Notification01Icon,
  Clock01Icon, Location01Icon, CreditCardIcon, ChartLineData01Icon, Invoice01Icon, Dish01Icon, ChefHatIcon, Call02Icon,
  Message01Icon, Tick02Icon, Wallet01Icon, Analytics01Icon, Timer01Icon, Globe02Icon, QrCodeIcon, Tag01Icon,
];

export function IconGrid({ icons }: { icons: IconSet }) {
  return (
    <div className="grid grid-cols-8 gap-x-7 gap-y-5" style={{ color: icons.color }}>
      {icons.kind === "phosphor"
        ? PHOSPHOR.map((Icon, i) => <Icon key={i} size={22} aria-hidden />)
        : ICONS.map((icon, i) => <HugeiconsIcon key={i} icon={icon} size={22} strokeWidth={1.5} aria-hidden="true" />)}
    </div>
  );
}

export function TypePanel({ type }: { type: TypeSystem }) {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 rounded-brand border border-dashed border-alpha-600 text-[22px] font-medium text-gray-800">
      <span className="flex h-24 items-center justify-center border-r border-dashed border-alpha-600" style={{ fontFamily: type.FACES.sans.stack, letterSpacing: "-0.02em" }}>
        {type.FACES.sans.name}
      </span>
      <span className="flex h-24 items-center justify-center" style={{ fontFamily: type.FACES.mono.stack }}>
        {type.FACES.mono.name}
      </span>
    </div>
  );
}

export function MaterialStack({ materials }: { materials: MaterialSystem }) {
  const [base, small, , large] = materials.SURFACE;
  const menu = materials.FLOATING[1];
  const layers = [base, small, large, menu].filter(Boolean) as MaterialSystem["SURFACE"];
  return (
    <div className="relative h-28 w-64">
      {layers.map((m, i) => (
        <div
          key={m.cls}
          className="absolute h-20 w-40"
          style={{
            left: i * 28,
            top: i * 6,
            borderRadius: m.radius,
            background: "#fff",
            boxShadow: m.shadow === "none" ? m.stroke : `${m.stroke}, ${m.shadow}`,
          }}
        />
      ))}
    </div>
  );
}

export function GridPreview({ layout }: { layout: LayoutSystem }) {
  const cell = 32;
  const cols = 9;
  const rows = 2;
  const r = layout.RADIUS[1]?.value ?? "12px";
  return (
    <div className="relative" style={{ width: cell * cols, height: cell * rows }}>
      <svg width={cell * cols} height={cell * rows} className="text-alpha-400" aria-hidden="true">
        {Array.from({ length: cols + 1 }, (_, i) => (
          <line key={`v${i}`} x1={i * cell + 0.5} y1={0} x2={i * cell + 0.5} y2={cell * rows} stroke="currentColor" />
        ))}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={i * cell + 0.5} x2={cell * cols} y2={i * cell + 0.5} stroke="currentColor" />
        ))}
      </svg>
      <span className="absolute top-2 left-2 h-12 w-24 bg-bg-100 shadow-border" style={{ borderRadius: r }} />
      <span className="absolute top-2 left-28 h-12 w-12 bg-bg-100 shadow-border" style={{ borderRadius: r }} />
    </div>
  );
}
