import { Button, ButtonGroup } from "@ovadev-gmbh/ui-ticketova";

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Deployment dpl_9f31c">
      <Button variant="outline">Redeploy</Button>
      <Button variant="outline">Promote to production</Button>
      <Button variant="outline">Roll back</Button>
    </ButtonGroup>
  );
}
