import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon, File01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Spinner,
} from "@ovadev-gmbh/ui-januna";

const files = [
  { state: "idle", name: "wine-list-autumn.pdf", note: "Not uploaded yet" },
  { state: "uploading", name: "menu-birthday-keller.pdf", note: "Uploading, 64%" },
  { state: "processing", name: "bookings-september.csv", note: "Reading 212 bookings" },
  { state: "error", name: "floor-plan-scan.png", note: "Larger than 10 MB" },
  { state: "done", name: "deposit-receipt-JAN-4821.pdf", note: "84 KB" },
] as const;

export default function AttachmentStates() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {files.map((file) => (
        <Attachment key={file.state} state={file.state} className="w-full">
          <AttachmentMedia>
            {file.state === "uploading" || file.state === "processing" ? (
              <Spinner />
            ) : (
              <HugeiconsIcon icon={file.state === "error" ? AlertCircleIcon : File01Icon} strokeWidth={2} />
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
