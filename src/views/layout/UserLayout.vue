<!-- Sidebar.vue -->
<template>
  <div class="container-fluid">
    <div class="row user-frame">
      <div class="col-md-2 side-menu">
        <div class="align-items-start list-user-frame bg-dark">
          <div class="logo">
            <i class="iconfont icon-kekeaiaixiaopenzai-" @click="pushTable"></i
            >穿花云烛展
          </div>
          <div
              class="nav flex-column nav-pills me-3 list-user text-center"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
          >
            <router-link
                class="nav-link tab-test first"
                id="1"
                to="/user/preview"
                :style="{ backgroundColor: bgColor.value!=='1' ? '#afb3af7a' : '#212529' }"
            ><span @click="clickRouter">我的订单</span></router-link
            >
            <router-link
                class="nav-link tab-test"
                id="2"
                to="/user/house"
                :style="{ backgroundColor: !bgColor==2 ? '#afb3af7a' : '#212529' }"
            >
              <span @click="clickRouter">我的房源</span></router-link
            >
            <router-link
                class="nav-link tab-test"
                id="3"
                to="/user/info"
                :style="{ backgroundColor: !bgColor==3 ? '#afb3af7a' : '#212529' }"
            >
              <span @click="clickRouter">个人资料</span>
            </router-link>

          </div>
        </div>
      </div>
      <div class="col-md-10 content-frame">
        <ul class="nav nav-tabs bg-light choose-nav-one" v-if="!flagDisabled">
          <li class="nav-item">
            <div
                class="nav-link kid-list list-test1"
                :class="{ active: timeStore.activeTab == '待支付' }"
                @click="changeTab('待支付')"
            >
              待支付
            </div>
          </li>
          <li class="nav-item">
            <div
                class="kid-list nav-link list-test1"
                :class="{ active: timeStore.activeTab == '进行中' }"
                @click="changeTab('进行中')"
            >
              进行中
            </div>
          </li>
          <li class="nav-item">
            <div
                class="kid-list nav-link list-test1"
                :class="{ active: timeStore.activeTab == '已完成' }"
                @click="changeTab('已完成')"
            >
              已完成
            </div>
          </li>
          <li class="nav-item">
            <div
                class="kid-list nav-link list-test1"
                :class="{ active: timeStore.activeTab == '已取消' }"
                @click="changeTab('已取消')"
            >
              已取消
            </div>
          </li>
        </ul>
        <ul class="nav nav-tabs bg-light choose-nav-two" v-if="flagDisabled">
          <li class="nav-item">
            <div
                class="nav-link kid-list list-test"
                :class="{ active: timeStore.activeTab == '我发布的房源' }"
                @click="changeTab('我发布的房源')"
            >
              我发布的房源
            </div>
          </li>
          <li class="nav-item">
            <div
                class="kid-list nav-link list-test"
                :class="{ active: timeStore.activeTab == '我关注的房源' }"
                @click="changeTab('我关注的房源')"
            >
              我关注的房源
            </div>
          </li>
        </ul>
        <router-view class="view-small"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useTimeStore } from '@/stores/index'
const router = useRouter()
const pushTable = () => {
  router.push('/')
}
const flagDisabled = ref(false)
const timeStore = useTimeStore()
const bgColor = ref(1)
const clickRouter = (e) => {
  console.log(bgColor.value)
  if (flagDisabled.value) {
    flagDisabled.value = false
  } else {
    flagDisabled.value = true
  }
  bgColor.value=e.target.id


}
const changeTab = (tabName) => {
  $('.list-test').removeClass('active')
  timeStore.activeTab = tabName
}
</script>

<style scoped>
.first {
  background-color: #acbfe6;
}
.logo {
  color: white;
  font-size: 1.5rem;
  font-family: 'YouYuan';
  margin-bottom: 1rem;
  margin-left: 0.5rem;
}

/* Additional styling for fixed-left */

/* Adjust content margin to make room for fixed-left sidebar */
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: '阿里妈妈方圆体 VF Regular';
  src:
      url('//at.alicdn.com/wf/webfont/ZFKh9pHaLBHf/DuzVkKxfeI6V.woff2')
      format('woff2'),
      url('//at.alicdn.com/wf/webfont/ZFKh9pHaLBHf/YjzFddp87PA1.woff')
      format('woff');
  font-display: swap;
}
.list-user {
  width: 100%;
}
.content-frame {
  padding: 0;
}

.side-menu {
  padding: 0;
  height: 100vh;
}
.user-frame {
  padding: 0;
  height: 100%;
}
.list-user-frame {
  height: 100%;
  width: 16.5%;
  padding: 1rem;
  position: fixed;
}
.nav-link {
  color: white;
  font-family: '华文楷体';
  font-size: 1.2rem;
}
.choose-nav-one,
.choose-nav-two {
  position: fixed;
  width: 100%;
  z-index: 100;
}

.kid-list {
  color: rgb(16, 15, 15);
}
</style>
