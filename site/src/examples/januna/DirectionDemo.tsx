import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import {
  Button,
  DirectionProvider,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
  useDirection,
} from "@ovadev-gmbh/ui-januna";

type Direction = "ltr" | "rtl";

function BookingRow() {
  const direction = useDirection();

  return (
    <div dir={direction} className="flex flex-col gap-2">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Table 7, party of 4</ItemTitle>
          <ItemDescription>Tonight 18:30. Reading direction: {direction}.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Seat
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

export default function DirectionDemo() {
  const [direction, setDirection] = useState<Direction>("ltr");

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex gap-2">
        <Button
          variant={direction === "ltr" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("ltr")}
        >
          Left to right
        </Button>
        <Button
          variant={direction === "rtl" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("rtl")}
        >
          Right to left
        </Button>
      </div>
      <DirectionProvider direction={direction}>
        <BookingRow />
      </DirectionProvider>
    </div>
  );
}
