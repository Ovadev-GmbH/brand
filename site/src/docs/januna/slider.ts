import type { Doc } from "../../types";

export default {
  description:
    "A number chosen by dragging along a range, where the position says more than the digits: covers per quarter hour, the party sizes bookable online, a deposit. Show the exact figure beside it, or use an [Input](/januna/input) when people will type it.",
  usage: `<Slider defaultValue={[15]} min={0} max={60} step={5} aria-label="Table hold in minutes" />`,
  composition: `Slider
└── drawn inside
    ├── track
    │   └── filled range
    └── thumb, one per value`,
  sections: [
    {
      title: "Value",
      text: "`defaultValue` or `value` is a number for one thumb, or an array with one entry per thumb. A slider given no value at all draws two, at `min` and `max`.",
      code: `<Slider defaultValue={[4]} min={1} max={12} aria-label="Party size" />`,
    },
    {
      title: "Range",
      text: "Two entries draw two thumbs, and the green fills the track between them: a lower and an upper bound.",
      example: "range",
    },
    {
      title: "Multiple Thumbs",
      text: "Any number of entries works. `minStepsBetweenValues` keeps neighbouring thumbs apart.",
      example: "multiple",
    },
    {
      title: "Step",
      text: "`step` sets the increment, and `largeStep` how far Page Up and Page Down move the thumb.",
      example: "step",
    },
    {
      title: "Vertical",
      text: '`orientation="vertical"` stands the slider up. It fills the height of its container, at least 160px.',
      example: "vertical",
    },
    {
      title: "Disabled",
      text: "`disabled` dims the track and stops the thumbs. Say why next to it.",
      example: "disabled",
    },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` update the figure while the thumb moves; `onValueCommitted` fires once, when it is let go, which is the moment to save.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Slider",
      text: "Base UI's Slider, with a 4px track, the filled range in the green and one 16px thumb per value drawn inside. Every other prop is Base UI's.",
      props: [
        ["min", "number", "0"],
        ["max", "number", "100"],
        ["thumbAlignment", `"center" | "edge" | "edge-client-only"`, `"edge"`],
      ],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/slider", api: "https://base-ui.com/react/components/slider#api-reference" },
} satisfies Doc;
