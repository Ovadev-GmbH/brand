import * as React from "react";
import type { Example as ExampleData } from "../types";

function Toggle<T extends string>({ value, onChange, options, label }: { value: T; onChange: (v: T) => void; options: { value: T; label: string }[]; label: string }) {
  return (
    <div className="cat-toggle" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.value} type="button" className={`cat-toggle__btn ${o.value === value ? "cat-toggle__btn--active" : ""}`} aria-pressed={o.value === value} onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** One example on a component page: live demo on a switchable ground, the
 *  source underneath on demand, and a link to exactly this example. */
export function Example({ example, anchor }: { example: ExampleData; anchor: string }) {
  const [ground, setGround] = React.useState<"light" | "dark">(example.dark ? "dark" : "light");
  const [view, setView] = React.useState<"demo" | "code">("demo");
  const [copied, setCopied] = React.useState(false);
  const Demo = example.Component;
  const copy = async () => {
    const url = `${location.origin}${location.pathname}#${anchor}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Kopieren:", url);
    }
  };
  return (
    <section className="cat-example" id={anchor}>
      <div className="cat-example__head">
        <h3 className="cat-example__title">
          <a href={`#${anchor}`}>{example.title}</a>
        </h3>
        <div className="cat-example__tools">
          <Toggle label="Grund" value={ground} onChange={setGround} options={[{ value: "light", label: "Hell" }, { value: "dark", label: "Dunkel" }]} />
          <Toggle label="Ansicht" value={view} onChange={setView} options={[{ value: "demo", label: "Demo" }, { value: "code", label: "Code" }]} />
          <button type="button" className="cat-btn" onClick={copy}>
            {copied ? "Kopiert" : "Link"}
          </button>
        </div>
      </div>
      {example.note ? <p className="cat-example__note">{example.note}</p> : null}
      {view === "demo" ? (
        <div className={`cat-ground ${ground === "dark" ? "cat-ground--dark" : ""}`}>
          <Demo />
        </div>
      ) : (
        <pre className="cat-code">
          <code>{example.source}</code>
        </pre>
      )}
    </section>
  );
}
