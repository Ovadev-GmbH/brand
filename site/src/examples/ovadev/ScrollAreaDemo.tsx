import { Fragment } from "react";
import { ScrollArea, Separator } from "@ovadev-gmbh/ui-ovadev";

const shops = [
  "aegerisee", "baar", "cham", "hausen-am-albis", "huenenberg", "kuesnacht",
  "menzingen", "neuheim", "oberaegeri", "risch", "steinhausen", "tuerlersee",
  "unteraegeri", "walchwil", "wettswil", "zug", "zumikon", "zuerichhorn",
];

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-56 material-base">
      <div className="p-3">
        <h4 className="mb-3 text-label-13">TICKETOVA shops</h4>
        {shops.map((shop, index) => (
          <Fragment key={shop}>
            {index > 0 ? <Separator className="my-2" /> : null}
            <div className="text-label-13-mono">{shop}</div>
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
