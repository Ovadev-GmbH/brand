import { Avatar, AvatarFallback } from "@ovadev-gmbh/ui-ovadev";

export default function AvatarSize() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
    </div>
  );
}
