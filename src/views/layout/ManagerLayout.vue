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
              <router-link class="nav-link" to="/manage/user"
                >用户管理</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/manage/house"
                >房屋管理</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/manage/preview"
                >预约管理</router-link
              >
            </li>
          </ul>
          <div class="navbar-nav">
            <div class="row profile">
              <div class="col-sm-3">
                <div id="personProfileNav">
                  <img
                    class="img-fluid rounded-3"
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XnNffgb1NFyj1bxHEXyzsQAAAA?w=210&h=210&c=7&r=0&o=5&dpr=2&pid=1.7"
                    alt="头像"
                  />
                </div>
              </div>
              <div class="col-sm-6 nickname">
                <div class="text-light">小星星</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div class="divider"></div>
  <router-view></router-view>
</template>
<script setup>
import '@/assets/css/font.css'
</script>
<style scoped>
.divider {
  height: 5rem;
}
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
