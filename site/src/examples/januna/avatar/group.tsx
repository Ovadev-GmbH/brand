import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@ovadev-gmbh/ui-januna";

const staff = ["LB", "MR", "NW"];

export default function AvatarGroupExample() {
  return (
    <div className="flex items-center gap-3">
      <AvatarGroup aria-hidden="true">
        {staff.map((initials) => (
          <Avatar key={initials}>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+4</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-label-13 text-content-secondary">Lea Brunner and 6 others on the dinner shift</span>
    </div>
  );
}
