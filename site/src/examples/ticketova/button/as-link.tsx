import { buttonVariants } from "@ovadev-gmbh/ui-ticketova";

export default function ButtonAsLink() {
  return (
    <a href="#billing" className={buttonVariants({ variant: "outline" })}>
      Open billing
    </a>
  );
}
