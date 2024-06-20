<template>
  <div class="header-container">
    <div class="l-content">
      <el-button @click="handleMenu" size="mini" class="custom-button">
        <el-icon><Menu /></el-icon>
      </el-button>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link" @click.stop>
          <img class="user" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XnNffgb1NFyj1bxHEXyzsQAAAA?w=210&h=210&c=7&r=0&o=5&dpr=2&pid=1.7" alt="头像">
          <span class="username">小星星</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Menu } from '@element-plus/icons-vue';
import { useMenuStore } from '@/stores/modules/menuStore'; // 引入 Pinia Store

const menuStore = useMenuStore(); // 使用 Pinia Store

const handleMenu = () => {
  menuStore.toggleCollapse(); // 调用 Pinia Store 的方法
};
</script>

<style lang="less" scoped>
.header-container {
  background-color: #333;
  height: 60px;

  // 让按钮和头像居中
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 不要紧贴边框
  padding: 0 20px;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #d5dee7;

    .user {
      width: 40px;
      height: 40px;
      // 50%变圆形
      border-radius: 50%;
    }

    .username {
      margin-left: 10px;
      color: #d5dee7;
    }
  }
}

/* 自定义按钮样式 */
.custom-button {
  background-color: #fafafa; /* 默认背景色 */
  color: #616367; /* 默认文字颜色 */
  border: none; /* 无边框 */
}

.custom-button:hover {
  background-color: #616367; /* 悬停背景色 */
  color: #fff; /* 悬停文字颜色 */
}

.custom-button:active {
  background-color: #616367; /* 悬停背景色 */
  color: #fff; /* 悬停文字颜色 */
}
</style>