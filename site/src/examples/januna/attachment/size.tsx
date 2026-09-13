import { HugeiconsIcon } from "@hugeicons/react";
import { Pdf01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-januna";

const sizes = ["default", "sm", "xs"] as const;

export default function AttachmentSize() {
  return (
    <div className="flex flex-col items-start gap-3">
      {sizes.map((size) => (
        <Attachment key={size} size={size}>
          <AttachmentMedia>
            <HugeiconsIcon icon={Pdf01Icon} strokeWidth={2} />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>deposit-receipt-JAN-4821.pdf</AttachmentTitle>
            <AttachmentDescription>84 KB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  );
}
