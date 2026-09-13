import { Item, ItemContent, ItemMedia, ItemTitle, Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerDemo() {
  return (
    <Item variant="muted" role="status" className="w-full max-w-sm">
      <ItemMedia>
        <Spinner aria-hidden />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Charging the deposit for Keller</ItemTitle>
      </ItemContent>
      <ItemContent className="items-end">
        <span className="text-label-13-mono">CHF 1&apos;240.00</span>
      </ItemContent>
    </Item>
  );
}
