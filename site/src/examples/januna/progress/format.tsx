import { Progress, ProgressLabel, ProgressValue } from "@ovadev-gmbh/ui-januna";

export default function ProgressFormat() {
  return (
    <Progress
      value={95}
      max={120}
      format={{ style: "unit", unit: "minute", unitDisplay: "long" }}
      locale="en-CH"
      className="w-full max-w-sm"
    >
      <ProgressLabel>Turn time, T12</ProgressLabel>
      <ProgressValue>{(formatted) => `${formatted} of 120`}</ProgressValue>
    </Progress>
  );
}
