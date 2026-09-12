import { FileSpreadsheetIcon, FileTextIcon, FileArchiveIcon, XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-internal";

export default function AttachmentDemo() {
  return (
    <AttachmentGroup className="w-full max-w-xl">
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>INV-2026-0142.pdf</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">84 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia>
          <FileSpreadsheetIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>audit-log-2026-09.csv</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">Uploading, 64%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="sm">
        <AttachmentMedia>
          <FileArchiveIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>d-8f3a21c-logs.zip</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">2.3 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  );
}
