import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

export default function TabsDemo() {
  return (
    <div className="flex max-w-xl flex-col gap-6">
      <Tabs defaultValue="bookings">
        <TabsList>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="tables">Tables</TabsTrigger>
          <TabsTrigger value="shifts">Shifts</TabsTrigger>
        </TabsList>
        <TabsContent value="bookings" className="text-muted-foreground">
          12 bookings tonight, 38 guests expected.
        </TabsContent>
        <TabsContent value="tables" className="text-muted-foreground">
          9 of 14 tables are assigned for the dinner shift.
        </TabsContent>
        <TabsContent value="shifts" className="text-muted-foreground">
          Lunch 11:30–14:30, dinner 18:00–23:00.
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="today">
        <TabsList variant="line">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This week</TabsTrigger>
          <TabsTrigger value="month" disabled>
            This month
          </TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="text-muted-foreground">
          Two walk-ins are waiting for a table.
        </TabsContent>
        <TabsContent value="week" className="text-muted-foreground">
          Saturday is fully booked from 19:00.
        </TabsContent>
      </Tabs>
    </div>
  );
}
