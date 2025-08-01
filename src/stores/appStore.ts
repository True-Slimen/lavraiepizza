import {defineStore} from "pinia";
import {applyTheme} from "@/composables/themeComposable.ts";

export const useAppStore = defineStore("counter", {
  state: () => ({
    theme: "coffee",
  }),
  getters: {
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
      localStorage.setItem("theme", this.theme);
      applyTheme();
    },
  },
});