import {
  createRouter,
  createWebHistory,
} from "vue-router";
import type {Router} from "vue-router";
import { routes } from "./routes";

const router: Router = createRouter({
  history: createWebHistory(), //createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: routes,
});

export default router;