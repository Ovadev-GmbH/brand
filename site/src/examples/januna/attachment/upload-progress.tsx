import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Csv01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Button,
  Spinner,
} from "@ovadev-gmbh/ui-januna";

type UploadState = "idle" | "uploading" | "processing" | "done";

export default function AttachmentUploadProgress() {
  const [state, setState] = useState<UploadState>("idle");
  const [progress, setProgress] = useState(0);

  // Stand in for the upload request and the import of its bookings.
  useEffect(() => {
    if (state !== "uploading") return;
    let sent = 0;
    const timer = setInterval(() => {
      sent += 20;
      setProgress(sent);
      if (sent >= 100) {
        clearInterval(timer);
        setState("processing");
      }
    }, 300);
    return () => clearInterval(timer);
  }, [state]);

  useEffect(() => {
    if (state !== "processing") return;
    const timer = setTimeout(() => setState("done"), 1200);
    return () => clearTimeout(timer);
  }, [state]);

  const note = {
    idle: "Not uploaded yet",
    uploading: `Uploading, ${progress}%`,
    processing: "Reading 212 bookings",
    done: "48 KB, 212 bookings imported",
  }[state];
  const working = state === "uploading" || state === "processing";

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3">
      <Attachment state={state} className="w-full">
        <AttachmentMedia>{working ? <Spinner /> : <HugeiconsIcon icon={Csv01Icon} strokeWidth={2} />}</AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>bookings-september.csv</AttachmentTitle>
          <AttachmentDescription role="status">{note}</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Button
        variant="outline"
        size="sm"
        disabled={working}
        onClick={() => {
          setProgress(0);
          setState("uploading");
        }}
      >
        {state === "done" ? "Import again" : "Import bookings"}
      </Button>
    </div>
  );
}
