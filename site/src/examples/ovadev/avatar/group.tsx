import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@ovadev-gmbh/ui-ovadev";

const authors = ["BE", "RM", "PH"];

export default function AvatarGroupExample() {
  return (
    <div className="flex items-center gap-3">
      <AvatarGroup aria-hidden="true">
        {authors.map((initials) => (
          <Avatar key={initials}>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+1</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-label-13 text-content-secondary">
        Written by Beni, Robin, Philip and 1 guest author
      </span>
    </div>
  );
}
