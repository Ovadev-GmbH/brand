import * as React from "react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Button,
} from "@ovadev-gmbh/ui-ticketova";
import { DownloadSimpleIcon, FileTextIcon, XIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const initial = [
  { name: "INV-2026-0142.pdf", size: "84 KB" },
  { name: "credit-note-CN-2026-0031.pdf", size: "61 KB" },
];

export default function AttachmentWithActions() {
  const [files, setFiles] = React.useState(initial);

  if (files.length === 0) {
    return (
      <div className="flex items-center gap-3">
        <p className="text-label-13 text-content-secondary">No files attached.</p>
        <Button variant="outline" size="sm" onClick={() => setFiles(initial)}>
          Restore files
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2">
      {files.map((file) => (
        <Attachment key={file.name}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{file.name}</AttachmentTitle>
            <AttachmentDescription className="text-label-12-mono">{file.size}</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label={`Download ${file.name}`}>
              <DownloadSimpleIcon />
            </AttachmentAction>
            <AttachmentAction
              aria-label={`Remove ${file.name}`}
              onClick={() => setFiles((current) => current.filter((f) => f.name !== file.name))}
            >
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      ))}
    </div>
  );
}
