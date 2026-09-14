import * as React from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { entryBySlug, pkgById } from "./registry";
import { CHROME } from "./brands";
import { Shell } from "./components/Shell";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";
import { ColorsPage } from "./pages/ColorsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { BrandAssetsPage } from "./pages/BrandAssetsPage";
import { IconsPage } from "./pages/IconsPage";
import { MaterialsPage } from "./pages/MaterialsPage";
import { LayoutPage } from "./pages/LayoutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EntryPage } from "./pages/EntryPage";
import { BlocksPage } from "./pages/BlocksPage";
import { BlocksShell } from "./components/BlocksShell";

/* Each brand is its own catalog under /<brand>, with its own shell, its own
   ⌘K and its own foundations. The root is the chooser and the only place the
   four brands are named together. */

const PAGES = {
  intro: IntroPage,
  colors: ColorsPage,
  typography: TypographyPage,
  "brand-assets": BrandAssetsPage,
  icons: IconsPage,
  materials: MaterialsPage,
  layout: LayoutPage,
};

function Brand({ page }: { page: keyof typeof PAGES }) {
  const { pkg: id } = useParams();
  const pkg = pkgById(id);
  if (!pkg) return <NotFound />;
  // Brand Assets only exists where there are marks, so switching to a brand
  // without them lands on 404 rather than somewhere it was not asked for.
  const missing =
    (page === "brand-assets" && !CHROME[pkg.id].marks?.length) || (page === "icons" && !CHROME[pkg.id].icons) ||
    (page === "materials" && !CHROME[pkg.id].materials) ||
    (page === "layout" && !CHROME[pkg.id].layout);
  const Body = PAGES[page];
  return <Shell pkg={pkg}>{missing ? <NotFoundPage pkg={pkg} /> : <Body pkg={pkg} />}</Shell>;
}

/* Blocks are an area of their own beside the catalog, not a page in it: the
   same header, no sidebar, the whole width for the screens. */
function Blocks() {
  const { pkg: id } = useParams();
  const pkg = pkgById(id);
  if (!pkg) return <NotFound />;
  if (!pkg.entries.some((e) => e.kind === "block")) return <Shell pkg={pkg}><NotFoundPage pkg={pkg} /></Shell>;
  return <BlocksShell pkg={pkg}><BlocksPage pkg={pkg} /></BlocksShell>;
}

function Component() {
  const { pkg: id, slug } = useParams();
  const pkg = pkgById(id);
  const entry = pkg ? entryBySlug(pkg, slug) : undefined;
  if (!pkg) return <NotFound />;
  // A block's own address is a place on the Blocks page.
  if (entry?.kind === "block") return <Navigate to={`/${pkg.id}/blocks?block=${entry.slug}`} replace />;
  return <Shell pkg={pkg}>{entry ? <EntryPage pkg={pkg} entry={entry} /> : <NotFoundPage pkg={pkg} />}</Shell>;
}

/** Without a package there is no shell to put the page in. */
function NotFound() {
  return (
    <div className="mx-auto min-h-screen max-w-shell border-x border-alpha-400 bg-bg-100 px-6 pt-8 pb-12 lg:px-12 lg:pt-10 lg:pb-16">
      <NotFoundPage />
    </div>
  );
}

/** A page change starts at the top of the page, not where the last one was
 *  scrolled to; an in-page anchor keeps its own behaviour. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:pkg" element={<Brand page="intro" />} />
        <Route path="/:pkg/colors" element={<Brand page="colors" />} />
        <Route path="/:pkg/typography" element={<Brand page="typography" />} />
        <Route path="/:pkg/brand-assets" element={<Brand page="brand-assets" />} />
        <Route path="/:pkg/icons" element={<Brand page="icons" />} />
        <Route path="/:pkg/materials" element={<Brand page="materials" />} />
        <Route path="/:pkg/layout" element={<Brand page="layout" />} />
        <Route path="/:pkg/blocks" element={<Blocks />} />
        <Route path="/:pkg/:slug" element={<Component />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
