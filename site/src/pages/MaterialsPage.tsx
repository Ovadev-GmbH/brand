/* The brand's materials: radius, fill, stroke and shadow as presets, by
   elevation. Read off the package's materials module; each row renders the
   material with its real values. */

import type { Pkg } from "../types";
import { mdHref } from "../registry";
import { CHROME, type MaterialSystem } from "../brands";
import { PageHeader, SectionHeader } from "../components/PageHeader";

function Table({ rows }: { rows: MaterialSystem["SURFACE"] }) {
  return (
    <div className="mt-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-alpha-400 text-left text-[13px] text-gray-900">
            <th className="h-9 pr-4 font-medium">Example</th>
            <th className="h-9 pr-4 font-medium">Class</th>
            <th className="h-9 font-medium">Usage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((m) => (
            <tr key={m.cls} className="border-b border-alpha-400 last:border-b-0">
              <td className="py-8 pr-6 pl-1 align-middle">
                <div
                  className="h-24 w-60 max-w-full"
                  style={{
                    borderRadius: m.radius,
                    background: m.fill,
                    boxShadow: m.shadow === "none" ? m.stroke : `${m.stroke}, ${m.shadow}`,
                  }}
                />
              </td>
              <td className="py-5 pr-6 align-middle font-mono text-[13px] whitespace-nowrap text-gray-1000">{m.cls}</td>
              <td className="max-w-60 py-5 align-middle text-pretty text-gray-900">
                {m.use} Radius {m.radius}px.
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MaterialsPage({ pkg }: { pkg: Pkg }) {
  const materials = CHROME[pkg.id].materials;
  if (!materials) return null;
  return (
    <article data-brand={pkg.id}>
      <PageHeader title="Materials" md={mdHref(pkg, "materials")}>
        <p className="mt-3 max-w-160 text-[15px] text-gray-900">
          Presets for radius, fill, stroke and shadow, chosen together for where a surface sits. One class each,
          so nothing hand-rolls a shadow.
        </p>
      </PageHeader>
      <section>
        <SectionHeader title="Surface" count={materials.SURFACE.length} />
        <p className="mt-4 text-[15px] text-gray-900">On the page.</p>
        <Table rows={materials.SURFACE} />
      </section>
      <section>
        <SectionHeader title="Floating" count={materials.FLOATING.length} />
        <p className="mt-4 text-[15px] text-gray-900">Above the page.</p>
        <Table rows={materials.FLOATING} />
      </section>
      <section>
        <SectionHeader title="Tints" count={materials.TINTS.length} />
        <p className="mt-4 text-[15px] text-gray-900">The small material with a colour in its ring.</p>
        <Table rows={materials.TINTS} />
      </section>
      <section>
        <SectionHeader title="Best practices" />
        {materials.PRACTICES.map((p) => (
          <div key={p.name} className="mt-6 max-w-160">
            <h4 className="m-0 text-base font-medium text-gray-1000">{p.name}</h4>
            <ul className="mt-2 mb-0 list-disc space-y-1.5 pl-5 text-sm text-gray-900">
              {p.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}
