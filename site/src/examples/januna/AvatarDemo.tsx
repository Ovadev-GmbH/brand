import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@ovadev-gmbh/ui-januna";

const party = [
  { name: "Mara Keller", initials: "MK" },
  { name: "Anna Rossi", initials: "AR" },
  { name: "Luca Brunner", initials: "LB" },
];

export default function AvatarDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar size="sm">
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-2">
        <Avatar size="lg">
          <AvatarFallback>SM</AvatarFallback>
          <AvatarBadge aria-hidden="true" />
        </Avatar>
        <div className="grid">
          <span className="text-label-14">Sofia Meier</span>
          <span className="text-label-12 text-content-secondary">Seated</span>
        </div>
      </div>
      <AvatarGroup className="ml-3">
        {party.map((guest) => (
          <Avatar key={guest.initials} role="img" aria-label={guest.name}>
            <AvatarFallback>{guest.initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>
          +3<span className="sr-only"> more guests</span>
        </AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}
