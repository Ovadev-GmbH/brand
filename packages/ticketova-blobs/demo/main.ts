import { blobSvg, blobTraits, EXPRESSIONS, SHAPES, TONES, type Expression, type Traits } from "../src/index";

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const seedInput = $<HTMLInputElement>("seed");
const shapeSel = $<HTMLSelectElement>("f-shape"), toneSel = $<HTMLSelectElement>("f-tone"), exprSel = $<HTMLSelectElement>("f-expr");
let pinned: Partial<Traits> = {};
let expression: Expression = "idle";

const SHAPE_DE: Record<string, string> = {
  round: "Rund", organic: "Organisch", boxy: "Kasten", band: "Armband", cloud: "Wolke",
  drop: "Tropfen", hexagon: "Sechseck", ticket: "Ticket", stamp: "Briefmarke", coin: "Münze",
};
const EXPR_DE: Record<Expression, string> = {
  idle: "Neutral", happy: "Fröhlich", sad: "Traurig", mad: "Wütend", surprised: "Überrascht",
  wink: "Zwinkernd", sleepy: "Müde", smug: "Selbstzufrieden", shy: "Schüchtern", scared: "Erschrocken",
};
shapeSel.innerHTML = SHAPES.map((s) => `<option value="${s}">${SHAPE_DE[s]}</option>`).join("");
toneSel.innerHTML = TONES.map((t, i) => `<option value="${i}">${t}</option>`).join("");
exprSel.innerHTML = EXPRESSIONS.map((e) => `<option value="${e}">${EXPR_DE[e]}</option>`).join("");

const emailOf = (name: string) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, ".") + "@example.ch";

function render() {
  const seed = seedInput.value;
  const t = blobTraits(seed, pinned);
  $("big").innerHTML = blobSvg(seed, { size: 200, traits: pinned, expression, animate: "hover", title: `Blob für ${seed}` });
  shapeSel.value = t.shape; toneSel.value = String(t.tone); exprSel.value = expression;
}

shapeSel.onchange = () => { pinned.shape = shapeSel.value as Traits["shape"]; render(); };
toneSel.onchange = () => { pinned.tone = Number(toneSel.value); render(); };
exprSel.onchange = () => { expression = exprSel.value as Expression; render(); };
seedInput.oninput = () => { pinned = {}; render(); };
$("reset").onclick = () => { pinned = {}; expression = "idle"; render(); };
$("shuffle").onclick = () => {
  seedInput.value = `gast-${Math.random().toString(36).slice(2, 8)}@example.ch`;
  pinned = {}; render();
};
$("copy").onclick = async () => {
  await navigator.clipboard.writeText(blobSvg(seedInput.value, { traits: pinned, expression }));
  const b = $("copy"); b.textContent = "Kopiert"; setTimeout(() => (b.textContent = "SVG kopieren"), 1200);
};

$("shapes").innerHTML = SHAPES.map((s) =>
  `<figure>${blobSvg("form", { size: 72, traits: { shape: s, tone: 1, tilt: 0 }, animate: "hover" })}<figcaption>${SHAPE_DE[s]}</figcaption></figure>`).join("");
$("exprs").innerHTML = EXPRESSIONS.map((e) =>
  `<figure>${blobSvg("gesicht", { size: 72, expression: e, traits: { shape: "boxy", tone: 5, tilt: -4 } })}<figcaption>${EXPR_DE[e]}</figcaption></figure>`).join("");

const NAMES = ["Lea Meier", "Noah Keller", "Mia Frei", "Luca Brunner", "Elena Graf", "Jonas Huber", "Sofia Baumann", "Levin Wyss",
  "Nina Suter", "Matteo Roth", "Alina Moser", "David Steiner", "Lara Zürcher", "Elias Gerber", "Anna Widmer", "Tim Schmid",
  "Emma Fischer", "Nico Kälin", "Julia Hess", "Samuel Bühler", "Chiara Egli", "Robin Markant"];
$("crowd").innerHTML = NAMES.map((n) =>
  `<button data-seed="${emailOf(n)}">${blobSvg(emailOf(n), { size: 56, animate: "hover", title: n })}${n.split(" ")[0]}</button>`).join("");
$("crowd").onclick = (e) => {
  const b = (e.target as HTMLElement).closest("button");
  if (!b) return;
  seedInput.value = b.dataset.seed!; pinned = {}; expression = "idle"; render();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ORDERS = [
  ["Lea Meier", "10482", "Tageseintritt Erwachsene", "Bezahlt", "ok", "8.00"],
  ["Noah Keller", "10481", "Saisonabo 2027", "Bezahlt", "ok", "1'240.00"],
  ["Mia Frei", "10480", "Familienkarte", "Ausstehend", "pend", "24.00"],
  ["Luca Brunner", "10479", "Tageseintritt Kinder", "Erstattet", "ref", "4.00"],
  ["Elena Graf", "10478", "10er-Abo", "Bezahlt", "ok", "72.00"],
] as const;
$("orders").innerHTML = ORDERS.map(([n, no, tk, st, cls, amt]) => `<tr>
  <td><div class="who">${blobSvg(emailOf(n), { size: 32 })}<div>${n}<small>${emailOf(n)}</small></div></div></td>
  <td class="m">${no}</td><td>${tk}</td><td><span class="state ${cls}">${st}</span></td><td class="m r">CHF ${amt}</td></tr>`).join("");
$("team").innerHTML = ["robin@ova.dev", "beni@ova.dev", "philip@ova.dev"].map((s) =>
  `<span>${blobSvg(s, { size: 28, title: s })}</span>`).join("");

render();
