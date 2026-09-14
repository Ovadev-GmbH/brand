import { Switch, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ovadev-gmbh/ui-ovadev";

const pages = [
  { key: "/blog/season-opening-tuerlersee", de: true, en: false },
  { key: "/brand", de: true, en: true },
  { key: "/jobs", de: false, en: false },
];

export default function SwitchInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Page</TableHead>
            <TableHead className="w-28">German</TableHead>
            <TableHead className="w-28">English</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pages.map((page) => (
            <TableRow key={page.key}>
              <TableCell className="text-label-13-mono">{page.key}</TableCell>
              <TableCell>
                <Switch size="sm" defaultChecked={page.de} aria-label={`${page.key} in German`} />
              </TableCell>
              <TableCell>
                <Switch size="sm" defaultChecked={page.en} aria-label={`${page.key} in English`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
