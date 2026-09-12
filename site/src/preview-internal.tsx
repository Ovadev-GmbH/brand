import { internal } from "./registry/internal";
import { lazyDemo, mountPreview } from "./preview";
import "./styles/preview-internal.css";

mountPreview(internal, { intro: lazyDemo(() => import("./examples/internal/IntroDemo")) }, import.meta.glob("./examples/internal/*Demo.tsx"));
