import { Stat, StatGrid } from "@ovadev-gmbh/ui-januna/blocks";

/** The introduction's Blocks card: the stat grid, two by two, so it reads
 *  at a card's width. */
export default function BlocksDemo() {
  return (
    <StatGrid className="w-full max-w-80 grid-cols-2">
      <Stat label="Bookings tonight" value="42" delta="+6" tone="positive" />
      <Stat label="Covers" value="118" delta="+14" tone="positive" />
      <Stat label="No-shows" value="3" delta="-2" tone="positive" />
      <Stat label="Waitlist" value="5" />
    </StatGrid>
  );
}
