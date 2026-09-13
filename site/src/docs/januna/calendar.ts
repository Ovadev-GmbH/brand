import type { Doc } from "../../types";

export default {
  description:
    "A month grid for picking a date or a stretch of dates: the evening of a booking, a holiday closure, a guest's birthday. Behind a button in a [Popover](/januna/popover), it is a date picker.",
  usage: `const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar mode="single" selected={date} onSelect={setDate} />`,
  composition: `Calendar
├── caption and arrows
├── weekdays
└── weeks
    └── CalendarDayButton`,
  sections: [
    {
      title: "Range",
      text: '`mode="range"` picks a first and a last day; `numberOfMonths={2}` shows a stretch that crosses a month side by side. The days between take the selected shade.',
      example: "range",
    },
    {
      title: "Month and Year Selector",
      text: '`captionLayout="dropdown"` turns the month\'s title into a month and a year menu, for dates far from today. `startMonth` and `endMonth` bound the menus.',
      example: "month-year",
    },
    {
      title: "Disabled Days",
      text: "`disabled` takes matchers: a date, `{ before }` or `{ after }` a date, or `{ dayOfWeek }`. Those days are dimmed and cannot be chosen, so say beside the grid why.",
      example: "disabled",
    },
    {
      title: "Week Numbers",
      text: "`showWeekNumber` adds a column of week numbers. With `ISOWeek` the weeks start on Monday and count the ISO way, as rotas in Switzerland do.",
      example: "week-numbers",
    },
    {
      title: "Presets",
      text: "Buttons under the grid set `selected` and move `month` to it, for the evenings that are picked most. Control `month` with `onMonthChange` so the arrows still work.",
      example: "presets",
    },
    {
      title: "Date Picker",
      text: 'A `Popover` whose trigger shows the chosen date, closed from `onSelect`. Inside a popover the calendar drops its own ground, so give `PopoverContent` `className="w-auto p-0"`. See [Popover](/januna/popover).',
      example: "date-picker",
    },
    {
      title: "Time Zone",
      text: "Days are counted in the browser's time zone. Pass `timeZone` when the date belongs somewhere else, such as a booking in Zurich read on a laptop abroad.",
      code: `<Calendar mode="single" timeZone="Europe/Zurich" selected={date} onSelect={setDate} />`,
    },
  ],
  api: [
    {
      name: "Calendar",
      text: "react-day-picker's DayPicker, drawn with the system's ghost buttons and type on 32px cells: the chosen day in the green, today on the taupe island. Every other prop is DayPicker's.",
      props: [
        ["showOutsideDays", "boolean", "true"],
        ["captionLayout", `"label" | "dropdown" | "dropdown-months" | "dropdown-years"`, `"label"`],
        ["buttonVariant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"ghost"`],
      ],
    },
    {
      name: "CalendarDayButton",
      text: "The button in every day cell, which the calendar already uses. Render it inside your own `components={{ DayButton }}` to add content to a day, such as its covers, and keep its styles.",
    },
  ],
  links: {
    lib: "react-day-picker",
    doc: "https://daypicker.dev",
    api: "https://daypicker.dev/api/type-aliases/DayPickerProps/",
  },
} satisfies Doc;
