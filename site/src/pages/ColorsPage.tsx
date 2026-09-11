/* The brand's colours.
 *
 * A brand with a colour *system* (Januna) gets the page Geist has: every
 * scale as a row of ten, the two page backgrounds, and then the roles —
 * which step is a fill, a border, a contrast fill, an ink — read off the
 * package's own foundations module, so the page and the CSS cannot drift.
 * A click copies the value.
 *
 * A brand with only a token file gets the swatch grid. */

import * as React from "react";
import type { Pkg } from "../types";
import { CHROME, type ColorSystem } from "../brands";
import { PageHeader, SectionHeader } from "../components/PageHeader";

function useCopy() {
  const [copied, setCopied] = React.useState<string>();
  const copy = (key: string, text: string) => {
    void navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied((c) => (c === key ? undefined : c)), 1200);
  };
  return { copied, copy };
}

function Swatch({
  value,
  label,
  copied,
  onCopy,
}: {
  value: string;
  label: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      type="button"
      title={`${label}: ${value}`}
      aria-label={`Copy ${label}`}
      onClick={onCopy}
      className="relative aspect-square w-full max-w-17 cursor-copy rounded-sm border-0 p-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{ background: value }}
    >
      {copied ? (
        <span className="absolute inset-0 flex items-center justify-center rounded-sm bg-bg-100/90 font-mono text-[10px] text-gray-1000">
          copied
        </span>
      ) : null}
    </button>
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
  const { copied, copy } = useCopy();
  const { SCALES, STEPS, ROLES, BACKGROUNDS } = colors;
  const gray = SCALES[0]!;
  const bgs = Object.entries(BACKGROUNDS);
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
                <Swatch
                  key={step}
                  value={bg.value}
                  label={bg.name}
                  copied={copied === `bg-${step}`}
                  onCopy={() => copy(`bg-${step}`, bg.value)}
                />
              ))}
            </div>
          </Row>
          {SCALES.map((s) => (
            <Row key={s.id} name={s.name}>
              {STEPS.map((step) => (
                <Swatch
                  key={step}
                  value={s.steps[step]}
                  label={`${s.name} ${step}`}
                  copied={copied === `${s.id}-${step}`}
                  onCopy={() => copy(`${s.id}-${step}`, s.steps[step])}
                />
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
