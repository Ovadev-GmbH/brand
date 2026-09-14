import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";
import { ChartLineIcon, FileTextIcon, MailIcon } from "lucide-react";

export default function TabsWithIcon() {
  return (
    <Tabs defaultValue="posts" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="posts">
          <FileTextIcon data-icon="inline-start" />
          Posts
        </TabsTrigger>
        <TabsTrigger value="readers">
          <ChartLineIcon data-icon="inline-start" />
          Readers
        </TabsTrigger>
        <TabsTrigger value="newsletter">
          <MailIcon data-icon="inline-start" />
          Newsletter
        </TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="text-content-secondary">
        24 posts, 12 in German and 12 in English.
      </TabsContent>
      <TabsContent value="readers" className="text-content-secondary">
        1'842 readers over the last 30 days.
      </TabsContent>
      <TabsContent value="newsletter" className="text-content-secondary">
        1'204 subscribers; the September issue went out 2026-09-08.
      </TabsContent>
    </Tabs>
  );
}
