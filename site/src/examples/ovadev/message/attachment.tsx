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
} from "@ovadev-gmbh/ui-ovadev";
import { DownloadIcon, FileSpreadsheetIcon } from "lucide-react";

export default function MessageWithAttachment() {
  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Nina Baumann, Strandbad Türlersee</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>Here is the season pass list from our till.</BubbleContent>
        </Bubble>
        <Attachment>
          <AttachmentMedia>
            <FileSpreadsheetIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>season-passes-2026.csv</AttachmentTitle>
            <AttachmentDescription className="text-label-12-mono">12 KB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Download season-passes-2026.csv">
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
