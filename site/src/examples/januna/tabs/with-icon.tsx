import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, TableIcon, UserMultipleIcon } from "@hugeicons/core-free-icons";

export default function TabsWithIcon() {
  return (
    <Tabs defaultValue="bookings" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="bookings">
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
          Bookings
        </TabsTrigger>
        <TabsTrigger value="waitlist">
          <HugeiconsIcon icon={UserMultipleIcon} strokeWidth={2} />
          Waitlist
        </TabsTrigger>
        <TabsTrigger value="tables">
          <HugeiconsIcon icon={TableIcon} strokeWidth={2} />
          Tables
        </TabsTrigger>
      </TabsList>
      <TabsContent value="bookings" className="text-content-secondary">
        24 bookings for dinner, 86 covers.
      </TabsContent>
      <TabsContent value="waitlist" className="text-content-secondary">
        4 parties waiting, 13 guests in total.
      </TabsContent>
      <TabsContent value="tables" className="text-content-secondary">
        9 of 14 tables seated.
      </TabsContent>
    </Tabs>
  );
}
