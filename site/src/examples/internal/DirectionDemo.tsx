import { useState } from "react";
import { CaretRightIcon } from "@phosphor-icons/react";
import {
  Button,
  DirectionProvider,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
  useDirection,
} from "@ovadev-gmbh/ui-internal";

type Direction = "ltr" | "rtl";

function InvoiceRow() {
  const direction = useDirection();

  return (
    <div dir={direction}>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>
            <span className="text-label-13-mono">INV-2026-0142</span> acme-gmbh
          </ItemTitle>
          <ItemDescription>CHF 1 240.00, due 2026-09-30. Reading direction: {direction}.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
            <CaretRightIcon data-icon="inline-end" />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

export default function DirectionDemo() {
  const [direction, setDirection] = useState<Direction>("ltr");

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div className="flex gap-2">
        <Button
          variant={direction === "ltr" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("ltr")}
        >
          LTR
        </Button>
        <Button
          variant={direction === "rtl" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("rtl")}
        >
          RTL
        </Button>
      </div>
      <DirectionProvider direction={direction}>
        <InvoiceRow />
      </DirectionProvider>
    </div>
  );
}
