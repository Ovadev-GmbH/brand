import { buttonVariants } from "@ovadev-gmbh/ui-januna";

export default function ButtonAsLink() {
  return (
    <a href="#floor-plan" className={buttonVariants({ variant: "outline" })}>
      Open floor plan
    </a>
  );
}
