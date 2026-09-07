import { useState } from "react";
import { Table, Th, Td, MoreButton } from "@ovadev-gmbh/ui-internal";

const ALL = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, name: `Lido ${i + 1}` }));

export default function TablePaged() {
  const [shown, setShown] = useState(4);
  return (
    <>
      <Table dense hover={false}>
        <thead>
          <tr>
            <Th num width="4rem">#</Th>
            <Th>Name</Th>
            <Th>Note</Th>
          </tr>
        </thead>
        <tbody>
          {ALL.slice(0, shown).map((r) => (
            <tr key={r.id}>
              <Td num>{r.id}</Td>
              <Td>{r.name}</Td>
              <Td muted />
            </tr>
          ))}
        </tbody>
      </Table>
      <MoreButton remaining={ALL.length - shown} step={4} onClick={() => setShown((n) => n + 4)} />
    </>
  );
}
