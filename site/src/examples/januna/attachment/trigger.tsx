import { HugeiconsIcon } from "@hugeicons/react";
import { Csv01Icon, Download04Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ovadev-gmbh/ui-januna";

const rows = [
  { day: "Tuesday", lunch: 38, dinner: 96, deposits: "CHF 240.00" },
  { day: "Wednesday", lunch: 41, dinner: 104, deposits: "CHF 360.00" },
  { day: "Thursday", lunch: 45, dinner: 112, deposits: "CHF 1'240.00" },
];

export default function AttachmentWithTrigger() {
  return (
    <Dialog>
      <Attachment>
        <AttachmentMedia>
          <HugeiconsIcon icon={Csv01Icon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>covers-week-37.csv</AttachmentTitle>
          <AttachmentDescription>6 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Download covers-week-37.csv">
            <HugeiconsIcon icon={Download04Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
        <DialogTrigger render={<AttachmentTrigger aria-label="Preview covers-week-37.csv" />} />
      </Attachment>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>covers-week-37.csv</DialogTitle>
          <DialogDescription>The first 3 of 6 days the restaurant was open.</DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead className="text-right">Lunch</TableHead>
              <TableHead className="text-right">Dinner</TableHead>
              <TableHead className="text-right">Deposits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.day}>
                <TableCell>{row.day}</TableCell>
                <TableCell className="text-right">{row.lunch}</TableCell>
                <TableCell className="text-right">{row.dinner}</TableCell>
                <TableCell className="text-right">{row.deposits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}
