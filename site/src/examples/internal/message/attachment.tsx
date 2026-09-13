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
} from "@ovadev-gmbh/ui-internal";
import { DownloadIcon, FileSpreadsheetIcon } from "lucide-react";

export default function MessageWithAttachment() {
  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Anna Roth, acme-logistics</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>Here is the seat export from our HR system.</BubbleContent>
        </Bubble>
        <Attachment>
          <AttachmentMedia>
            <FileSpreadsheetIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>seats-2026-09.csv</AttachmentTitle>
            <AttachmentDescription className="text-label-12-mono">12 KB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Download seats-2026-09.csv">
              <DownloadIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <MessageFooter>
          <span className="text-label-12-mono">10:04</span>
        </MessageFooter>
      </MessageContent>
    </Message>
  );
}
