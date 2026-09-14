import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-ovadev";
import { FileArchiveIcon, FileSpreadsheetIcon, FileTextIcon } from "lucide-react";

const files = [
  { name: "quote-tuerlersee-2027.pdf", size: "84 KB", icon: FileTextIcon },
  { name: "season-passes-2026.csv", size: "12 KB", icon: FileSpreadsheetIcon },
  { name: "contract-gemeinde-cham.pdf", size: "1.2 MB", icon: FileTextIcon },
  { name: "ovadev-press-kit-2026-09.zip", size: "12.4 MB", icon: FileArchiveIcon },
  { name: "sales-2026-08.csv", size: "48 KB", icon: FileSpreadsheetIcon },
];

export default function AttachmentGroupExample() {
  return (
    <AttachmentGroup tabIndex={0} role="group" aria-label="Files on the Türlersee offer" className="w-full max-w-md">
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
