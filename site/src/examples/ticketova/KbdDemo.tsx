import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-ticketova";

const shortcuts = [
  { action: "Open the command menu", keys: ["⌘", "K"] },
  { action: "Search the audit log", keys: ["/"] },
  { action: "Copy the tenant ID", keys: ["⌘", "⇧", "C"] },
];

export default function KbdDemo() {
  return (
    <dl className="grid w-full max-w-xs gap-3 text-label-13">
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
