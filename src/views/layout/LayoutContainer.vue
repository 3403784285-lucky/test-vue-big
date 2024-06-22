<!--
 * @Author: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @Date: 2023-11-24 15:08:08
 * @LastEditors: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @LastEditTime: 2023-12-07 15:56:26
 * @FilePath: \test-vue-big\src\views\layout\LayoutContainer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <div class="container">
        <a class="project-title navbar-brand">穿花云烛展</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#demo"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="demo">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/house/manage"
                >首页</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/house/second"
                >二手房</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/house/declare"
                >发布房源</router-link
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">关于我们</a>
            </li>
          </ul>
          <div class="navbar-nav">
            <div class="row profile">
              <div class="col-sm-3">
                <div id="personProfileNav">
                  <img
                    class="img-fluid rounded-5"
                    :src="userInfo.avatar"
                    alt="头像"
                  />
                </div>
              </div>
              <div class="col-sm-6 nickname">
                <div class="text-light" @click="clickName">
                  {{ userInfo.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <router-view></router-view>
</template>
<script setup>
import { onMounted,ref } from 'vue'
import '@/assets/css/font.css'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/index'
import {getStatusById} from "@/api/user";
const userStore = useUserStore()
const router = useRouter()
const userInfo = ref({
  avatar: '',
  name:''
})

const clickName = async () => {
  const userRole = (await getStatusById(userStore.userId)).data.data;
  if (userRole === '0'){
    await router.push('/user');
  } else if(userRole === '1') {
    await router.push('/manager-layout');
  } else {
    await router.push('/user/login');
  }
}

onMounted(() => {
  console.log(userStore.token)
  if (userStore.token === '') {
    userInfo.value.name = '去登录';
  }else {
    userInfo.value.avatar = userStore.pic;
    userInfo.value.name = userStore.name;
  }
  console.log(userInfo);
})
</script>
<style scoped>
.project-title {
  font-family: 'YouYuan';
  font-size: 1.8rem;
}
#personProfileNav {
  line-height: 1rem;
  width: 4vw;
}
.profile {
  width: 20vw;
  line-height: 1rem;
}
.nickname {

  font-family: 'YouYuan';
  margin-top: 1rem;
}
</style>
