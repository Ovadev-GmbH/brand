import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Pdf01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Spinner,
} from "@ovadev-gmbh/ui-januna";

export default function AttachmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Attachment className="w-full">
        <AttachmentMedia>
          <HugeiconsIcon icon={Pdf01Icon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>menu-birthday-keller.pdf</AttachmentTitle>
          <AttachmentDescription>240 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove menu-birthday-keller.pdf">
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>seating-plan-terrace.pdf</AttachmentTitle>
          <AttachmentDescription>Uploading, 64%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload of seating-plan-terrace.pdf">
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  );
}
