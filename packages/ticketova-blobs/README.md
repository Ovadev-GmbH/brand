# @ovadev-gmbh/ticketova-blobs

Deterministic blob avatars for TICKETOVA, after [Blobatar](https://github.com/Alain00/blobatar) (MIT). Each one is a flat silhouette with two strokes for eyes, coloured like Blobatar (a hue from the seed, six OKLCH tones, eyes held at 4.5:1). `palette: "mono"` draws from TICKETOVA's grey ramp instead. The shapes include items from the ticket counter: a ticket, a postage stamp, a wristband and a coin. This is an independent implementation; no Blobatar code is included.

```tsx
import { BlobAvatar } from "@ovadev-gmbh/ticketova-blobs/react";
import { blobSvg, blobDataUri } from "@ovadev-gmbh/ticketova-blobs";

<BlobAvatar seed={order.email} size={32} />
<BlobAvatar seed={user.id} size={40} animate="hover" expression="happy" />
blobSvg(order.email, { size: 48, background: "none" });
```

- **Traits:** 10 shapes, a hue (0–360°), 6 tones (pastel, pale, mid, deep, bright, ink; in mono `--tova-gray-400` to `-1000`), plus continuous tilt, stretch and eye geometry. Every trait reads its own hash key, so adding a trait later does not change existing blobs. Any trait can be pinned with `traits`.
- **Expressions:** idle, happy, sad, mad, surprised, wink, sleepy, smug, shy, scared. An expression never stands in for a state, and it is not an empty-state illustration.
- **Motion:** none at rest. `animate: "hover"` makes the blob hop and blink once (160/240 ms on TICKETOVA's easing). Reduced motion is honoured. This only works with inline SVG.
- **Dependencies:** none. React is an optional peer.

`bun run demo` serves the demo on http://localhost:4820. `bun test` runs the tests.
