import { Description, DescriptionList, StatusDot } from "@ovadev-gmbh/ui-januna";

export default function DescriptionContent() {
  return (
    <DescriptionList className="w-full max-w-md">
      <Description title="Deposit" content={<StatusDot state="pending" label titlePrefix="The deposit" />} />
      <Description title="Reference" content={<span className="text-label-13-mono">JAN-4821</span>} />
      <Description
        title="Phone"
        content={
          <a href="tel:+41791234567" className="text-label-13-mono text-content-brand underline-offset-4 hover:underline">
            +41 79 123 45 67
          </a>
        }
      />
      <Description
        title="E-mail"
        content={
          <a href="mailto:anna.keller@bluewin.ch" className="text-content-brand underline-offset-4 hover:underline">
            anna.keller@bluewin.ch
          </a>
        }
      />
    </DescriptionList>
  );
}
