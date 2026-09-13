import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-internal";
import { FileArchiveIcon, FileSpreadsheetIcon, FileTextIcon } from "lucide-react";

const files = [
  { name: "INV-2026-0142.pdf", size: "84 KB", icon: FileTextIcon },
  { name: "seats-2026-09.csv", size: "12 KB", icon: FileSpreadsheetIcon },
  { name: "contract-bergwerk-ag.pdf", size: "1.2 MB", icon: FileTextIcon },
  { name: "d-8f3a21c-logs.zip", size: "2.3 MB", icon: FileArchiveIcon },
  { name: "usage-2026-08.csv", size: "48 KB", icon: FileSpreadsheetIcon },
];

export default function AttachmentGroupExample() {
  return (
    <AttachmentGroup tabIndex={0} role="group" aria-label="Files on SUP-2291" className="w-full max-w-md">
      {files.map((file) => (
        <Attachment key={file.name} size="sm">
          <AttachmentMedia>
            <file.icon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{file.name}</AttachmentTitle>
            <AttachmentDescription className="text-label-12-mono">{file.size}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  );
}
