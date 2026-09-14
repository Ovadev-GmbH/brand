import { Button, Field, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputInline() {
  return (
    <Field orientation="horizontal" className="w-96">
      <Input type="search" placeholder="Title or topic" aria-label="Search the blog" />
      <Button variant="outline">Search</Button>
    </Field>
  );
}
