/* The brand's colours.
 *
 * A brand with a colour *system* (Januna) gets the page Geist has: every
 * scale as a row of ten, the two page backgrounds, and then the roles —
 * which step is a fill, a border, a contrast fill, an ink — read off the
 * package's own foundations module, so the page and the CSS cannot drift.
 * A click copies the value.
 *
 * A brand with only a token file gets the swatch grid. */

import { toast } from "sonner";
import type { Pkg } from "../types";
import { CHROME, type ColorSystem } from "../brands";
import { PageHeader, SectionHeader } from "../components/PageHeader";

/** Put a value on the clipboard and say so, once, quietly. */
function copy(label: string, value: string) {
  void navigator.clipboard.writeText(value);
  toast(`Copied ${label}`, { description: value });
}

function Swatch({ value, label }: { value: string; label: string }) {
  return (
    <button
      type="button"
      title={`${label}: ${value}`}
      aria-label={`Copy ${label}`}
      onClick={() => copy(label, value)}
      className="aspect-square w-full max-w-17 cursor-copy rounded-sm border-0 p-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{ background: value }}
    />
  );
}

function Row({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
      <p className="m-0 w-25 shrink-0 text-sm font-medium text-gray-1000">{name}</p>
      <div className="flex w-full gap-1 md:gap-2">{children}</div>
    </div>
  );
}

function Dot({ value }: { value: string }) {
  return <span className="size-4 shrink-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" style={{ background: value }} />;
}

function Legend({ rows }: { rows: { value: string; name: string; use: string }[] }) {
  return (
    <div className="my-5">
      {rows.map((r) => (
        <div key={r.name} className="flex h-10 items-center gap-3 border-b border-alpha-400 last:border-b-0">
          <Dot value={r.value} />
          <p className="m-0 w-30 shrink-0 text-sm font-medium text-gray-1000">{r.name}</p>
          <p className="m-0 text-sm text-gray-900">{r.use}</p>
        </div>
      ))}
    </div>
  );
}

function SystemPage({ pkg, colors }: { pkg: Pkg; colors: ColorSystem }) {
  const { SCALES, STEPS, ROLES, BACKGROUNDS, SEMANTIC } = colors;
  const gray = SCALES[0]!;
  const bgs = Object.entries(BACKGROUNDS);
  /** A semantic token's literal value, for the swatch: background-200 or
   *  gray-alpha-400 resolved against the scales. */
  const resolve = (ref: string): string => {
    const m = /^(.*)-(\d+)$/.exec(ref);
    if (!m) return ref;
    const [, id, step] = m;
    if (id === "background") return BACKGROUNDS[Number(step) as 100 | 200].value;
    return SCALES.find((sc) => sc.id === id)?.steps[Number(step) as (typeof STEPS)[number]] ?? ref;
  };
  return (
    <article>
      <PageHeader title="Colors">
        <p className="mt-3 max-w-160 text-[15px] text-gray-900">
          {SCALES.length} scales of ten steps, and the same ten roles on every scale. Click a swatch to copy its
          value; the token is <code>--{pkg.id === "januna" ? "jan" : pkg.id}-&lt;scale&gt;-&lt;step&gt;</code>, the
          Tailwind colour <code>&lt;scale&gt;-&lt;step&gt;</code>.
        </p>
      </PageHeader>

      <section>
        <SectionHeader title="Scales" count={SCALES.length} />
        <div className="space-y-6">
          <Row name="Backgrounds">
            <div className="flex w-full gap-1 md:w-[152px] md:gap-2">
              {bgs.map(([step, bg]) => (
                <Swatch key={step} value={bg.value} label={bg.name} />
              ))}
            </div>
          </Row>
          {SCALES.map((s) => (
            <Row key={s.id} name={s.name}>
              {STEPS.map((step) => (
                <Swatch key={step} value={s.steps[step]} label={`${s.name} ${step}`} />
              ))}
            </Row>
          ))}
        </div>
        <dl className="mt-8 grid max-w-224 gap-x-8 gap-y-2 text-sm md:grid-cols-2">
          {SCALES.map((s) => (
            <div key={s.id} className="flex gap-3">
              <dt className="w-25 shrink-0 font-medium text-gray-1000">{s.name}</dt>
              <dd className="m-0 text-gray-900">{s.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionHeader title="Backgrounds" count={bgs.length} />
        <p className="mt-4 max-w-160 text-[15px] text-gray-900">
          Two page backgrounds. Background 1 is the sheet almost everything sits on, and the one colour is
          placed on. Background 2 is the island: the sidebar, a panel, a subtle step, used sparingly.
        </p>
        <Legend rows={bgs.map(([, bg]) => ({ value: bg.value, name: bg.name, use: bg.use }))} />
      </section>

      <section>
        <SectionHeader title="Semantic" count={SEMANTIC.reduce((n, g) => n + g.tokens.length, 0)} />
        <p className="mt-4 max-w-160 text-[15px] text-gray-900">
          What a surface, a piece of text or a status <em>is</em>, each pointing at one step of one scale. This is
          the vocabulary to write with: <code>bg-surface-secondary</code>, <code>text-content-tertiary</code>,{" "}
          <code>bg-status-danger/10</code>. Reach for a scale step only for an exact colour.
        </p>
        {SEMANTIC.map((g) => (
          <div key={g.name} className="mt-8">
            <h3 className="m-0 text-base font-semibold text-gray-1000">{g.name}</h3>
            <p className="mt-1 mb-0 text-sm text-gray-900">{g.note}</p>
            <div className="mt-3">
              {g.tokens.map((t) => (
                <div key={t.token} className="flex min-h-10 items-center gap-3 border-b border-alpha-400 py-2 last:border-b-0">
                  <Dot value={resolve(t.ref)} />
                  <code className="w-44 shrink-0 font-mono text-[13px] text-gray-1000">{t.token}</code>
                  <code className="hidden w-32 shrink-0 font-mono text-[12px] text-gray-700 md:block">{t.ref}</code>
                  <p className="m-0 text-sm text-gray-900">{t.use}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {ROLES.map((role) => {
        const range =
          role.steps.length > 1
            ? `${role.steps[0]! / 100}–${role.steps[role.steps.length - 1]! / 100}`
            : `${role.steps[0]! / 100}`;
        return (
          <section key={role.name}>
            <SectionHeader title={`Colors ${range}: ${role.name}`} />
            <p className="mt-4 max-w-160 text-[15px] text-gray-900">{role.use}</p>
            <Legend
              rows={role.steps.map((step, i) => ({
                value: gray.steps[step],
                name: `Color ${step / 100}`,
                use: role.each[i] ?? "",
              }))}
            />
          </section>
        );
      })}
    </article>
  );
}

function TokenPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  return (
    <article>
      <PageHeader title="Colors" />
      <section className="mt-12 max-w-224">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {chrome.swatches.map((s) => (
            <div className="overflow-hidden rounded-brand border border-alpha-400" key={s.token}>
              <div className="h-22" style={{ background: s.value }} />
              <div className="border-t border-alpha-400 px-3 py-2.5">
                <span className="text-[13px] font-semibold text-gray-1000">{s.name}</span>
                <code className="block break-all font-mono text-xs text-gray-900">{s.value}</code>
                <code className="block font-mono text-[11px] text-gray-700">{s.token}</code>
                {s.note ? <p className="mt-1.5 mb-0 text-sm text-gray-900">{s.note}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export function ColorsPage({ pkg }: { pkg: Pkg }) {
  const colors = CHROME[pkg.id].colors;
  return colors ? <SystemPage pkg={pkg} colors={colors} /> : <TokenPage pkg={pkg} />;
}
