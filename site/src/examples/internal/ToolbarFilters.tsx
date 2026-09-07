import { useState } from "react";
import { Toolbar, SearchInput, Select, Segmented, Button } from "@ovadev-gmbh/ui-internal";

export default function ToolbarFilters() {
  const [view, setView] = useState<"list" | "map">("list");
  return (
    <Toolbar meta="1 064 entries" actions={<Button variant="solid">Export</Button>}>
      <SearchInput placeholder="Search" aria-label="Search" />
      <Select aria-label="Canton" defaultValue="">
        <option value="">All cantons</option>
        <option value="ZH">Zurich</option>
        <option value="ZG">Zug</option>
      </Select>
      <Segmented
        ariaLabel="View"
        value={view}
        onChange={setView}
        options={[
          { value: "list", label: "List" },
          { value: "map", label: "Map", off: true },
        ]}
      />
    </Toolbar>
  );
}
