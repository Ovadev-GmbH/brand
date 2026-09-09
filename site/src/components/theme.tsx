/* Three-state theme, the way the docs sites do it: system, light, dark.
   "system" writes no attribute and lets prefers-color-scheme decide; the two
   explicit choices stamp data-theme on <html> so the token layer in
   styles/app.css can win in both directions. The choice is remembered per
   browser.

   index.html runs the same read before first paint, so a dark reader never
   sees a white flash. */

import * as React from "react";
import { MoonIcon, SunIcon, SystemIcon } from "./icons";

export type Theme = "system" | "light" | "dark";
export const THEME_KEY = "ovadev-brand-theme";

function read(): Theme {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === "light" || v === "dark" || v === "system") return v;
  } catch {
    /* private mode, blocked storage: fall through to system */
  }
  return "system";
}

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
}

const Ctx = React.createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({ theme: "system", setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(read);
  const setTheme = React.useCallback((t: Theme) => {
    setThemeState(t);
    apply(t);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      /* not being able to remember it is not a reason to not apply it */
    }
  }, []);
  React.useEffect(() => {
    apply(theme);
  }, [theme]);
  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
}

export function useTheme() {
  return React.useContext(Ctx);
}

const OPTIONS: { value: Theme; label: string; Icon: React.ComponentType<{ size?: number }> }[] = [
  { value: "system", label: "System", Icon: SystemIcon },
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
];

/** One fieldset of radios: the input is the state, the label is the button.
 *  A radio group rather than three buttons, so the three are announced as one
 *  choice and the arrow keys move between them for free. */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const id = React.useId();
  return (
    <fieldset className="m-0 flex h-8 w-fit rounded-full border-0 p-0 shadow-border">
      <legend className="sr-only">Select a display theme:</legend>
      {OPTIONS.map(({ value, label, Icon }) => (
        <span className="block h-full" key={value}>
          <input
            className="peer absolute opacity-0 pointer-events-none"
            type="radio"
            id={`${id}-${value}`}
            name={`${id}-theme`}
            value={value}
            checked={theme === value}
            onChange={() => setTheme(value)}
          />
          <label
            className="flex size-8 cursor-pointer items-center justify-center rounded-full text-gray-700 hover:text-gray-1000 peer-checked:bg-bg-100 peer-checked:text-gray-1000 peer-checked:shadow-[0_0_0_1px_var(--color-gray-400),var(--shadow-small)] peer-focus-visible:shadow-[0_0_0_2px_var(--color-bg-100),0_0_0_4px_var(--color-accent)]"
            htmlFor={`${id}-${value}`}
          >
            <span className="sr-only">{label}</span>
            <Icon />
          </label>
        </span>
      ))}
    </fieldset>
  );
}
