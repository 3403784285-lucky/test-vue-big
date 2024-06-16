<template>
  <div class="container order-frame">
    <div class="card" v-for="house in houses" :key="house.skuId">
      <div class="container order-inner">
        <div class="row justify-content-between order-desc">
          <div class="col-md-3">
            <div class="orderNum">
              <strong>房屋编号: {{ house.skuId }}</strong>
            </div>
          </div>
          <div class="col-md-2 text-end">
            <div class="orderStatus"></div>
          </div>
        </div>
        <div class="container">
          <div class="row house-desc">
            <div class="col-md-4">
              <img class="img-frame" :src="house.housePic" />
            </div>
            <div class="col-md-2 text-break desc-detail">
              {{ getHouseDescription(house) }}
            </div>
            <div class="col-md-6 money text-end">
              <i>{{ house.housePrice }}万</i>
            </div>
          </div>
        </div>

        <div class="row button-click justify-content-between">
          <span class="col-md-2 time-order align-center"></span>
          <div class="col-md-4 pay">
            <div class="container">
              <div class="row">
                <div class="col-md-6 return text-end">
                  <button
                    class="cancelButton"
                    @click="cancelFocus(house)"
                    v-if="timeStore.activeTab == '我关注的房源'"
                  >
                    取消关注
                  </button>
                </div>
                <div class="col-md-6 finish text-end">
                  <button @click="seeDetail(house)">查看详情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-frame {
  color: rgb(161, 147, 147);
  padding: 3rem;
  margin-top: 2rem;
  font-family: 'YouYuan';
  font-weight: 800;
}
.order-inner {
  color: rgb(245, 245, 245);
}
.orderStatus {
  color: rgb(226, 128, 128);
}
.img-frame {
  width: 10vw;
  height: 8rem;
}
.house-desc {
  height: 8rem;
}
.return,
.finish {
  padding: 0;
}
.order-desc {
  padding: 1rem;
  margin-bottom: 3vh;
  border-radius: 0.3rem;
  background-color: black;
}
.time-order {
  line-height: 3rem;
  padding: 0;
  color: rgba(150, 150, 148, 0.503);
}

.desc-detail {
  color: rgba(149, 150, 150, 0.592);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.money {
  color: rgba(255, 0, 0, 0.534);
  font-size: 1.5rem;
}
.pay {
  display: flex;
  width: 12.5rem;
  padding: 0;
}
button {
  padding: 0.3rem;
  background-color: green;
  color: white;
  border: rgb(173, 166, 166) solid 1px;
  border-radius: 0.3rem;
}
.cancelButton {
  background-color: red;
}
.button-click {
  margin: 1rem;
}
</style>
<script setup>
import {
  houseSearchFocusedUserService,
  houseCertainService,
  houseSearchDeclaredUserService
} from '@/api/house'
import { userFocusedService } from '@/api/user'
import { useUserStore, useTimeStore } from '@/stores/index'
import { ref, onUnmounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
const houses = ref([])
const userStore = useUserStore()
const timeStore = useTimeStore()
const router = useRouter()
const getFocused = async () => {
  const hes = await houseSearchFocusedUserService(userStore.userId)
  houses.value = hes.data.data
}
timeStore.activeTab = '我关注的房源'

const getDeclared = async () => {
  const des = await houseSearchDeclaredUserService(userStore.userId)
  houses.value = des.data.data
}
const init = () => {
  getFocused()
}
onUnmounted(() => {
  clearTimeout(timer.value)
})
init()

const getHouseDescription = (house) => {
  return (
    house.houseName +
    '  ' +
    '房屋大小' +
    house.houseSize +
    '位于' +
    house.houseCity
  )
}

let timer = ref('')
const cancelFocus = async (house) => {
  await userFocusedService(userStore.userId, house.skuId)
  ElMessage.success('已取消关注该房屋')
  clearTimeout(timer.value)
  timer.value = ''
  timer.value = setTimeout(() => {
    location.reload()
  }, 1000)
}
const judgeOrder = (activeTab) => {
  if (activeTab == '我关注的房源') {
    getFocused()
  } else if (activeTab == '我发布的房源') {
    getDeclared()
  }
}
judgeOrder(timeStore.activeTab)
watchEffect(() => {
  // 在变化时执行回调函数
  console.log('响应式变量发生变化:', timeStore.activeTab)
  // 这里可以执行你的回调函数，并立即获取新的值
  judgeOrder(timeStore.activeTab)
})

const seeDetail = async (house) => {
  const res = await houseCertainService(house.skuId)
  timeStore.house = res.data.data
  router.push('/house/channel')
}
</script>
