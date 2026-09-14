import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

const languages = ["de-CH", "en", "fr-CH"];
const sections = ["Blog", "Brand", "Changelog"];

export default function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Pool season 2026</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>Open post</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Translate to</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {languages.map((language) => (
              <DropdownMenuItem key={language} className="text-label-13-mono">
                {language}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Move to</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {sections.map((section) => (
              <DropdownMenuItem key={section}>{section}</DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
