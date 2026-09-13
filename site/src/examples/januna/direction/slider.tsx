import { useState } from "react";
import { DirectionProvider, Label, Slider } from "@ovadev-gmbh/ui-januna";

type Direction = "ltr" | "rtl";

function DepositThreshold({ direction }: { direction: Direction }) {
  const [party, setParty] = useState(8);
  const id = `direction-slider-${direction}`;

  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex w-56 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <Label id={id}>Deposit from, {direction}</Label>
          <span className="text-label-13">{party} guests</span>
        </div>
        <Slider
          aria-labelledby={id}
          value={[party]}
          onValueChange={(value) => setParty(Array.isArray(value) ? value[0]! : value)}
          min={2}
          max={16}
          step={1}
        />
      </div>
    </DirectionProvider>
  );
}

export default function DirectionSlider() {
  return (
    <div className="flex flex-wrap gap-12">
      <DepositThreshold direction="ltr" />
      <DepositThreshold direction="rtl" />
    </div>
  );
}
