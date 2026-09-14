import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-ovadev";
import { NewspaperIcon, PlusIcon } from "lucide-react";

export default function EmptyDemo() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <NewspaperIcon />
        </EmptyMedia>
        <EmptyTitle>No posts in German</EmptyTitle>
        <EmptyDescription>
          The blog has 12 posts in English and none in German yet. Write one so the German site has a blog.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon data-icon="inline-start" />
          Write post
        </Button>
      </EmptyContent>
    </Empty>
  );
}
