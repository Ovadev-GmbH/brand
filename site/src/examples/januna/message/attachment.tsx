import { HugeiconsIcon } from "@hugeicons/react";
import { Download04Icon, Pdf01Icon } from "@hugeicons/core-free-icons";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-januna";

export default function MessageWithAttachment() {
  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Anna Keller, booking on Saturday at 19:30</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>Here is the menu we agreed for the birthday dinner.</BubbleContent>
        </Bubble>
        <Attachment size="sm">
          <AttachmentMedia>
            <HugeiconsIcon icon={Pdf01Icon} strokeWidth={2} />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>menu-birthday-keller.pdf</AttachmentTitle>
            <AttachmentDescription>240 KB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Download menu-birthday-keller.pdf">
              <HugeiconsIcon icon={Download04Icon} strokeWidth={2} />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <MessageFooter>
          <time dateTime="2026-09-12T16:05+02:00">16:05</time>
        </MessageFooter>
      </MessageContent>
    </Message>
  );
}
