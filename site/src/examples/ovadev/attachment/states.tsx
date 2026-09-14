import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Spinner,
} from "@ovadev-gmbh/ui-ovadev";
import { CircleAlertIcon, FileTextIcon } from "lucide-react";

const files = [
  { state: "idle", name: "audit-log-2026-09.csv", note: "Not uploaded yet" },
  { state: "uploading", name: "contract-bergwerk-ag.pdf", note: "Uploading, 64%" },
  { state: "processing", name: "seats-2026-09.csv", note: "Checking for malware" },
  { state: "error", name: "INV-2026-0139.pdf", note: "Larger than 10 MB" },
  { state: "done", name: "INV-2026-0142.pdf", note: "84 KB" },
] as const;

export default function AttachmentStates() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {files.map((file) => (
        <Attachment key={file.state} state={file.state} className="w-full">
          <AttachmentMedia>
            {file.state === "uploading" || file.state === "processing" ? (
              <Spinner />
            ) : file.state === "error" ? (
              <CircleAlertIcon />
            ) : (
              <FileTextIcon />
            )}
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{file.name}</AttachmentTitle>
            <AttachmentDescription>{file.note}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  );
}
