import Vue from "vue";
import VueRouter from "vue-router";
import Scene from "@/views/Scene";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Scene",
    component: Scene
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
