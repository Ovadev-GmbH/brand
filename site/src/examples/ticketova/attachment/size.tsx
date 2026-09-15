import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-ticketova";
import { FileTextIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const sizes = ["default", "sm", "xs"] as const;

export default function AttachmentSize() {
  return (
    <div className="flex flex-col items-start gap-3">
      {sizes.map((size) => (
        <Attachment key={size} size={size}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>INV-2026-0142.pdf</AttachmentTitle>
            <AttachmentDescription className="text-label-12-mono">84 KB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  );
}
