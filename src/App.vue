<script setup lang="ts">
import {data,headers} from './data/data'
import usePostTransactions from './services/use-post-transaction'
const url = import.meta.env.VITE_API_URL
const onCLick = async () => {
  const response = await usePostTransactions(url,data, headers)
  console.log(response)
}
</script>

<template>
  <div id="app">
    <button @click="onCLick"  >fetch</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
