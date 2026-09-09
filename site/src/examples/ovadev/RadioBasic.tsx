import * as React from "react";
import { Radio, RadioGroup } from "@ovadev-gmbh/ui-ovadev";

export default function RadioBasic() {
  const id = React.useId();
  return (
    <RadioGroup aria-labelledby={id} defaultValue="fuji-apple">
      <div id={id}>
        Best apple
      </div>

      <label>
        <Radio.Root value="fuji-apple">
          <Radio.Indicator />
        </Radio.Root>
        Fuji
      </label>

      <label>
        <Radio.Root value="gala-apple">
          <Radio.Indicator />
        </Radio.Root>
        Gala
      </label>

      <label>
        <Radio.Root value="granny-smith-apple">
          <Radio.Indicator />
        </Radio.Root>
        Granny Smith
      </label>
    </RadioGroup>
  );
}
