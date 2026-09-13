import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-januna";

// Stands in for the photo's <img>, which AttachmentMedia crops the same way.
function TablePhoto() {
  return (
    <svg viewBox="0 0 40 40" className="size-full" role="img" aria-label="Photo of Terrace 3, set for six">
      <rect width="40" height="40" className="fill-surface-quaternary" />
      <circle cx="20" cy="20" r="9" className="fill-surface-primary" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={angle}
          cx={20 + 14 * Math.cos((angle * Math.PI) / 180)}
          cy={20 + 14 * Math.sin((angle * Math.PI) / 180)}
          r="2.5"
          className="fill-content-tertiary"
        />
      ))}
    </svg>
  );
}

export default function AttachmentImage() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Attachment>
        <AttachmentMedia variant="image">
          <TablePhoto />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>terrace-3.jpg</AttachmentTitle>
          <AttachmentDescription>1.8 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <TablePhoto />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>terrace-3.jpg</AttachmentTitle>
          <AttachmentDescription>3024 × 3024</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  );
}
