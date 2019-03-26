import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Callback from './components/Callback';
import Profile from "./views/Profile.vue";
import OrderApiView from "./views/Order.vue";
import auth from "./auth/authProvider";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: (to, from, next) => {
        if (to.path === "/" || to.path === "/callback" || auth.isAuthenticated()) {
          return next();
        }
        auth.login({ target: to.path });
      }
    },
    {
      path: "/order",
      name: "order-api",
      component: OrderApiView
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})
