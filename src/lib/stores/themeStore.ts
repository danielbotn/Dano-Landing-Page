// themeStore.ts
import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";

type Theme = "light" | "dark";

interface ThemeStore {
  subscribe: Writable<Theme>["subscribe"];
  setTheme: (theme: Theme) => void;
  toggle: () => void;
  init: () => void;
}

function createThemeStore(): ThemeStore {
  const { subscribe, set, update } = writable<Theme>("dark"); // Set initial value to "dark"

  return {
    subscribe,
    setTheme: (theme: Theme) => {
      if (browser) {
        localStorage.setItem("color-theme", theme);
      }
      set(theme);
    },
    toggle: () =>
      update((currentTheme) => {
        const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";
        if (browser) {
          localStorage.setItem("color-theme", newTheme);
        }
        return newTheme;
      }),
    init: () => {
      if (browser) {
        const storedTheme = localStorage.getItem("color-theme") as Theme | null;
        if (storedTheme === "light" || storedTheme === "dark") {
          set(storedTheme);
        } else {
          // If no theme is stored, set it to dark and save in localStorage
          localStorage.setItem("color-theme", "dark");
          set("dark");
        }
      }
    },
  };
}

export const themeStore = createThemeStore();
