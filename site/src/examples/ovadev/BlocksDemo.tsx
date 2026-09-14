import { Stat, StatGrid } from "@ovadev-gmbh/ui-ovadev/blocks";

/** The introduction's Blocks card: the stat grid, two by two, so it reads
 *  at a card's width. */
export default function BlocksDemo() {
  return (
    <StatGrid className="w-full max-w-80 grid-cols-2">
      <Stat label="Tickets sold, season" value="184'302" delta="+9%" tone="positive" />
      <Stat label="Venues live" value="12" delta="+3" tone="positive" />
      <Stat label="Median entry time" value="1.8 s" delta="+0.2 s" tone="negative" />
      <Stat label="Open positions" value="2" />
    </StatGrid>
  );
}
