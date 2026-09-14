import { buttonVariants } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonAsLink() {
  return (
    <a href="#press-kit" className={buttonVariants({ variant: "outline" })}>
      Open press kit
    </a>
  );
}
