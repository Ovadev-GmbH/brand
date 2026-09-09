import { Slider } from "@ovadev-gmbh/ui-januna";

export default function SliderBasic() {
  return (
    <Slider.Root defaultValue={25}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb aria-label="Volume" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}
