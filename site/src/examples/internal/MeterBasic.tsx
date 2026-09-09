import { Meter } from "@ovadev-gmbh/ui-internal";

export default function MeterBasic() {
  return (
    <Meter.Root value={24}>
      <Meter.Label>Storage Used</Meter.Label>
      <Meter.Value />
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter.Root>
  );
}
