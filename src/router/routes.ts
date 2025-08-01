import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
    name: "homePage",
  },
  {
    path: "/login",
    component: () => import("@/pages/LoginPage.vue"),
    name: "loginPage",
  }
  // Dynamic Import

  // This route should be the last one on the list
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/404",
  //   meta: { layout: "UnauthenticatedLayout", hidden: true, },
  //   name: "404catch",
  // },
];

export { routes };
