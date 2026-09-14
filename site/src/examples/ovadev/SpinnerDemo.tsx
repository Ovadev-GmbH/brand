import { Item, ItemContent, ItemMedia, ItemTitle, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function SpinnerDemo() {
  return (
    <Item variant="muted" role="status" className="w-full max-w-sm">
      <ItemMedia>
        <Spinner aria-hidden />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>
          Paying order <span className="text-label-13-mono">T-2026-48213</span>
        </ItemTitle>
      </ItemContent>
      <ItemContent className="items-end">
        <span className="text-label-13-mono">CHF 24.00</span>
      </ItemContent>
    </Item>
  );
}
