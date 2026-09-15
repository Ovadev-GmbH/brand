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
} from "@ovadev-gmbh/ui-ticketova";
import { DownloadSimpleIcon, FileXlsIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const rows = [
  { tenant: "acme-logistics", requests: "1'512'907", amount: "509.80" },
  { tenant: "bergwerk-ag", requests: "688'214", amount: "232.35" },
  { tenant: "helvetia-labs", requests: "204'880", amount: "69.10" },
];

export default function AttachmentWithTrigger() {
  return (
    <Dialog>
      <Attachment>
        <AttachmentMedia>
          <FileXlsIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>usage-2026-08.csv</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">48 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Download usage-2026-08.csv">
            <DownloadSimpleIcon />
          </AttachmentAction>
        </AttachmentActions>
        <DialogTrigger render={<AttachmentTrigger aria-label="Preview usage-2026-08.csv" />} />
      </Attachment>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>usage-2026-08.csv</DialogTitle>
          <DialogDescription>The first 3 of 212 rows.</DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead className="text-right">API requests</TableHead>
              <TableHead className="text-right">CHF</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.tenant}>
                <TableCell className="text-label-13-mono">{row.tenant}</TableCell>
                <TableCell className="text-right text-label-13-mono">{row.requests}</TableCell>
                <TableCell className="text-right text-label-13-mono">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}
