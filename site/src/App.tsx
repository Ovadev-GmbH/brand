import * as React from "react";
import { Route, Routes, useLocation, useParams } from "react-router";
import { entryBySlug, pkgById } from "./registry";
import { CHROME } from "./brands";
import { Shell } from "./components/Shell";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";
import { ColorsPage } from "./pages/ColorsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { BrandAssetsPage } from "./pages/BrandAssetsPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EntryPage } from "./pages/EntryPage";

/* Each brand is its own catalog under /<brand>, with its own shell, its own
   ⌘K and its own foundations. The root is the chooser and the only place the
   four brands are named together. */

const PAGES = {
  intro: IntroPage,
  colors: ColorsPage,
  typography: TypographyPage,
  "brand-assets": BrandAssetsPage,
  components: ComponentsPage,
};

function Brand({ page }: { page: keyof typeof PAGES }) {
  const { pkg: id } = useParams();
  const pkg = pkgById(id);
  if (!pkg) return <NotFound />;
  // Brand Assets only exists where there are marks, so switching to a brand
  // without them lands on 404 rather than somewhere it was not asked for.
  const missing = page === "brand-assets" && !CHROME[pkg.id].marks?.length;
  const Body = PAGES[page];
  return <Shell pkg={pkg}>{missing ? <NotFoundPage pkg={pkg} /> : <Body pkg={pkg} />}</Shell>;
}

function Component() {
  const { pkg: id, slug } = useParams();
  const pkg = pkgById(id);
  const entry = pkg ? entryBySlug(pkg, slug) : undefined;
  if (!pkg) return <NotFound />;
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
        <Route path="/:pkg/components" element={<Brand page="components" />} />
        <Route path="/:pkg/:slug" element={<Component />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
