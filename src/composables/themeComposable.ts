import { useAppStore } from "@/stores/appStore.ts";


export function applyTheme() {
  const store = useAppStore();
  const theme = localStorage.getItem("theme") ?? store.$state.theme;
  document.documentElement.setAttribute("data-theme", theme);
}