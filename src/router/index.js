import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VsPlayerView from "../views/VsPlayerView.vue";
import VsIaView from "../views/VsIaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/vsplayer",
      name: "vsplayer",
      component: VsPlayerView,
    },
    {
      path: "/vsia",
      name: "vsia",
      component: VsIaView,
    },
  ],
});

export default router;
