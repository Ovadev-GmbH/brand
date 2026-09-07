import { useState } from "react";
import { Table, Th, Td, NameCell, nextSort, type SortState } from "@ovadev-gmbh/ui-internal";

const ROWS = [
  { name: "Seebad Richterswil", canton: "ZH", visitors: 48200 },
  { name: "Strandbad Tiefenbrunnen", canton: "ZH", visitors: 131400 },
  { name: "Badi Cham", canton: "ZG", visitors: 27900 },
];

export default function TableSortable() {
  const [sort, setSort] = useState<SortState<"name" | "visitors">>({ key: "name", dir: 1 });
  const onSort = (k: "name" | "visitors") => setSort((s) => nextSort(s, k));
  const rows = [...ROWS].sort((a, b) => (a[sort.key] > b[sort.key] ? sort.dir : -sort.dir));
  return (
    <Table ariaLabel="Lidos">
      <thead>
        <tr>
          <Th sortKey="name" sort={sort} onSort={onSort}>Lido</Th>
          <Th>Canton</Th>
          <Th num sortKey="visitors" sort={sort} onSort={onSort}>Visitors</Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <NameCell href="/internal/table" sub={r.canton === "ZH" ? "Lake Zurich" : "Lake Zug"}>{r.name}</NameCell>
            <Td>{r.canton}</Td>
            <Td num>{r.visitors.toLocaleString("de-CH")}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
