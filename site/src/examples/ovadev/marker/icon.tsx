import { Marker, MarkerContent, MarkerIcon } from "@ovadev-gmbh/ui-ovadev";
import { GitCommitHorizontalIcon, KeyRoundIcon, RocketIcon } from "lucide-react";

export default function MarkerIcons() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Marker>
        <MarkerIcon>
          <GitCommitHorizontalIcon />
        </MarkerIcon>
        <MarkerContent>
          <span className="text-label-12-mono">8f3a21c</span> pushed by robin@ova.dev
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <RocketIcon />
        </MarkerIcon>
        <MarkerContent>
          Deployed to <span className="text-label-12-mono">ch-zrh-1</span> at{" "}
          <span className="text-label-12-mono">14:02 UTC</span>
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <KeyRoundIcon />
        </MarkerIcon>
        <MarkerContent>
          Key <span className="text-label-12-mono">sk_live_4f9a…</span> rotated by philip@ova.dev
        </MarkerContent>
      </Marker>
    </div>
  );
}
