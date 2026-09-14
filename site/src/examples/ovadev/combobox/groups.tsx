import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@ovadev-gmbh/ui-ovadev";

const pages = [
  { value: "Site", items: ["/about", "/contact", "/blog"] },
  { value: "Brand", items: ["/brand/colour", "/brand/type", "/brand/mark"] },
  { value: "Legal", items: ["/imprint", "/privacy", "/status"] },
];

export default function ComboboxGroups() {
  return (
    <Combobox items={pages}>
      <ComboboxInput placeholder="Jump to a page" aria-label="Page" className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No page matches.</ComboboxEmpty>
        <ComboboxList>
          {(group: (typeof pages)[number], index: number) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(page: string) => (
                  <ComboboxItem key={page} value={page}>
                    <span className="text-label-13-mono">{page}</span>
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < pages.length - 1 ? <ComboboxSeparator /> : null}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
