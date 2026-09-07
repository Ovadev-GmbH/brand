import { Dl } from "@ovadev-gmbh/ui-internal";

export default function DlBasic() {
  return (
    <Dl
      items={[
        { k: "Betreiber", v: "Gemeinde Richterswil" },
        { k: "Kanton", v: "ZH" },
        { k: "Besucher", v: "48 200", num: true },
        { k: "Website", v: "" },
      ]}
    />
  );
}
