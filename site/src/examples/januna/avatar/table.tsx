import {
  Avatar,
  AvatarFallback,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";

const staff = [
  { initials: "LB", name: "Lea Brunner", role: "Host", hours: "38.5" },
  { initials: "MR", name: "Marco Rossi", role: "Server", hours: "41.0" },
  { initials: "NW", name: "Nina Weber", role: "Manager", hours: "44.5" },
];

export default function AvatarInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Staff</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Hours, week 37</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staff.map((person) => (
            <TableRow key={person.name}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>{person.initials}</AvatarFallback>
                  </Avatar>
                  {person.name}
                </div>
              </TableCell>
              <TableCell className="text-content-secondary">{person.role}</TableCell>
              <TableCell className="text-right text-label-13-mono">{person.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
