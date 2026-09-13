import { HugeiconsIcon } from "@hugeicons/react";
import { Csv01Icon, Jpg01Icon, Pdf01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-januna";

const files = [
  { name: "menu-birthday-keller.pdf", size: "240 KB", icon: Pdf01Icon },
  { name: "deposit-receipt-JAN-4821.pdf", size: "84 KB", icon: Pdf01Icon },
  { name: "guest-list-keller.csv", size: "2 KB", icon: Csv01Icon },
  { name: "terrace-3.jpg", size: "1.8 MB", icon: Jpg01Icon },
  { name: "cake-order.pdf", size: "61 KB", icon: Pdf01Icon },
];

export default function AttachmentGroupExample() {
  return (
    <AttachmentGroup tabIndex={0} role="group" aria-label="Files on booking JAN-4821" className="w-full max-w-md">
      {files.map((file) => (
        <Attachment key={file.name} size="sm">
          <AttachmentMedia>
            <HugeiconsIcon icon={file.icon} strokeWidth={2} />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{file.name}</AttachmentTitle>
            <AttachmentDescription>{file.size}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  );
}
