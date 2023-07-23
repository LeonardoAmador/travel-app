import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("@/views/ExperienceShow.vue"),
    props: route => ({...route.params, id: Number(route.params.id) })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
