import { useRouter } from "vue-router";

export default function () {
  const router = useRouter();
  const AboutNormal = () =>
    import(/* webpackChunkName: "normal" */ "./AboutNormal.vue");

  // 路由传参
  function pushRoute() {
    console.log("normal");
    router.push({
      name: "normal",
      params: {
        id: 33,
        name: "ss",
        price: 22,
      },
    });
  }

  // 动态路由 新增路由
  function adRoute() {
    console.log("normal add");
    router.addRoute({
      name: "normal",
      path: "/normal",
      component: AboutNormal,
    });
  }
  // 动态路由 删除路由
  function rmRoute() {
    router.removeRoute("normal");
  }

  return {
    pushRoute,
    adRoute,
    rmRoute,
  };
}
