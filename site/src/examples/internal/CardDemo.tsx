import { ExternalLinkIcon } from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ovadev-gmbh/ui-internal";

export default function CardDemo() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>acme-gmbh</CardTitle>
        <CardDescription>Scale plan, billed monthly, eu-central-1</CardDescription>
        <CardAction>
          <Badge variant="outline">Active</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-3 gap-x-4 gap-y-1">
          <dt className="text-label-12 text-content-secondary">Seats</dt>
          <dt className="text-label-12 text-content-secondary">API calls, 30d</dt>
          <dt className="text-label-12 text-content-secondary">Next invoice</dt>
          <dd className="text-label-13-mono">24 / 50</dd>
          <dd className="text-label-13-mono">1 284 902</dd>
          <dd className="text-label-13-mono">2026-10-01</dd>
        </dl>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">
          <ExternalLinkIcon data-icon="inline-start" />
          Open tenant
        </Button>
        <Button variant="ghost" size="sm">
          Audit log
        </Button>
      </CardFooter>
    </Card>
  );
}
