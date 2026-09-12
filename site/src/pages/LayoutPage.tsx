/* The brand's measure and motion: the spacing set, the corners, the easing
   and the durations, read off the package's layout module. */

import type { Pkg } from "../types";
import { mdHref } from "../registry";
import { CHROME, type LayoutSystem } from "../brands";
import { PageHeader, SectionHeader } from "../components/PageHeader";

function Table({ rows, render }: { rows: LayoutSystem["SPACING"]; render: (t: LayoutSystem["SPACING"][number]) => React.ReactNode }) {
  return (
    <div className="mt-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-alpha-400 text-left text-[13px] text-gray-900">
            <th className="h-9 pr-4 font-medium">Example</th>
            <th className="h-9 pr-4 font-medium">Token</th>
            <th className="h-9 pr-4 font-medium">Value</th>
            <th className="h-9 font-medium">Usage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((t) => (
            <tr key={t.token} className="border-b border-alpha-400 last:border-b-0">
              <td className="w-56 py-4 pr-6 align-middle">{render(t)}</td>
              <td className="py-4 pr-6 align-middle font-mono text-[13px] whitespace-nowrap text-gray-1000">{t.token}</td>
              <td className="py-4 pr-6 align-middle font-mono text-[13px] whitespace-nowrap text-gray-900">{t.value}</td>
              <td className="max-w-60 py-4 align-middle text-pretty text-gray-900">{t.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LayoutPage({ pkg }: { pkg: Pkg }) {
  const layout = CHROME[pkg.id].layout;
  if (!layout) return null;
  return (
    <article>
      <PageHeader title="Layout" md={mdHref(pkg, "layout")}>
        <p className="mt-3 max-w-160 text-[15px] text-gray-900">
          The spacing set, the corners, and how things move. Three short lists, so a layout is made of the same
          few steps everywhere.
        </p>
      </PageHeader>
      <section>
        <SectionHeader title="Spacing" count={layout.SPACING.length} />
        <Table
          rows={layout.SPACING}
          render={(t) => (
            <span
              className="block h-4 rounded-sm bg-accent"
              style={{ width: t.value, maxWidth: "100%" }}
            />
          )}
        />
      </section>
      <section>
        <SectionHeader title="Radius" count={layout.RADIUS.length} />
        <Table
          rows={layout.RADIUS}
          render={(t) => (
            <span
              className="block h-16 w-40 border border-alpha-600 bg-bg-100"
              style={{ borderRadius: t.value === "4rem" ? "32px" : t.value }}
            />
          )}
        />
      </section>
      <section>
        <SectionHeader title="Motion" count={layout.MOTION.length} />
        <Table
          rows={layout.MOTION}
          render={(t) => (
            <span className="group/m block h-8 w-40 rounded-brand bg-alpha-100">
              <span
                className="block h-8 w-8 rounded-brand bg-accent transition-transform group-hover/m:translate-x-32"
                style={{
                  transitionTimingFunction: t.token.startsWith("ease") ? t.value : layout.MOTION[0]!.value,
                  transitionDuration: t.token.startsWith("duration") ? t.value : "450ms",
                }}
              />
            </span>
          )}
        />
        <ul className="mt-6 mb-0 max-w-160 list-disc space-y-1.5 pl-5 text-sm text-gray-900">
          {layout.PRACTICES.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
