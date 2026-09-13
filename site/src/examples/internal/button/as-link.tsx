import { buttonVariants } from "@ovadev-gmbh/ui-internal";

export default function ButtonAsLink() {
  return (
    <a href="#billing" className={buttonVariants({ variant: "outline" })}>
      Open billing
    </a>
  );
}
