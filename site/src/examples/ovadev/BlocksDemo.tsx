import { Stat, StatGrid } from "@ovadev-gmbh/ui-ovadev/blocks";

/** The introduction's Blocks card: the stat grid, two by two, so it reads
 *  at a card's width. */
export default function BlocksDemo() {
  return (
    <StatGrid className="w-full max-w-80 grid-cols-2">
      <Stat label="Requests, 24 h" value="1'284'302" delta="+6" tone="positive" />
      <Stat label="Error rate" value="0.31%" delta="-0.04 pt" tone="positive" />
      <Stat label="p95 latency" value="184 ms" delta="+12 ms" tone="negative" />
      <Stat label="Open incidents" value="2" />
    </StatGrid>
  );
}
