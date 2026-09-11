import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@ovadev-gmbh/ui-januna";

const guests = [
  { name: "Mara Keller", initials: "MK" },
  { name: "Anna Rossi", initials: "AR" },
  { name: "Luca Brunner", initials: "LB" },
];

export default function AvatarDemo() {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-3">
        <Avatar size="sm">
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LB</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>SM</AvatarFallback>
          <AvatarBadge aria-label="Seated" />
        </Avatar>
      </div>
      <div className="flex items-center gap-3">
        <AvatarGroup>
          {guests.map((guest) => (
            <Avatar key={guest.initials} aria-label={guest.name}>
              <AvatarFallback>{guest.initials}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
        <span className="text-sm text-muted-foreground">Party of 6, Patio 2</span>
      </div>
    </div>
  );
}
