import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Download04Icon, Pdf01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Button,
} from "@ovadev-gmbh/ui-januna";

const initial = [
  { name: "menu-birthday-keller.pdf", size: "240 KB" },
  { name: "deposit-receipt-JAN-4821.pdf", size: "84 KB" },
];

export default function AttachmentWithActions() {
  const [files, setFiles] = useState(initial);

  if (files.length === 0) {
    return (
      <div className="flex items-center gap-3">
        <p className="text-label-14 text-content-secondary">No files on this booking.</p>
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
            <HugeiconsIcon icon={Pdf01Icon} strokeWidth={2} />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{file.name}</AttachmentTitle>
            <AttachmentDescription>{file.size}</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label={`Download ${file.name}`}>
              <HugeiconsIcon icon={Download04Icon} strokeWidth={2} />
            </AttachmentAction>
            <AttachmentAction
              aria-label={`Remove ${file.name}`}
              onClick={() => setFiles((current) => current.filter((f) => f.name !== file.name))}
            >
              <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      ))}
    </div>
  );
}
