import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";

const shortcuts = [
  { action: "Find a guest or a booking", keys: ["⌘", "K"] },
  { action: "Add a walk-in", keys: ["N"] },
  { action: "Seat the selected party", keys: ["Enter"] },
];

export default function KbdDemo() {
  return (
    <dl className="grid w-full max-w-xs gap-3 text-label-14">
      {shortcuts.map((shortcut) => (
        <div key={shortcut.action} className="flex items-center justify-between gap-4">
          <dt className="text-content-secondary">{shortcut.action}</dt>
          <dd>
            <KbdGroup>
              {shortcut.keys.map((key) => (
                <Kbd key={key}>{key}</Kbd>
              ))}
            </KbdGroup>
          </dd>
        </div>
      ))}
    </dl>
  );
}
