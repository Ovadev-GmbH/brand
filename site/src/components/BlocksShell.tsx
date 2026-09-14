/* The blocks area's frame: the catalog's header, no sidebar, and the whole
   column for the screens. It wears the brand the same way the catalog does
   (data-brand on the root), so the chrome is one and the same. */

import * as React from "react";
import type { Pkg } from "../types";
import { BrandSwitcher } from "./BrandSwitcher";
import { AreaNav } from "./AreaNav";

export function BlocksShell({ pkg, children }: { pkg: Pkg; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-200" data-brand={pkg.id}>
      <header className="sticky top-0 z-40 mx-auto w-full max-w-shell">
        <div className="flex w-full border-x border-b border-alpha-400 bg-bg-100 pl-3 md:pl-[22px]">
          <div className="flex min-w-0 items-center gap-2 border-r border-alpha-400 py-3 pr-3 md:py-[15px] md:pr-4 md:pl-px lg:w-[237px]">
            <BrandSwitcher pkg={pkg} />
          </div>
          <div className="flex grow items-center gap-2 py-2 pr-3 pl-3 md:p-4">
            <AreaNav pkg={pkg} area="blocks" />
          </div>
        </div>
      </header>

      <main className="mx-auto -mt-px max-w-shell">
        <div className="min-h-[calc(100vh-var(--spacing-header))] border-x border-alpha-400 bg-bg-100 px-6 pt-8 pb-16 lg:px-12 lg:pt-10">{children}</div>
      </main>
    </div>
  );
}
