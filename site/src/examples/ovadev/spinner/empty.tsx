import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function SpinnerEmpty() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner aria-hidden />
        </EmptyMedia>
        <EmptyTitle>Loading posts</EmptyTitle>
        <EmptyDescription>Fetching the last 50 posts of the blog in English.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
