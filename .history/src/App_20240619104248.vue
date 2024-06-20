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
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf;
}

::-webkit-scrollbar-corner {
  background: #bfbfbf;
}

</style>
<!-- "lint-staged": {
       "*.{js,ts,vue}": [
         "eslint --fix"
       ]
     } -->

     