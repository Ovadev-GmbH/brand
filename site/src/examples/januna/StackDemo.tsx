import { Stack } from "@ovadev-gmbh/ui-januna";

const service = [
  { label: "Bookings", value: "42", note: "6 still to confirm" },
  { label: "Covers", value: "118", note: "of 140 tonight" },
  { label: "Walk-ins", value: "6", note: "since 18:00" },
];

export default function StackDemo() {
  return (
    <Stack gap={4} className="w-full max-w-lg">
      <Stack direction="row" align="baseline" justify="between">
        <span className="text-heading-16 text-content-primary">Friday service</span>
        <span className="text-label-13 text-content-secondary">Updated 19:42</span>
      </Stack>
      <Stack direction={{ base: "column", sm: "row" }} gap={{ base: 2, sm: 3 }}>
        {service.map((entry) => (
          <Stack
            key={entry.label}
            gap={1}
            padding={4}
            className="material-base flex-1 text-content-primary"
          >
            <span className="text-label-13 text-content-secondary">{entry.label}</span>
            <span className="text-heading-24">{entry.value}</span>
            <span className="text-label-13 text-content-tertiary">{entry.note}</span>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
