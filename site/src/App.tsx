import * as React from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { entryBySlug, pkgById } from "./registry";
import { Shell } from "./components/Shell";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";
import { ColorsPage } from "./pages/ColorsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { LogoPage } from "./pages/LogoPage";
import { EntryPage } from "./pages/EntryPage";

/* Each brand is its own catalog under /<brand>, with its own shell, its own
   ⌘K and its own foundations. The root is the chooser and the only place the
   four brands are named together. */

const PAGES = { intro: IntroPage, colors: ColorsPage, typography: TypographyPage, logo: LogoPage };

function Brand({ page }: { page: keyof typeof PAGES }) {
  const { pkg: id } = useParams();
  const pkg = pkgById(id);
  if (!pkg) return <Navigate to="/" replace />;
  const Body = PAGES[page];
  return (
    <Shell pkg={pkg}>
      <Body pkg={pkg} />
    </Shell>
  );
}

function Component() {
  const { pkg: id, slug } = useParams();
  const pkg = pkgById(id);
  const entry = pkg ? entryBySlug(pkg, slug) : undefined;
  if (!pkg) return <Navigate to="/" replace />;
  if (!entry) return <Navigate to={`/${pkg.id}`} replace />;
  return (
    <Shell pkg={pkg}>
      <EntryPage pkg={pkg} entry={entry} />
    </Shell>
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
        <Route path="/:pkg/logo" element={<Brand page="logo" />} />
        <Route path="/:pkg/:slug" element={<Component />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
