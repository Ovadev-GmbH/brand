import { Switch } from "@ovadev-gmbh/ui-ticketova";

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
