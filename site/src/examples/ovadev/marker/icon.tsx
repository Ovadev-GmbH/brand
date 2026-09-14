import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-ovadev";
import { LanguagesIcon, PenLineIcon, SendIcon } from "lucide-react";

export default function MarkerIcons() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Marker>
        <MarkerIcon>
          <PenLineIcon />
        </MarkerIcon>
        <MarkerContent>
          Draft <span className="text-label-12-mono">admission-control</span> saved by robin@ova.dev
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SendIcon />
        </MarkerIcon>
        <MarkerContent>
          Published to <span className="text-label-12-mono">ova.dev/blog</span> at{" "}
          <span className="text-label-12-mono">14:02</span>
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <LanguagesIcon />
        </MarkerIcon>
        <MarkerContent>
          German version <span className="text-label-12-mono">de/zutrittskontrolle</span> added by philip@ova.dev
        </MarkerContent>
      </Marker>
    </div>
  );
}
