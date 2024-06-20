<script setup>


</script>

<template>
  <router-view ></router-view>
</template>

<style scoped>

*{
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}

::-webkit-scrollbar-track {
  background: rgb(239, 239, 239) !important;
  border-radius: 2px !important;
}

::-webkit-scrollbar-thumb {
  background: #bfbfbf !important;
  border-radius: 10px !important;
}

::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf !important;
}

::-webkit-scrollbar-corner {
  background: #bfbfbf !important;
}

</style>
<!-- "lint-staged": {
       "*.{js,ts,vue}": [
         "eslint --fix"
       ]
     } -->

     