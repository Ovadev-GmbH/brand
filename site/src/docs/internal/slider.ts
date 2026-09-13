import type { Doc } from "../../types";

export default {
  description:
    "A number chosen by dragging along a range, where the position says more than the digits: replicas, a retention window, a rate limit. Show the exact figure beside it, or use an [Input](/internal/input) when people will type it.",
  usage: `<Slider defaultValue={[30]} min={7} max={90} aria-label="Log retention in days" />`,
  sections: [
    {
      title: "Value",
      text: "Give `defaultValue` or `value` as an array, even for one thumb. The slider draws one thumb per entry; without an array it draws two, at `min` and `max`.",
      code: `<Slider defaultValue={[3]} min={1} max={12} aria-label="Replicas" />`,
    },
    {
      title: "Range",
      text: "Two entries draw two thumbs, and the track between them fills: a lower and an upper bound.",
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
      text: "Base UI's Slider, with its track, filled range and one thumb per value drawn inside. Every other prop is Base UI's.",
      props: [
        ["min", "number", "0"],
        ["max", "number", "100"],
        ["thumbAlignment", `"center" | "edge" | "edge-client-only"`, `"edge"`],
      ],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/slider", api: "https://base-ui.com/react/components/slider#api-reference" },
} satisfies Doc;
