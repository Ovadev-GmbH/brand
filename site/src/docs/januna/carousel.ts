import type { Doc } from "../../types";

export default {
  description:
    "A row of slides moved with buttons, swipes or the arrow keys, for a few large things seen one or three at a time: the rooms of a restaurant, the shifts of a day. Bookings that should be compared belong in a [Table](/januna/table).",
  usage: `<Carousel>
  <CarouselContent>
    <CarouselItem>…</CarouselItem>
    <CarouselItem>…</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
  composition: `Carousel
├── CarouselContent
│   └── CarouselItem
├── CarouselPrevious
└── CarouselNext`,
  sections: [
    {
      title: "Size",
      text: "A slide fills the carousel by default. A `basis-*` class on `CarouselItem` shows several at once, and can change with the breakpoint.",
      example: "size",
    },
    {
      title: "Spacing",
      text: "The gap between slides is a negative `-ml-*` on `CarouselContent` and the matching `pl-*` on each `CarouselItem`; the default pair is 16px.",
      example: "spacing",
    },
    {
      title: "Orientation",
      text: '`orientation="vertical"` stacks the slides and turns the buttons to sit above and below. Give `CarouselContent` a height, and the `pt-*` and `-mt-*` pair replaces the horizontal one. The arrow keys still answer only to left and right.',
      example: "orientation",
    },
    {
      title: "Options",
      text: "`opts` passes options to Embla: `align` for where a slide stops, `loop` to go round.",
      code: `<Carousel opts={{ align: "start", loop: true }}>…</Carousel>`,
    },
    {
      title: "Plugins",
      text: "`plugins` takes Embla's plugins. Leave out Autoplay: a Januna screen does not move while the host is reading it.",
    },
    {
      title: "API",
      text: "`setApi` hands over Embla's instance, typed `CarouselApi`, to read the selected slide and listen for `select`, here for a count under the slides.",
      example: "api",
    },
  ],
  api: [
    {
      name: "Carousel",
      text: 'A `<div>` with `role="region"` and `aria-roledescription="carousel"` that moves with the arrow keys of its orientation: left and right, or up and down when vertical.',
      props: [
        ["orientation", `"horizontal" | "vertical"`, `"horizontal"`],
        ["opts", "EmblaOptionsType", "–"],
        ["plugins", "EmblaPluginType[]", "–"],
        ["setApi", "(api: CarouselApi) => void", "–"],
      ],
    },
    { name: "CarouselContent", text: "The viewport and the track inside it; its `className` goes to the track." },
    { name: "CarouselItem", text: 'One slide with `aria-roledescription="slide"`: `basis-full` with 16px of padding on its leading side.' },
    {
      name: "CarouselPrevious",
      text: "A `Button` with 12px corners, 48px outside the leading edge, disabled when there is nothing before. `CarouselNext` is its mirror on the trailing edge.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"outline"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"icon-sm"`],
      ],
    },
    {
      name: "useCarousel",
      text: "The carousel's context, for a control of your own inside `Carousel`: `scrollPrev`, `scrollNext`, `canScrollPrev`, `canScrollNext` and `api`.",
    },
  ],
  links: {
    lib: "Embla Carousel",
    doc: "https://www.embla-carousel.com/get-started/react/",
    api: "https://www.embla-carousel.com/api/",
  },
} satisfies Doc;
