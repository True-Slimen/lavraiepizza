import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
    name: "homePage",
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
