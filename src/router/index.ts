import { createRouter, createWebHistory } from "vue-router";
import RaccontoView from "../views/RaccontoView.vue";
import BrandView from "../views/BrandView.vue";
import DigitaleView from "../views/DigitaleView.vue";
import CreditiView from "../views/CreditiView.vue";
import oOoView from "../views/oOoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "racconto",
      component: RaccontoView,
    },
    {
      path: "/brand",
      name: "brand",
      component: BrandView,
    },
    {
      path: "/digitale",
      name: "digitale",
      component: DigitaleView,
    },
    {
      path: "/crediti",
      name: "crediti",
      component: CreditiView,
    },
    {
      path: "/oOo",
      name: "oOo",
      component: oOoView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
