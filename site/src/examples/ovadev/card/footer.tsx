import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ovadev-gmbh/ui-ovadev";

export default function CardWithFooter() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Delete post</CardTitle>
        <CardDescription>Notes on shipping on a Friday will be taken off ova.dev in both languages.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="m-0 flex flex-col gap-1 pl-4 text-copy-13 text-content-secondary">
          <li>The English and the German version</li>
          <li>3 images and the cover</li>
          <li>Links to the post return 410 Gone</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="destructive">Delete post</Button>
      </CardFooter>
    </Card>
  );
}
