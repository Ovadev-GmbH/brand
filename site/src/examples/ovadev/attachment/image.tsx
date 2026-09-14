import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@ovadev-gmbh/ui-ovadev";

// Stands in for the photo's <img>, which AttachmentMedia crops the same way.
function Photo() {
  return (
    <svg viewBox="0 0 40 40" className="size-full" role="img" aria-label="Photo of the opening at Strandbad Türlersee">
      <rect width="40" height="40" className="fill-surface-quaternary" />
      <rect x="5" y="6" width="18" height="3" className="fill-content-tertiary" />
      <rect x="5" y="13" width="30" height="2" className="fill-divider-strong" />
      <rect x="5" y="18" width="24" height="2" className="fill-divider-strong" />
      <rect x="5" y="27" width="30" height="7" className="fill-content-secondary" />
    </svg>
  );
}

export default function AttachmentImage() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Attachment>
        <AttachmentMedia variant="image">
          <Photo />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>tuerlersee-opening-2026.jpg</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">412 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <Photo />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>tuerlersee-opening-2026.jpg</AttachmentTitle>
          <AttachmentDescription className="text-label-12-mono">4032 × 3024</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  );
}
