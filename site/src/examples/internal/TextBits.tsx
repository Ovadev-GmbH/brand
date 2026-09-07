import { Sub, ExtLink, Empty, Note } from "@ovadev-gmbh/ui-internal";

export default function TextBits() {
  return (
    <>
      <p>
        Seebad Richterswil <Sub>Lake Zurich · since 1904</Sub>
      </p>
      <p>
        <ExtLink href="https://ova.dev">ova.dev</ExtLink>
      </p>
      <Note>
        <p>A note: research, hint, verification.</p>
      </Note>
      <Note tone="warn">
        <p>A warning on a yellow ground.</p>
      </Note>
      <Empty>No entries.</Empty>
    </>
  );
}
