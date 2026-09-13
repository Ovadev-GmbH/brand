import type { Doc } from "../../types";

export default {
  description:
    "Tells the Base UI components inside it which way text reads, so their arrow keys, sliders and popup sides follow a right-to-left layout for a guest who books in Arabic or Hebrew. It renders nothing and sets no attribute of its own.",
  usage: `<DirectionProvider direction="rtl">
  <div dir="rtl">
    <Slider defaultValue={[8]} min={2} max={16} />
  </div>
</DirectionProvider>`,
  sections: [
    {
      title: "The dir Attribute",
      text: "`DirectionProvider` informs the components; the `dir` attribute is what the browser and CSS read to mirror the layout. Set both from the same value, once, near the root.",
      code: `<DirectionProvider direction={direction}>
  <div dir={direction}>{children}</div>
</DirectionProvider>`,
    },
    {
      title: "Keyboard Navigation",
      text: 'In a horizontal `ToggleGroup`, `Tabs` or toolbar the arrow keys follow the reading direction: under `"rtl"` the right arrow moves to the previous item.',
      example: "keyboard",
    },
    {
      title: "Slider",
      text: 'A `Slider` fills from the inline start, so under `"rtl"` its track fills from the right and the arrow keys move the thumb the way it fills.',
      example: "slider",
    },
    {
      title: "Popup Sides",
      text: '`side="inline-start"` and `side="inline-end"` on a popup resolve against the direction, so the same tooltip opens to the right in `"ltr"` and to the left in `"rtl"`.',
      example: "popup-sides",
    },
    {
      title: "useDirection",
      text: "For a component of your own, `useDirection` returns the nearest provider's value: here an arrow that must point the way the reading goes.",
      example: "use-direction",
    },
  ],
  api: [
    {
      name: "DirectionProvider",
      text: 'Base UI\'s Direction Provider as it is, re-exported. `direction` takes `"ltr"` or `"rtl"` and defaults to `"ltr"`.',
    },
    {
      name: "useDirection",
      text: 'Returns the nearest provider\'s direction, `"ltr"` when there is none.',
    },
  ],
  links: {
    doc: "https://base-ui.com/react/utils/direction-provider",
    api: "https://base-ui.com/react/utils/direction-provider#api-reference",
  },
} satisfies Doc;
