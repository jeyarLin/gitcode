<template>
  <div class="normal">
    <h1>This is an normal page</h1>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params);
</script>
