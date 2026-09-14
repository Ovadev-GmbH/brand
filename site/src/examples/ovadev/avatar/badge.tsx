import { Avatar, AvatarBadge, AvatarFallback } from "@ovadev-gmbh/ui-ovadev";
import { ShieldCheckIcon } from "lucide-react";

export default function AvatarWithBadge() {
  return (
    <ul className="m-0 flex list-none flex-col gap-4 p-0">
      <li className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>RM</AvatarFallback>
          <AvatarBadge className="bg-status-success" />
        </Avatar>
        <div className="flex flex-col">
          <span className="text-label-13">robin@ova.dev</span>
          <span className="text-label-12 text-content-secondary">On call until 18:00 UTC</span>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>PS</AvatarFallback>
          <AvatarBadge>
            <ShieldCheckIcon />
          </AvatarBadge>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-label-13">philip@ova.dev</span>
          <span className="text-label-12 text-content-secondary">Ovadev admin</span>
        </div>
      </li>
    </ul>
  );
}
