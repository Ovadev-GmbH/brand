import { Avatar, AvatarFallback } from "@ovadev-gmbh/ui-januna";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar aria-hidden="true">
        <AvatarFallback>LB</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-label-14">Luca Brunner</span>
        <span className="text-label-13 text-content-secondary">Fourth visit, party of 4 at 19:00</span>
      </div>
    </div>
  );
}
