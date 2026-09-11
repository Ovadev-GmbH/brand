import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Csv01Icon, Image01Icon, Pdf01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-januna";

export default function AttachmentDemo() {
  return (
    <AttachmentGroup className="w-full max-w-xl">
      <Attachment>
        <AttachmentMedia>
          <HugeiconsIcon icon={Pdf01Icon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>floor-plan-patio.pdf</AttachmentTitle>
          <AttachmentDescription>1.2 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia>
          <HugeiconsIcon icon={Csv01Icon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>bookings-september.csv</AttachmentTitle>
          <AttachmentDescription>Uploading, 64%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <HugeiconsIcon icon={Image01Icon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>menu-photo.heic</AttachmentTitle>
          <AttachmentDescription>Unsupported format</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </AttachmentGroup>
  );
}
