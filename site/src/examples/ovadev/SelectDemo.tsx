import {
  Field,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ovadev";

const topics = [
  { label: "Quote", value: "quote" },
  { label: "Support", value: "support" },
  { label: "Press", value: "press" },
  { label: "Other", value: "other" },
];

export default function SelectDemo() {
  return (
    <Field className="w-full max-w-48">
      <FieldLabel htmlFor="select-role">Topic</FieldLabel>
      <Select items={topics}>
        <SelectTrigger id="select-role" className="w-full">
          <SelectValue placeholder="Choose a topic" />
        </SelectTrigger>
        <SelectContent>
          {topics.map((topic) => (
            <SelectItem key={topic.value} value={topic.value}>
              {topic.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
