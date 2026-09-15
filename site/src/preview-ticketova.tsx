import { ticketova } from "./registry/ticketova";
import { lazyDemo, mountPreview } from "./preview";
import "./styles/preview-ticketova.css";

mountPreview(
  ticketova,
  { intro: lazyDemo(() => import("./examples/ticketova/IntroDemo")), blocks: lazyDemo(() => import("./examples/ticketova/BlocksDemo")) },
  import.meta.glob(["./examples/ticketova/*Demo.tsx", "./examples/ticketova/*/*.tsx"]),
);
