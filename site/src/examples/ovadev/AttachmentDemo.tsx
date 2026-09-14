import { FileTextIcon, XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Spinner,
} from "@ovadev-gmbh/ui-ovadev";

export default function AttachmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Attachment className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>quote-tuerlersee-2027.pdf</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">84 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove quote-tuerlersee-2027.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>tuerlersee-opening-2026.jpg</AttachmentTitle>
          <AttachmentDescription>
            Uploading, <span className="text-label-12-mono">64%</span>
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload of tuerlersee-opening-2026.jpg">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  );
}
