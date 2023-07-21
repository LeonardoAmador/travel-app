import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: Home },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import(/* WebpackChunkName: "brasil" */ "@/views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* WebpackChunkName: "hawaii" */ "@/views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* WebpackChunkName: "jamaica" */ "@/views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* WebpackChunkName: "panama" */ "@/views/Panama.vue"),
  },
  {
    path: "/destination/:id",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
