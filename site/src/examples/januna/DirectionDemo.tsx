import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DirectionProvider,
  Label,
  Slider,
} from "@ovadev-gmbh/ui-januna";

// A guest books in Arabic: the card, the slider and its arrow keys all read right to left.
export default function DirectionDemo() {
  const [party, setParty] = useState(6);

  return (
    <DirectionProvider direction="rtl">
      <Card dir="rtl" lang="ar" className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>احجز طاولة</CardTitle>
          <CardDescription>Trattoria Sole، الليلة الساعة 19:30</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <Label id="direction-party">عدد الضيوف</Label>
            <span className="text-label-14">{party}</span>
          </div>
          <Slider
            aria-labelledby="direction-party"
            value={[party]}
            onValueChange={(value) => setParty(Array.isArray(value) ? value[0]! : value)}
            min={2}
            max={16}
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full">تأكيد الحجز</Button>
        </CardFooter>
      </Card>
    </DirectionProvider>
  );
}
