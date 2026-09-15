import { Avatar, AvatarFallback } from "@ovadev-gmbh/ui-ticketova";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar aria-hidden="true">
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-label-13">Robin Markant</span>
        <span className="text-label-12 text-content-secondary">robin@ova.dev</span>
      </div>
    </div>
  );
}
