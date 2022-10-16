import { ref, onMounted, onBeforeUpdate, onUpdated, computed } from "vue";
import { onBeforeRouteLeave } from "vue-router";
// 响应式状态
const count = ref(0);
// 计算属性
const double = computed(() => count.value * 2);
// 更改状态、触发更新的函数
function increment() {
  count.value++;
}
function useCompositionHooks() {
  onMounted(() => {
    console.log(`计数器初始值为 ${count.value}。`);
  });
  onBeforeUpdate(() => {
    console.log(`onBeforeUpdate值为 ${count.value}。`);
  });
  onUpdated(() => {
    console.log(`onUpdated值为 ${count.value}。`);
  });
  onBeforeRouteLeave((to, from) => {
    count.value = 0;
    console.log(`to ${to.path} - from ${from.path}`);
  });
}

export { count, double, increment, useCompositionHooks };
