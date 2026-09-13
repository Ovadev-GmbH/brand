import { Avatar, AvatarFallback } from "@ovadev-gmbh/ui-januna";

export default function AvatarSize() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
    </div>
  );
}
