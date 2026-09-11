/* The brand's type.
 *
 * A brand with a type *system* (Januna) gets the page Geist has: one table
 * per group — the style rendered in its real size, its class, when to use
 * it — read off the package's typography module. A brand with only a token
 * file gets the three faces at the sizes they are used at. */

import type { Pkg } from "../types";
import { CHROME, type TypeSystem } from "../brands";
import { PageHeader, SectionHeader } from "../components/PageHeader";

function Sample({ style, strong, faces }: { style: TypeSystem["GROUPS"][number]["styles"][number]; strong: "strong" | "subtle"; faces: TypeSystem["FACES"] }) {
  const mod = strong === "subtle" ? { fontWeight: 400, color: "var(--ds-gray-900)" } : { fontWeight: 500, color: "var(--ds-gray-1000)" };
  return (
    <span
      className="whitespace-nowrap text-gray-1000"
      style={{
        fontFamily: faces[style.family].stack,
        fontSize: style.size,
        lineHeight: `${style.line}px`,
        letterSpacing: style.tracking,
        fontWeight: style.weight,
        fontVariantNumeric: style.family === "mono" ? "tabular-nums" : undefined,
      }}
    >
      {style.name}
      {style.size <= 32 ? (
        <>
          {" "}
          <span style={mod}>with {strong === "subtle" ? "Subtle" : "Strong"}</span>
        </>
      ) : null}
    </span>
  );
}

function SystemPage({ type }: { type: TypeSystem }) {
  return (
    <article>
      <PageHeader title="Typography">
        <p className="mt-3 max-w-160 text-[15px] text-gray-900">
          {type.FACES.sans.name} for everything, {type.FACES.mono.name} for figures and code. Each style is one
          class that sets size, line height, tracking and weight together. Inside a style,{" "}
          <code>&lt;strong&gt;</code> is the modifier: Strong in Copy and Label, Subtle in Heading.
        </p>
      </PageHeader>

      {type.GROUPS.map((g) => (
        <section key={g.name}>
          <SectionHeader title={g.name} count={g.styles.length} />
          <p className="mt-4 max-w-160 text-[15px] text-gray-900">{g.note}</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-alpha-400 text-left text-[13px] text-gray-900">
                  <th className="h-9 pr-4 font-medium">Example</th>
                  <th className="h-9 pr-4 font-medium">Class</th>
                  <th className="h-9 font-medium">Usage</th>
                </tr>
              </thead>
              <tbody>
                {g.styles.map((st) => (
                  <tr key={st.cls} className="border-b border-alpha-400 last:border-b-0 hover:bg-alpha-100">
                    <td className="py-3 pr-6 align-middle">
                      <Sample style={st} strong={g.strong} faces={type.FACES} />
                    </td>
                    <td className="py-3 pr-6 align-middle font-mono text-[13px] whitespace-nowrap text-gray-1000">{st.cls}</td>
                    <td className="max-w-60 py-3 align-middle text-pretty text-gray-900">{st.use ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </article>
  );
}

function TokenPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  return (
    <article>
      <PageHeader title="Typography" />
      <section className="mt-12 max-w-224">
        {chrome.type.map((t) => (
          <div
            className="flex flex-wrap items-baseline justify-between gap-6 border-b border-alpha-400 py-5"
            key={t.name}
          >
            <span
              className="min-w-0 text-gray-1000"
              style={{ fontFamily: t.family, fontWeight: t.weight, fontSize: t.size, lineHeight: 1.2 }}
            >
              {t.name}
            </span>
            <span className="font-mono text-xs whitespace-nowrap text-gray-700">
              {t.size} · {t.weight} · {t.note}
            </span>
          </div>
        ))}
      </section>
    </article>
  );
}

export function TypographyPage({ pkg }: { pkg: Pkg }) {
  const type = CHROME[pkg.id].typography;
  return type ? <SystemPage type={type} /> : <TokenPage pkg={pkg} />;
}
