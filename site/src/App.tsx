import * as React from "react";
import { Navigate, Outlet, Route, Routes, useLocation, useParams } from "react-router";
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

/* Each brand is its own catalog under /<brand>, with its own shell, its own
   ⌘K and its own foundations. The root is the chooser and the only place the
   four brands are named together. */

import { AssetLibraryPage } from "./pages/AssetLibraryPage";

const PAGES = {
  "asset-library": AssetLibraryPage,
  intro: IntroPage,
  colors: ColorsPage,
  typography: TypographyPage,
  "brand-assets": BrandAssetsPage,
  icons: IconsPage,
  materials: MaterialsPage,
  layout: LayoutPage,
};

const hasBlocks = (pkg: NonNullable<ReturnType<typeof pkgById>>) => pkg.entries.some((e) => e.kind === "block");

/* The brand's frame, mounted once for everything under /<brand>: the pages
   below only fill it. Docs and Blocks are its two areas — the blocks get the
   whole window and a list of their categories — and because the frame is
   not remounted between them, it widens rather than being replaced. */
function BrandLayout() {
  const { pkg: id } = useParams();
  const { pathname } = useLocation();
  const pkg = pkgById(id);
  if (!pkg) return <NotFound />;
  const blocks = /\/blocks\/?$/.test(pathname) && hasBlocks(pkg);
  return (
    <Shell pkg={pkg} area={blocks ? "blocks" : "docs"}>
      <Outlet />
    </Shell>
  );
}

/** Only ever rendered inside BrandLayout, which has already found the package. */
function usePkg() {
  return pkgById(useParams().pkg)!;
}

function Brand({ page }: { page: keyof typeof PAGES }) {
  const pkg = usePkg();
  // Brand Assets only exists where there are marks, so switching to a brand
  // without them lands on 404 rather than somewhere it was not asked for.
  const missing =
    (page === "asset-library" && pkg.id !== "ticketova") ||
    (page === "brand-assets" && !CHROME[pkg.id].marks?.length) || (page === "icons" && !CHROME[pkg.id].icons) ||
    (page === "materials" && !CHROME[pkg.id].materials) ||
    (page === "layout" && !CHROME[pkg.id].layout);
  const Body = PAGES[page];
  return missing ? <NotFoundPage pkg={pkg} /> : <Body pkg={pkg} />;
}

function Blocks() {
  const pkg = usePkg();
  return hasBlocks(pkg) ? <BlocksPage pkg={pkg} /> : <NotFoundPage pkg={pkg} />;
}

function Component() {
  const pkg = usePkg();
  const entry = entryBySlug(pkg, useParams().slug);
  // A block's own address is a place on the Blocks page.
  if (entry?.kind === "block") return <Navigate to={`/${pkg.id}/blocks?block=${entry.slug}`} replace />;
  return entry ? <EntryPage pkg={pkg} entry={entry} /> : <NotFoundPage pkg={pkg} />;
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
        <Route path="/:pkg" element={<BrandLayout />}>
          <Route index element={<Brand page="intro" />} />
          <Route path="colors" element={<Brand page="colors" />} />
          <Route path="typography" element={<Brand page="typography" />} />
          <Route path="asset-library" element={<Brand page="asset-library" />} />
          <Route path="brand-assets" element={<Brand page="brand-assets" />} />
          <Route path="icons" element={<Brand page="icons" />} />
          <Route path="materials" element={<Brand page="materials" />} />
          <Route path="layout" element={<Brand page="layout" />} />
          <Route path="blocks" element={<Blocks />} />
          <Route path=":slug" element={<Component />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
