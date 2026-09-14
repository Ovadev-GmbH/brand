import {
  Avatar,
  AvatarFallback,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ovadev";

const people = [
  { initials: "BE", name: "Beni", role: "CEO & Engineering", email: "beni@ova.dev" },
  { initials: "RM", name: "Robin", role: "CTO & Engineering", email: "robin@ova.dev" },
  { initials: "PH", name: "Philip", role: "Consulting & Sales", email: "philip@ova.dev" },
];

export default function AvatarInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">E-mail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {people.map((m) => (
            <TableRow key={m.email}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>{m.initials}</AvatarFallback>
                  </Avatar>
                  {m.name}
                </div>
              </TableCell>
              <TableCell className="text-content-secondary">{m.role}</TableCell>
              <TableCell className="text-right text-label-13-mono text-content-secondary">{m.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
