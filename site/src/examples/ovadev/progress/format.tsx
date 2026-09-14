import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-ovadev";

export default function ProgressFormat() {
  return (
    <Progress
      value={7.4}
      max={10}
      format={{ style: "unit", unit: "gigabyte" }}
      locale="de-CH"
      className="w-full max-w-sm"
    >
      <ProgressLabel>Backup of helvetia-labs</ProgressLabel>
      <ProgressValue>{(formatted) => `${formatted} of 10 GB`}</ProgressValue>
    </Progress>
  );
}
