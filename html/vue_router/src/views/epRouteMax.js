import { useRouter, useRoute } from "vue-router";

export default function () {
  const router = useRouter();
  const route = useRoute();
  const AboutMax = () => import(/* webpackChunkName: "max" */ "./AboutMax.vue");

  // 路由传参
  function pushRouteMax() {
    router.push({
      path: "/max",
      query: {
        ...route.query,
      },
      hash: route.hash,
    });
  }

  // 动态路由 新增路由
  function adRouteMax() {
    console.log("World");
    router.addRoute({
      name: "max",
      path: "/max",
      component: AboutMax,
      props: { name: "World", xxx: 990 },
    });
  }
  // 动态路由 删除路由
  function rmRouteMax() {
    router.removeRoute("max");
  }

  return {
    pushRouteMax,
    adRouteMax,
    rmRouteMax,
  };
}
