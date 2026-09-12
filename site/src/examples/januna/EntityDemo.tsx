import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, MoreHorizontalIcon, Restaurant02Icon } from "@hugeicons/core-free-icons";
import {
  Avatar,
  AvatarFallback,
  Button,
  Entity,
  EntityContent,
  EntityList,
} from "@ovadev-gmbh/ui-januna";

export default function EntityDemo() {
  return (
    <EntityList bordered className="max-w-md">
      <Entity
        left={
          <Avatar>
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        }
        right={
          <>
            <Button variant="outline" size="sm">
              Seat
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="More">
              <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
            </Button>
          </>
        }
      >
        <EntityContent fill title="Anna Rossi" description="Party of 4, 18:30" />
        <EntityContent title="Table 7" description="Window" />
      </Entity>
      <Entity
        left={
          <Avatar>
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
        }
        right={
          <Button variant="ghost" size="icon-sm" aria-label="Call Luca Brunner">
            <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
          </Button>
        }
      >
        <EntityContent fill title="Luca Brunner" description="Party of 2, 19:00. Running late." />
        <EntityContent title="Table 3" />
      </Entity>
      <Entity left={<HugeiconsIcon icon={Restaurant02Icon} strokeWidth={2} />}>
        <EntityContent fill title="Kitchen closes" description="Last order 21:30" />
      </Entity>
    </EntityList>
  );
}
