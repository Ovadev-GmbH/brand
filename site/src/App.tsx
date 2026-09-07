import { Link, Navigate, Route, Routes, useParams } from "react-router";
import { PACKAGES, entryBySlug, pkgById } from "./registry";
import { Shell } from "./components/Shell";
import { PackagePage } from "./pages/PackagePage";
import { EntryPage } from "./pages/EntryPage";

/* Each package is its own catalog at /<package>. There is no page that lists
   components across packages: they are standalone libraries, and the site
   says so by having nothing but four doors at the root. */
function Doors() {
  return (
    <main className="cat-doors">
      <h1 className="cat-doors__title">Ovadev Brand</h1>
      <p className="cat-doors__lead">Four component libraries, each on its own.</p>
      <ul className="cat-doors__list">
        {PACKAGES.map((p) => (
          <li key={p.id}>
            <Link to={`/${p.id}`} className="cat-doors__link">
              <span className="cat-doors__name">{p.name}</span>
              <span className="cat-doors__pkg">{p.pkg}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

function Package() {
  const { pkg: id } = useParams();
  const pkg = pkgById(id);
  if (!pkg) return <Navigate to="/" replace />;
  return (
    <Shell pkg={pkg}>
      <PackagePage pkg={pkg} />
    </Shell>
  );
}

function Entry() {
  const { pkg: id, slug } = useParams();
  const pkg = pkgById(id);
  const entry = pkg ? entryBySlug(pkg, slug) : undefined;
  if (!pkg) return <Navigate to="/" replace />;
  if (!entry) return <Navigate to={`/${pkg.id}`} replace />;
  return (
    <Shell pkg={pkg} current={entry.slug}>
      <EntryPage pkg={pkg} entry={entry} />
    </Shell>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Doors />} />
      <Route path="/:pkg" element={<Package />} />
      <Route path="/:pkg/:slug" element={<Entry />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
