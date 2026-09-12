import {
  Label,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@ovadev-gmbh/ui-internal";

export default function NativeSelectDemo() {
  return (
    <div className="grid w-full max-w-xl grid-cols-2 gap-3">
      <div className="grid gap-2">
        <Label htmlFor="native-plan">Plan</Label>
        <NativeSelect id="native-plan" className="w-full" defaultValue="team">
          <NativeSelectOption value="starter">Starter</NativeSelectOption>
          <NativeSelectOption value="team">Team</NativeSelectOption>
          <NativeSelectOption value="enterprise">Enterprise</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="native-region">Region</Label>
        <NativeSelect id="native-region" className="w-full" defaultValue="">
          <NativeSelectOption value="" disabled>
            Choose a region
          </NativeSelectOption>
          <NativeSelectOptGroup label="Europe">
            <NativeSelectOption value="eu-central-1">eu-central-1</NativeSelectOption>
            <NativeSelectOption value="ch-zrh-1">ch-zrh-1</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="United States">
            <NativeSelectOption value="us-east-1">us-east-1</NativeSelectOption>
            <NativeSelectOption value="us-west-2" disabled>
              us-west-2 · draining
            </NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>
    </div>
  );
}
