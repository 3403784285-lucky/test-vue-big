<script setup>
import { useTimeStore } from '@/stores/index'

</script>

<template>
  <router-view v-loading.fullscreen.lock="fullscreenLoading"></router-view>
</template>

<style scoped></style>
<!-- "lint-staged": {
       "*.{js,ts,vue}": [
         "eslint --fix"
       ]
     } -->

     