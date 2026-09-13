import {
  Button,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@ovadev-gmbh/ui-januna";

const servers = ["Lea Brunner", "Marco Rossi", "Sara Meier", "Jonas Weber", "Elif Yilmaz", "David Huber"];

export default function ComboboxPopup() {
  return (
    <Combobox items={servers} defaultValue="Sara Meier">
      <ComboboxTrigger
        render={<Button variant="outline" className="w-56 justify-between" aria-label="Server for T12" />}
      >
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search the team" aria-label="Search the team" />
        <ComboboxEmpty>No one on tonight's shift matches.</ComboboxEmpty>
        <ComboboxList>
          {(server: string) => (
            <ComboboxItem key={server} value={server}>
              {server}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
