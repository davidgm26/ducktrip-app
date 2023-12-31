import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import FlightPage from "../views/FlightPage.vue";
import AboutPage from "../views/AboutPage.vue";
import TipsPage from "../views/TipsPage.vue";
import ErrorPage from "../views/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/flights",
      name: "flights",
      component: FlightPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/tips",
      name: "tips",
      component: TipsPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "error",
      component: () => import ("../views/ErrorPage.vue"),
    },
  ],
});

export default router;
