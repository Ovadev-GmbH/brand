import * as React from "react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Button,
  Spinner,
} from "@ovadev-gmbh/ui-ticketova";
import { FileXlsIcon } from "@ovadev-gmbh/ui-ticketova/icons";

type UploadState = "idle" | "uploading" | "processing" | "done";

export default function AttachmentUploadProgress() {
  const [state, setState] = React.useState<UploadState>("idle");
  const [progress, setProgress] = React.useState(0);

  // Stand in for the upload request and the server's check of the file.
  React.useEffect(() => {
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

  React.useEffect(() => {
    if (state !== "processing") return;
    const timer = setTimeout(() => setState("done"), 1200);
    return () => clearTimeout(timer);
  }, [state]);

  const note = {
    idle: "Not uploaded yet",
    uploading: `Uploading, ${progress}%`,
    processing: "Checking for malware",
    done: "1.2 MB, stored in ch-zrh-1",
  }[state];
  const working = state === "uploading" || state === "processing";

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3">
      <Attachment state={state} className="w-full">
        <AttachmentMedia>{working ? <Spinner /> : <FileXlsIcon />}</AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>audit-log-2026-09.csv</AttachmentTitle>
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
        {state === "done" ? "Upload again" : "Upload file"}
      </Button>
    </div>
  );
}
