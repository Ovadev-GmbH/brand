import { Sub, ExtLink, Empty, Note } from "@ovadev-gmbh/ui-internal";

export default function TextBits() {
  return (
    <>
      <p>
        Seebad Richterswil <Sub>Zürichsee · seit 1904</Sub>
      </p>
      <p>
        <ExtLink href="https://ova.dev">ova.dev</ExtLink>
      </p>
      <Note>
        <p>Eine Notiz: Recherche, Hinweis, Verifikation.</p>
      </Note>
      <Note tone="warn">
        <p>Eine Warnung mit gelbem Grund.</p>
      </Note>
      <Empty>Keine Einträge.</Empty>
    </>
  );
}
