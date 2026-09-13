import { Snippet } from "@ovadev-gmbh/ui-januna";

const steps = ["bunx januna tables block T12 --until 21:00", "bunx januna waitlist notify --party 6"];

export default function SnippetCopyText() {
  return (
    <div className="w-full max-w-xl">
      <Snippet text={steps} copyText={steps.join(" && ")} />
    </div>
  );
}
