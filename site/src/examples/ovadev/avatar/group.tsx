import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@ovadev-gmbh/ui-ovadev";

const reviewers = ["RM", "PS", "LK"];

export default function AvatarGroupExample() {
  return (
    <div className="flex items-center gap-3">
      <AvatarGroup aria-hidden="true">
        {reviewers.map((initials) => (
          <Avatar key={initials}>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+2</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-label-13 text-content-secondary">
        <span className="text-label-13-mono">d-8f3a21c</span> approved by robin@ova.dev and 4 others
      </span>
    </div>
  );
}
