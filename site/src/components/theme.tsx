/* Three-state theme, the way the docs sites do it: system, light, dark.
   "system" writes no attribute and lets prefers-color-scheme decide; the two
   explicit choices stamp data-theme on <html> so the CSS in tokens.css can
   win in both directions. The choice is remembered per browser.

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

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const id = React.useId();
  return (
    <fieldset className="g-theme">
      <legend>Select a display theme:</legend>
      {OPTIONS.map(({ value, label, Icon }) => (
        <span className="g-theme__opt" key={value}>
          <input
            className="g-theme__input"
            type="radio"
            id={`${id}-${value}`}
            name={`${id}-theme`}
            value={value}
            checked={theme === value}
            onChange={() => setTheme(value)}
          />
          <label className="g-theme__label" htmlFor={`${id}-${value}`}>
            <span className="g-sr">{label}</span>
            <Icon />
          </label>
        </span>
      ))}
    </fieldset>
  );
}
