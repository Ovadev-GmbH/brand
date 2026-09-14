import { ovadev } from "./registry/ovadev";
import { lazyDemo, mountPreview } from "./preview";
import "./styles/preview-ovadev.css";

mountPreview(
  ovadev,
  { intro: lazyDemo(() => import("./examples/ovadev/IntroDemo")), blocks: lazyDemo(() => import("./examples/ovadev/BlocksDemo")) },
  import.meta.glob(["./examples/ovadev/*Demo.tsx", "./examples/ovadev/*/*.tsx"]),
);
