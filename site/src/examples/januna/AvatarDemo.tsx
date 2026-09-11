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
      <Avatar size="lg">
        <AvatarFallback>SM</AvatarFallback>
        <AvatarBadge aria-label="Seated" />
      </Avatar>
      <AvatarGroup className="ml-3">
        {party.map((guest) => (
          <Avatar key={guest.initials} aria-label={guest.name}>
            <AvatarFallback>{guest.initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}
