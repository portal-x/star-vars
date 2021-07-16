import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/films",
    name: "Films",
    component: () => import("@/views/Films.vue"),
  },
  {
    path: "/people",
    name: "People",
    component: () => import("@/views/People.vue"),
  },
  {
    path: "/starships",
    name: "Starships",
    component: () => import("@/views/Starships.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
