//useCounter.js
// https://juejin.cn/post/6844904136065056781
// https://juejin.cn/post/7033321421359349768
import { ref, computed, onMounted, onBeforeUpdate, onUpdated } from "vue";
// import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
export default function () {
  const count = ref(0);
  const double = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  onMounted(() => {
    console.log(`计数器初始值为 ${count.value}。`);
  });
  onBeforeUpdate(() => {
    console.log(`onBeforeUpdate值为 ${count.value}。`);
  });
  onUpdated(() => {
    console.log(`onUpdated值为 ${count.value}。`);
  });

  // 与 beforeRouteLeave 相同，无法访问 `this`
  // onBeforeRouteLeave((to, from) => {
  //   const answer = window.confirm(
  //     'Do you really want to leave? you have unsaved changes!'
  //   )
  //   // 取消导航并停留在同一页面上
  //   if (!answer) return false
  // })

  // const userData = ref()
  // 与 beforeRouteUpdate 相同，无法访问 `this`
  // onBeforeRouteUpdate(async (to, from) => {
  //   //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
  //   if (to.params.id !== from.params.id) {
  //     userData.value = await fetchUser(to.params.id)
  //   }
  // })

  return {
    count,
    double,
    increment,
  };
}
