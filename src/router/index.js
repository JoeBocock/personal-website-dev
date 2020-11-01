import Vue from "vue";
import VueRouter from "vue-router";
import Who from "../views/Who.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Who",
    component: Who
  },
  {
    path: "/what",
    name: "What",
    component: () => import("../views/What.vue")
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("../views/Work.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
