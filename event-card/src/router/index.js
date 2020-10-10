import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about-us",
    name: "about",
    // alias used for redirecting to about-us path
    alias:"/about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  // {
  //   path: "/about",
  //   redirect:{name:'about'}
  // }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
