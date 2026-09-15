import {
  Avatar,
  AvatarFallback,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-ticketova";

const members = [
  { initials: "RM", email: "robin@ova.dev", role: "Owner", active: "2026-09-13 14:02" },
  { initials: "PS", email: "philip@ova.dev", role: "Admin", active: "2026-09-13 09:41" },
  { initials: "LK", email: "lea@ova.dev", role: "Billing", active: "2026-09-10 16:18" },
];

export default function AvatarInTable() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Last active, UTC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((m) => (
            <TableRow key={m.email}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>{m.initials}</AvatarFallback>
                  </Avatar>
                  {m.email}
                </div>
              </TableCell>
              <TableCell className="text-content-secondary">{m.role}</TableCell>
              <TableCell className="text-right text-label-13-mono text-content-secondary">{m.active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
