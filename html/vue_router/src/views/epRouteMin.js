import { useRouter, useRoute } from "vue-router";

export default function () {
  const router = useRouter();
  const route = useRoute();
  const AboutMin = () => import(/* webpackChunkName: "min" */ "./AboutMin.vue");

  // 路由传参
  function pushRoute() {
    router.push({
      name: "min",
      params: {
        id: 33,
        foo: "dd",
      },
      query: {
        ...route.query,
      },
      hash: route.hash,
    });
  }

  // 动态路由 新增路由
  function adRoute1() {
    router.addRoute({
      name: "min",
      path: "/min/:id/:foo",
      component: AboutMin,
    });
  }
  // 动态路由 删除路由
  function rmRoute1() {
    router.removeRoute("min");
  }

  return {
    pushRoute,
    adRoute1,
    rmRoute1,
  };
}
