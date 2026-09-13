import { Input } from "@ovadev-gmbh/ui-januna";

export default function InputBasic() {
  return (
    <div className="w-72">
      <Input aria-label="Guest name" placeholder="Guest name" autoComplete="off" />
    </div>
  );
}
