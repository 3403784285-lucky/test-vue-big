<template>
  <el-container>
    <el-aside width=auto>
      <CommonAside />
    </el-aside>
    <el-container>
      <el-header class="el-header"><CommonHeader /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script setup>
import CommonAside from "@/views/menu/CommonAside.vue";
import CommonHeader from "@/views/menu/CommonHeader.vue";
</script>


<style lang="less" scoped>
.el-header{
  padding: 0px;
}
</style>