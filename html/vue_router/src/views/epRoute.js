import { useRouter, useRoute } from "vue-router";

export default function () {
  const router = useRouter();
  const route = useRoute();
  const AboutSearch = () =>
    import(/* webpackChunkName: "search" */ "./AboutSearch.vue");

  // 路由传参
  function pushRoute() {
    router.push({
      name: "search",
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
  // 路由组件传参
  // 当 props 设置为 true 时，route.params 将被设置为组件的 props。
  function adRoute() {
    router.addRoute({
      name: "search",
      path: "/search/:id/:foo",
      component: AboutSearch,
      props: true,
    });
  }
  // 动态路由 删除路由
  function rmRoute() {
    router.removeRoute("search");
  }

  // 新增 嵌套路由
  // function adChild() {
  //   router.addRoute({
  //     name: "admin",
  //     path: "/admin",
  //     component: Admin,
  //     children: [{ name: "settings", path: "settings", component: AdminSettings }],
  //   });
  // }

  // 获取路由 判断路由
  function getRoute() {
    const isY = router.hasRoute("about");
    const list = router.getRoutes();
    console.log(isY, list);
  }
  return {
    pushRoute,
    adRoute,
    rmRoute,
    getRoute,
  };
}
