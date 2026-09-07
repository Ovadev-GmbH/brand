import { useState } from "react";
import { Toolbar, SearchInput, Select, Segmented, Button } from "@ovadev-gmbh/ui-internal";

export default function ToolbarFilters() {
  const [view, setView] = useState<"list" | "map">("list");
  return (
    <Toolbar meta="1 064 Einträge" actions={<Button variant="solid">Exportieren</Button>}>
      <SearchInput placeholder="Suchen" aria-label="Suchen" />
      <Select aria-label="Kanton" defaultValue="">
        <option value="">Alle Kantone</option>
        <option value="ZH">Zürich</option>
        <option value="ZG">Zug</option>
      </Select>
      <Segmented
        ariaLabel="Ansicht"
        value={view}
        onChange={setView}
        options={[
          { value: "list", label: "Liste" },
          { value: "map", label: "Karte", off: true },
        ]}
      />
    </Toolbar>
  );
}
