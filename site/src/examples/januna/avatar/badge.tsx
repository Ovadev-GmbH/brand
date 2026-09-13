import { Avatar, AvatarBadge, AvatarFallback } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

export default function AvatarWithBadge() {
  return (
    <ul className="m-0 flex list-none flex-col gap-4 p-0">
      <li className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>LB</AvatarFallback>
          <AvatarBadge className="bg-status-success" />
        </Avatar>
        <div className="flex flex-col">
          <span className="text-label-14">Lea Brunner</span>
          <span className="text-label-13 text-content-secondary">On shift at the lectern until 23:00</span>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>AK</AvatarFallback>
          <AvatarBadge>
            <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
          </AvatarBadge>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-label-14">Anna Keller</span>
          <span className="text-label-13 text-content-secondary">Regular, 12 visits this year</span>
        </div>
      </li>
    </ul>
  );
}
