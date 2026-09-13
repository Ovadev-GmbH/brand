import { Button, Textarea } from "@ovadev-gmbh/ui-internal";

export default function TextareaWithButton() {
  return (
    <div className="grid w-96 gap-2">
      <Textarea aria-label="Comment on dpl_9f31c" placeholder="Leave a comment on dpl_9f31c" />
      <Button className="justify-self-end">Post comment</Button>
    </div>
  );
}
