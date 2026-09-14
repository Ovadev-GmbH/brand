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
} from "@ovadev-gmbh/ui-ovadev";
import { DownloadIcon, FileSpreadsheetIcon } from "lucide-react";

const rows = [
  { product: "Day ticket, adult", sold: "8'214", amount: "65'712.00" },
  { product: "Day ticket, child", sold: "3'906", amount: "15'624.00" },
  { product: "Season pass", sold: "412", amount: "65'920.00" },
];

export default function AttachmentWithTrigger() {
  return (
    <Dialog>
      <Attachment>
        <AttachmentMedia>
          <FileSpreadsheetIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-2026-08.csv</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">48 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Download sales-2026-08.csv">
            <DownloadIcon />
          </AttachmentAction>
        </AttachmentActions>
        <DialogTrigger render={<AttachmentTrigger aria-label="Preview sales-2026-08.csv" />} />
      </Attachment>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>sales-2026-08.csv</DialogTitle>
          <DialogDescription>The first 3 of 14 rows.</DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Tickets sold</TableHead>
              <TableHead className="text-right">CHF</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.product}>
                <TableCell className="text-label-13-mono">{row.product}</TableCell>
                <TableCell className="text-right text-label-13-mono">{row.sold}</TableCell>
                <TableCell className="text-right text-label-13-mono">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}
