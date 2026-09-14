import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-ovadev";

const products = [
  { label: "TICKETOVA", value: "ticketova" },
  { label: "JANUNA", value: "januna" },
  { label: "Ovadev", value: "ovadev" },
];

const hosts: Record<string, string> = {
  ticketova: "ticketova.ch",
  januna: "januna.ch",
  ovadev: "ova.dev",
};

export default function SelectControlled() {
  const [product, setProduct] = React.useState<string | null>("ticketova");

  return (
    <div className="flex flex-col items-start gap-2">
      <Select items={products} value={product} onValueChange={setProduct}>
        <SelectTrigger className="w-44" aria-label="Product">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {products.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-label-13-mono text-content-secondary">{product ? hosts[product] : "–"}</span>
    </div>
  );
}
