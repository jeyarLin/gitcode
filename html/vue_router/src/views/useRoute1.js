import { useRoute } from "vue-router";
import { ref, watch } from "vue";
export default function () {
  const route = useRoute();
  const userData = ref();

  function fetchUser(newId) {
    return [];
  }

  // 当参数更改时获取用户信息
  watch(
    () => route.params.id,
    async (newId) => {
      userData.value = await fetchUser(newId);
    }
  );
}
