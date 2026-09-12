import { januna } from "./registry/januna";
import { lazyDemo, mountPreview } from "./preview";
import "./styles/preview-januna.css";

mountPreview(januna, { intro: lazyDemo(() => import("./examples/januna/IntroDemo")) }, import.meta.glob("./examples/januna/*Demo.tsx"));
