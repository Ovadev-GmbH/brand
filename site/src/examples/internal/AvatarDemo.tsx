import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@ovadev-gmbh/ui-internal";

export default function AvatarDemo() {
  return (
    <div className="flex max-w-xl flex-wrap items-center gap-3">
      <Avatar size="sm">
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>LK</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>ON</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>LK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+4</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}
