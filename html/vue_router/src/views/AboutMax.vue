<template>
  <div class="max">
    <h1>This is an max page</h1>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  name: string;
  xxx?: number;
}>();
console.log(props);
</script>
