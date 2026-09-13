import { ScrollArea, ScrollBar } from "@ovadev-gmbh/ui-januna";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const shifts = days.flatMap((day) => [`${day} lunch`, `${day} dinner`]);
const tables = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "Terrace 1", "Terrace 2", "Terrace 3"];

// Stands in for the covers seated at each table in each shift of week 37.
const covers = (table: number, shift: number) => (table * 5 + shift * 3) % 7;

export default function ScrollAreaBothDirections() {
  return (
    <ScrollArea className="h-64 w-full max-w-xl material-base">
      <table className="w-max text-label-13">
        <caption className="sr-only">Covers per table and shift, week 37</caption>
        <thead>
          <tr className="border-b border-divider">
            <th scope="col" className="px-3 py-2 text-left text-label-12 text-content-secondary">
              Table
            </th>
            {shifts.map((shift) => (
              <th key={shift} scope="col" className="px-3 py-2 text-right text-label-12 text-content-secondary">
                {shift}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tables.map((table, row) => (
            <tr key={table} className="border-b border-divider last:border-b-0">
              <th scope="row" className="px-3 py-2 text-left text-label-13">
                {table}
              </th>
              {shifts.map((shift, column) => (
                <td key={shift} className="px-3 py-2 text-right">
                  {covers(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
