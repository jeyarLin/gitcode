import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
// function removeQueryParams(to) {
//   if (Object.keys(to.query).length)
//     return { path: to.path, query: {}, hash: to.hash };
// }

// function removeHash(to) {
//   if (to.hash) return { path: to.path, query: to.query, hash: "" };
// }
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/html",
    name: "html",
    component: () =>
      import(/* webpackChunkName: "Html" */ "../views/AboutAbb.vue"),
    // beforeEnter: (to, from) => {
    //   // reject the navigation
    //   return false;
    // },
    // beforeEnter: [removeQueryParams, removeHash],
  },
  // {
  //   path: "/normal",
  //   name: "normal",
  //   component: () =>
  //     import(/* webpackChunkName: "normal" */ "../views/AboutNormal.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from) => {
//   // ...
//   // 返回 false 以取消导航
//   return false
// })
// router.beforeResolve(async to => {
//   if (to.meta.requiresCamera) {
//     try {
//       await askForCameraPermission()
//     } catch (error) {
//       if (error instanceof NotAllowedError) {
//         // ... 处理错误，然后取消导航
//         return false
//       } else {
//         // 意料之外的错误，取消导航并把错误传给全局处理器
//         throw error
//       }
//     }
//   }
// })
// 后置
// router.afterEach((to, from) => {
//   sendToAnalytics(to.fullPath);
// });
export default router;
