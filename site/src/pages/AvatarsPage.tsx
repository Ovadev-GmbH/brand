/* TICKETOVA's blob avatars, as a proposal: a flat grey silhouette and two
   strokes for eyes, drawn from any string by @ovadev-gmbh/ticketova-blobs.
   The whole preview is this page, its stylesheet, one route, one nav entry
   and the package, so it comes out again in one revert. */

import { useState } from "react";
import { toast } from "sonner";
import { BlobAvatar } from "@ovadev-gmbh/ticketova-blobs/react";
import { blobSvg, blobTraits, EXPRESSIONS, SHAPES, TONES, type Expression, type Shape, type Traits } from "@ovadev-gmbh/ticketova-blobs";
import type { Pkg } from "../types";
import { PageHeader, SectionHeader } from "../components/PageHeader";
import "../styles/avatars.css";

const SHAPE_NAMES: Record<Shape, string> = {
  round: "Round", organic: "Organic", boxy: "Boxy", band: "Wristband", cloud: "Cloud",
  drop: "Drop", hexagon: "Hexagon", ticket: "Ticket", stamp: "Stamp", coin: "Coin",
};

const PEOPLE = ["Lea Meier", "Noah Keller", "Mia Frei", "Luca Brunner", "Elena Graf", "Jonas Huber", "Sofia Baumann", "Levin Wyss",
  "Nina Suter", "Matteo Roth", "Alina Moser", "David Steiner", "Lara Zürcher", "Elias Gerber", "Anna Widmer", "Tim Schmid",
  "Emma Fischer", "Nico Kälin", "Julia Hess", "Samuel Bühler", "Chiara Egli", "Robin Markant", "Beni", "Philip"];

const emailOf = (name: string) =>
  name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, ".") + "@example.ch";

const ORDERS = [
  ["Lea Meier", "10482", "Tageseintritt Erwachsene", "Bezahlt", "av-ok", "8.00"],
  ["Noah Keller", "10481", "Saisonabo 2027", "Bezahlt", "av-ok", "1'240.00"],
  ["Mia Frei", "10480", "Familienkarte", "Ausstehend", "av-pend", "24.00"],
  ["Luca Brunner", "10479", "Tageseintritt Kinder", "Erstattet", "av-ref", "4.00"],
  ["Elena Graf", "10478", "10er-Abo", "Bezahlt", "av-ok", "72.00"],
] as const;

export function AvatarsPage({ pkg }: { pkg: Pkg }) {
  const [seed, setSeed] = useState("lea.meier@example.ch");
  const [pinned, setPinned] = useState<Partial<Traits>>({});
  const [expression, setExpression] = useState<Expression>("idle");
  const t = blobTraits(seed, pinned);

  const load = (s: string) => { setSeed(s); setPinned({}); setExpression("idle"); };
  async function copy() {
    try { await navigator.clipboard.writeText(blobSvg(seed, { traits: pinned, expression })); toast.success("SVG copied"); }
    catch { toast.error("Couldn't copy the SVG."); }
  }

  return (
    <article className="avatars">
      <PageHeader title="Avatars">
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-900">
          A face for every customer without a photo. Any e-mail address or id always gives the same blob: one flat
          silhouette from {pkg.name}'s grey ramp and two strokes for eyes. Nothing to store, nothing to upload.
        </p>
        <p className="av-draft">Preview · not released · after Blobatar (MIT)</p>
      </PageHeader>

      <div className="av-play">
        <div className="av-hero">
          <BlobAvatar seed={seed} size={200} traits={pinned} expression={expression} animate="hover" title={`Avatar for ${seed}`} />
          <span>Hover it</span>
        </div>
        <div className="av-controls">
          <label>E-mail or id
            <input value={seed} onChange={(e) => load(e.target.value)} spellCheck={false} autoComplete="off" />
          </label>
          <div className="av-fields">
            <label>Shape
              <select value={t.shape} onChange={(e) => setPinned({ ...pinned, shape: e.target.value as Shape })}>
                {SHAPES.map((s) => <option key={s} value={s}>{SHAPE_NAMES[s]}</option>)}
              </select>
            </label>
            <label>Tone
              <select value={t.tone} onChange={(e) => setPinned({ ...pinned, tone: Number(e.target.value) })}>
                {TONES.map((tone, i) => <option key={tone.body} value={i}>{tone.body}</option>)}
              </select>
            </label>
            <label>Expression
              <select value={expression} onChange={(e) => setExpression(e.target.value as Expression)}>
                {EXPRESSIONS.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </label>
          </div>
          <div className="av-row-ctl">
            <button type="button" className="av-primary" onClick={() => load(`gast-${Math.random().toString(36).slice(2, 8)}@example.ch`)}>Random e-mail</button>
            <button type="button" onClick={() => { setPinned({}); setExpression("idle"); }}>Reset</button>
            <button type="button" onClick={copy}>Copy SVG</button>
          </div>
        </div>
      </div>

      <SectionHeader title="Shapes" count={SHAPES.length} />
      <p className="av-sub">Six blobs and four things from the ticket desk: a ticket, a postage stamp, a wristband, a coin.</p>
      <div className="av-row">
        {SHAPES.map((s) => (
          <figure key={s}>
            <BlobAvatar seed="shape" size={72} traits={{ shape: s, tone: 1, tilt: 0 }} animate="hover" />
            <figcaption>{SHAPE_NAMES[s]}</figcaption>
          </figure>
        ))}
      </div>

      <SectionHeader title="Tones" count={TONES.length} />
      <p className="av-sub">--tova-gray-400 to -1000. No hue: colour is how {pkg.name} says a state, and a customer is not a state.</p>
      <div className="av-row">
        {TONES.map((tone, i) => (
          <figure key={tone.body}>
            <BlobAvatar seed="tone" size={72} traits={{ shape: "boxy", tone: i }} />
            <figcaption>{tone.body}</figcaption>
          </figure>
        ))}
      </div>

      <SectionHeader title="Expressions" count={EXPRESSIONS.length} />
      <p className="av-sub">The same face, posed. For a profile, never in place of a state's word and never as an empty-state illustration.</p>
      <div className="av-row">
        {EXPRESSIONS.map((x) => (
          <figure key={x}>
            <BlobAvatar seed="face" size={72} expression={x} traits={{ shape: "boxy", tone: 5, tilt: -4 }} />
            <figcaption>{x}</figcaption>
          </figure>
        ))}
      </div>

      <SectionHeader title="Customers" />
      <p className="av-sub">Still at rest. On hover, one hop and one blink, 160 and 240 ms on the brand's easing; reduced motion gets none. Click one to load it above.</p>
      <div className="av-crowd">
        {PEOPLE.map((n) => (
          <button key={n} type="button" onClick={() => { load(emailOf(n)); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <BlobAvatar seed={emailOf(n)} size={56} animate="hover" title={n} />
            {n.split(" ")[0]}
          </button>
        ))}
      </div>

      <SectionHeader title="In the dashboard" />
      <p className="av-sub">32px, round, beside the name it belongs to.</p>
      <div className="av-card">
        <div className="av-card-head">
          <h3>Bestellungen</h3>
          <div className="av-team">Heute im Dienst
            <div className="av-stack">
              {["robin@ova.dev", "beni@ova.dev", "philip@ova.dev"].map((s) => <BlobAvatar key={s} seed={s} size={28} title={s} />)}
            </div>
          </div>
        </div>
        <table>
          <thead><tr><th>Kundin / Kunde</th><th>Bestellung</th><th>Ticket</th><th>Status</th><th className="av-r">Betrag</th></tr></thead>
          <tbody>
            {ORDERS.map(([n, no, ticket, state, cls, amount]) => (
              <tr key={no}>
                <td><div className="av-who"><BlobAvatar seed={emailOf(n)} size={32} /><div>{n}<small>{emailOf(n)}</small></div></div></td>
                <td className="av-m">{no}</td><td>{ticket}</td><td className={cls}>{state}</td><td className="av-m av-r">CHF {amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeader title="Usage" />
      <pre className="av-code">{`import { BlobAvatar } from "@ovadev-gmbh/ticketova-blobs/react";
import { blobSvg, blobDataUri } from "@ovadev-gmbh/ticketova-blobs";

<BlobAvatar seed={order.email} size={32} />
<BlobAvatar seed={user.id} size={40} animate="hover" />
<BlobAvatar seed={staff.id} traits={{ shape: "ticket" }} />

blobSvg(order.email, { size: 48 });        // server, confirmation e-mail, PDF ticket
blobDataUri(order.email, { background: "none" });`}</pre>
    </article>
  );
}
