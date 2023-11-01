import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/animation",
    name: "animation",
    component: () => import("../views/Animation/index.vue"),
  },
  {
    path: "/vfx",
    name: "vfx",
    component: () => import("../views/Vfx/index.vue"),
  },
  {
    path: "/color",
    name: "color",
    component: () => import("../views/Color/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
