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
  { state: "idle", name: "season-passes-2026.csv", note: "Not uploaded yet" },
  { state: "uploading", name: "contract-gemeinde-cham.pdf", note: "Uploading, 64%" },
  { state: "processing", name: "sales-2026-08.csv", note: "Checking for malware" },
  { state: "error", name: "tuerlersee-opening-2026.mov", note: "Larger than 10 MB" },
  { state: "done", name: "quote-tuerlersee-2027.pdf", note: "84 KB" },
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
