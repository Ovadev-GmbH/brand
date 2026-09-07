import { Dl } from "@ovadev-gmbh/ui-internal";

export default function DlBasic() {
  return (
    <Dl
      items={[
        { k: "Operator", v: "Municipality of Richterswil" },
        { k: "Canton", v: "ZH" },
        { k: "Visitors", v: "48 200", num: true },
        { k: "Website", v: "" },
      ]}
    />
  );
}
