import { Switch } from "@ovadev-gmbh/ui-januna";

export default function SwitchBasic() {
  return (
    <label>
      <Switch.Root defaultChecked>
        <Switch.Thumb />
      </Switch.Root>
      Notifications
    </label>
  );
}
