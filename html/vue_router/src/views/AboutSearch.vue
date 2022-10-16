<template>
  <div class="search">
    <h1>This is an search page</h1>
  </div>
</template>
<script setup lang="ts">
// 路由组件传参
import { defineProps } from "vue";
const props = defineProps<{
  foo: string;
  id?: number;
}>();
console.log(props);
</script>
