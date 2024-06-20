<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
           :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!-- 要放到导航栏里面 -->
    <h3>{{ isCollapse ? "后台" : "穿花云烛展" }}</h3>
    <!-- 观察数据,我们发现name是唯一标识 -->
    <!-- 查看文档,index是唯一标识 -->
    <el-menu-item @click="clickItem(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
      <!-- 直接使用图标组件 -->
      <component :is="item.icon" class="menu-icon" />
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useMenuStore } from '@/stores/modules/menuStore'; // 引入 Pinia Store
import {
  House,
  User,
  Calendar
} from '@element-plus/icons-vue';

const icons = {
  House,
  User,
  Calendar
};

const MenuData = [
  {
    name: 'userManagement',
    label: '用户管理',
    icon: User,
    path: '/manage/user',
    url: '/manage/user'
  },
  {
    name: 'houseManagement',
    label: '房屋管理',
    icon: House,
    path: '/manage/house',
    url: '/manage/house'
  },
  {
    name: 'previewManagement',
    label: '预约管理',
    icon: Calendar,
    path: '/manage/preview',
    url: '/manage/preview'
  }
];

// 动态解析图标组件
const resolveIconComponent = (iconName) => {
  return icons[iconName] || null;
};

// 使用 Pinia Store
const menuStore = useMenuStore();

// 获取折叠状态
const isCollapse = computed(() => menuStore.isCollapse);

// 获取路由实例
const router = useRouter();
const route = useRoute();

// 处理菜单项点击事件，导航到指定路径
const clickItem = (item) => {
  // 防止重复点击同一路径报错
  if (route.path !== item.path && !(route.path === '/manager-layout' && item.path === '/manage/user')) {
    router.push(item.path);
  }
};

// 处理菜单打开事件
const handleOpen = (key, keyPath) => {
  console.log('打开菜单:', key, keyPath);
};

// 处理菜单关闭事件
const handleClose = (key, keyPath) => {
  console.log('关闭菜单:', key, keyPath);
};

// 计算属性，过滤没有子菜单的菜单项
const noChildren = computed(() => {
  return MenuData.filter(item => !item.children);
});

// 计算属性，过滤有子菜单的菜单项
const hasChildren = computed(() => {
  return MenuData.filter(item => item.children);
});
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;
  border-right: none;

  h3 {
    text-align: center;
    line-height: 48px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
}

.menu-icon {
  margin-right: 10px;
  font-size: 20px; /* 调整图标大小 */
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
