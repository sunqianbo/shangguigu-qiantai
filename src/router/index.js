import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store"
Vue.use(VueRouter);
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search/searchIndex.vue";
import Trade from "@/pages/Trade/tradeIndex.vue"
const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/Home/homeIndex.vue"),
      meta: {
        show: true,
      },
    },
    {
      path: "/trade",
      component: Trade,
      meta: {
        show: true,
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false,
      },
    },
    {
      path: "/search",
      component: Search,
      meta: {
        show: true,
      },
    },

    {
      path: "*",
      redirect: "/home",
    },
  ],
});
console.log(store);
// router.beforeEach((to,from ,next)=>{
   
// })
export default router