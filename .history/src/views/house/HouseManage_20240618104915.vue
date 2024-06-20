<!--
 * @Author: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @Date: 2023-11-24 15:09:46
 * @LastEditors: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @LastEditTime: 2023-12-07 17:16:29
 * @FilePath: \test-vue-big\src\views\house\HouseManage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 头部 -->

  <!-- 头部使用固定定位，固定定位不占位 -->
  <!-- 挤压变形只会挤压最外层，只需要再加一个层数就行了 -->
  <div class="container-fluid back-ground-frame">
    <img
      class="back-ground"
      src="https://picx.zhimg.com/80/v2-deb98bdbf3b5b23ca93ede4ec030b92f_1440w.webp?source=1def8aca"
      alt="背景图"
    />
  </div>

  <div class="interval"></div>
  <div class="container description-warmth upper">
    <div class="title-description1">家的治愈感,</div>
    <div class="title-description2">是目之所及的温暖</div>
  </div>

  <!-- 分地区搜索加商标 -->
  <div class="container upper first">
    <input
      type="radio"
      class="btn-check"
      name="options"
      value="北京"
      id="option1"
      autocomplete="off"
      v-model="selectOption"
      checked
    />
    <label
      class="btn btn-secondary searchKey"
      for="option1"
      @click="clickSelected"
      >北京</label
    >

    <input
      type="radio"
      class="btn-check"
      name="options"
      id="option2"
      v-model="selectOption"
      value="上海"
      autocomplete="off"
    />
    <label class="btn btn-secondary" for="option2" @click="clickSelected"
      >上海</label
    >

    <input
      type="radio"
      class="btn-check"
      name="options"
      id="option3"
      v-model="selectOption"
      value="上海"
      autocomplete="off"
    />
    <label class="btn btn-secondary" for="option3" @click="clickSelected"
      >深圳</label
    >

    <input
      type="radio"
      class="btn-check"
      name="options"
      id="option4"
      v-model="selectOption"
      :value="null"
      autocomplete="off"
    />
    <label class="btn btn-secondary" for="option4" @click="clickSelected"
      >其他</label
    >
    <div class="row">
      <!-- <div class="col-md-1 search-part">
        <div class="logo border border-dark rounded-2 text-center">新房</div>
      </div> -->

      <div class="col-md-2 search-part">
        <dropDown></dropDown>
      </div>
      <div class="col-md-7 search-part">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control searchInput"
            placeholder="输入你要搜索的房屋名称"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            @keydown="inputSearchWatch"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              @click="clickSelected"
            >
              搜索
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 第二部分 -->
  <!-- <section>
      <div class="container">
        <div class="card">
          <div class="row">
            <div class="col-md-6">123</div>
            <div class="col-md-6">456</div>
          </div>
        </div>
      </div>
    </section> -->
  <!-- 第二部分，数据显示 -->
  <div class="inner container">
    <div class="module1-show container module">
      <div class="row">
        <div class="col-md-11">
          <div class="module-title">二手好房</div>
          <div class="module-description">好房源那么多，我们为你精选</div>
        </div>

        <div class="col-md-1 align-self-center more">更多</div>
      </div>

      <div class="row justify-content-between">
        <div
          class="col-md-3 small-part"
          v-for="house in houses.slice(0, h)"
          :key="house.skuId"
          @click="clickHouse(house)"
        >
          <img class="img-frame rounded-3" :src="house.housePic" alt="房子" />
          <div class="house-name">{{ house.houseName }}</div>
          <div class="row">
            <div class="col-md-6 house-scale">
              {{ house.unitType }}室1厅 {{ house.houseSize }}平米
            </div>
            <div class="col-md-6 house-price text-end">
              {{ house.housePrice }}万
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="module1-show container">
      <div class="module1-title">小区精选</div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
      </div>
    </div> -->
    <!-- <div class="module1-show container module">
      <div class="module-title">优选新房</div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
      </div>
    </div> -->
    <div
      v-if="h < houses.length"
      class="row justify-content-center more moreOther"
      @click="clickMore"
    >
      点击查看更多
    </div>
    <div v-else class="row justify-content-center noMore">没有更多了</div>
  </div>
</template>
<script setup>
import dropDown from '../../components/drop-down.vue'
import { houseDetailService, searchContentByKeyService } from '@/api/house'
import { onBeforeMount, ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTimeStore } from '@/stores/index'
import { debounce } from 'lodash'
import $ from 'jquery'
// 在setup外部声明
//let houses
const houses = ref([])
const router = useRouter()
const timeStore = useTimeStore()
const selectOption = ref()
// setup函数
onBeforeMount(async () => {
  if(!houses.value){
    timeStore.loading=true
  }else{
    timeStore.loading=false

  }
  const res = await houseDetailService()
  houses.value = res.data.data
  
  
  console.log(houses.value)
})
const clickSelected = () => {
  inputSearchWatch()
}
const h = ref(8)
const clickMore = () => {
  h.value += 8
}
const inputSearchWatchCopy = async () => {
  console.log('触动了')
  let keySmall = selectOption.value

  const res = await searchContentByKeyService(
    $('.searchInput')[0].value,
    keySmall
  )
  houses.value = res.data.data
}
const inputSearchWatch = debounce(inputSearchWatchCopy, 500)
onUnmounted(() => {
  // 移除组件时，取消定时器
  inputSearchWatch.cancel()
})
const clickHouse = (value) => {
  router.push('/house/channel')
  // console.log(value)
  timeStore.house = value
}

// 在模板中通过返回的方式将变量提供给模板
</script>

<style scoped>
.interval {
  height: 5.5vh;
}
.logo {
  font-family: 'STLiti';
  font-size: 1.5rem;
}

.search-part {
  margin-bottom: 3vh;
  margin-top: 3vh;
}

.back-ground {
  width: 100%;
  height: 75vh;
  z-index: -1;
  position: absolute;
}
.back-ground-frame {
  margin: 0;
  padding: 0;
}
.title-description1 {
  color: white;
  font-family: 'YouYuan';
  font-size: 3.5rem;
}
.title-description2 {
  color: white;
  font-family: 'YouYuan';
  font-size: 1.5rem;
}
.description-warmth {
  margin-top: 15vh;
  margin-bottom: 10vh;
  width: 60vw;
}
.upper {
  margin-left: 10vw;
}
.noMore {
  font-size: 0.9rem;
  color: rgb(167, 161, 161);
  font-weight: 900;
  font-family: 'YouYuan';
}
.first {
  width: 60vw;
}
.module {
  margin-top: 10vh;
}
.inner {
  width: 80vw;
}
.module-title {
  font-size: 1.5rem;
  font-family: 'YouYuan';
  font-weight: 900;
}
.moreOther {
  margin-bottom: 2rem;
}
.small-part {
  width: 18vw;
  cursor: pointer;

  margin-bottom: 1.5rem;
}
.more:hover {
  color: rgb(255, 0, 0);
}
.more {
  font-size: 0.9rem;
  color: rgb(189, 124, 124);
  font-weight: 900;
  font-family: 'YouYuan';
}
.house-name {
  margin-top: 3vh;
  margin-bottom: 2vh;
  width: 9vw;
  font-weight: 900;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.house-scale {
  font-size: 0.6rem;
}
.house-price {
  font-size: 0.8rem;
  font-weight: 900;
  color: red;
}
.module-description {
  font-size: 0.8rem;
  color: rgba(122, 125, 128, 0.62);
  margin-bottom: 4vh;
}
.img-frame {
  width: 10rem;
  height: 10rem;
}
</style>
