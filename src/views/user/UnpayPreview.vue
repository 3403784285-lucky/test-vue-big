<template>
  <div class="container order-frame">
    <div v-for="(order, index) in orders" :key="index" class="card">
      <!-- 订单的内容 -->
      <div class="container order-inner">
        <!-- ... （省略其他部分的内容） -->

        <!-- 使用订单数据渲染 -->
        <div class="row justify-content-between order-desc">
          <div class="col-md-3">
            <div class="orderNum">
              <strong>编号:{{ order.orderSkuId }}</strong>
            </div>
          </div>
          <div class="col-md-2 text-end">
            <div class="orderStatus">
              {{ getStatus(index, order.orderStatus) }}
            </div>
          </div>
        </div>
        <!-- ... （省略其他部分的内容） -->

        <!-- 使用订单数据渲染 -->
        <div class="container">
          <div class="row house-desc">
            <div class="col-md-4">
              <img class="img-frame" :src="order.housePic" />
            </div>
            <div class="col-md-2 text-break desc-detail">
              {{ order.description }}
            </div>
            <div class="col-md-6 money text-end">
              <div class="remain-time">
                距离开始:
                {{ getRemainingTime(order.orderEndTime) }}天
              </div>

              应付：<i class="text-success">{{ order.totalPrice }} 元</i>
            </div>
          </div>
        </div>
        <!-- ... （省略其他部分的内容） -->

        <!-- 使用订单数据渲染 -->
        <div class="row button-click justify-content-end">
          <div class="col-md-4 pay">
            <div class="container">
              <div class="row">
                <div class="col-md-6 return text-end">
                  <button
                    type="button"
                    class="cancelButton"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    @click="tempIs(order)"
                  >
                    {{ timeStore.cancel }}
                  </button>
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog text-dark">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            取消订单
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          你确定要放弃这个和云烛小屋接续前缘的机会吗？
                        </div>
                        <div class="modal-footer">
                          <button
                            ref="unique"
                            type="button"
                            class="btn btn-secondary not-give"
                            data-bs-dismiss="modal"
                          >
                            我再想想
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary give-up"
                            @click="defineCancel(temp)"
                          >
                            确定放弃
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 finish text-end">
                  <button
                    @click="finishOrder(order)"
                    class="finishButton"
                    :disabled="disableIs(order.orderStatus)"
                  >
                    {{ timeStore.finish }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between tips">
          <div class="col-md-3 time-order text-start">
            &nbsp; {{ order.orderCreateTime }}
          </div>
          <div class="col-md-3 warn-time text-end">
            {{ order.orderCountDown }}
          </div>
        </div>

        <!-- ... （省略其他部分的内容） -->
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  userUnPayService,
  userCancelOrderService,
  userDoingService,
  userFinishService,
  userReturnService,
  userDeleteService
} from '../../api/user'
import { houseCertainService } from '../../api/house'
import { useUserStore, useTimeStore } from '@/stores/index'
import { ref, nextTick, watchEffect, onUnmounted } from 'vue'
import $ from 'jquery'
import { useRouter } from 'vue-router'
//这里是数组
const orders = ref({})
const userStore = useUserStore()
const router = useRouter()
const unique = ref(null)
const timeStore = useTimeStore()
const timer = ref()
const temp = ref()
const intervalId = ref([])
const tempIs = (order) => {
  temp.value = order
}
const getTime = () => {
  var date = new Date()
  var year = date.getFullYear()
  var month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  // var todayDate = year + '-' + month + '-' + day  //当前年月日 eg:2021-11-23
  var hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
  var min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
  var sec = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
  var todayDate =
    year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec

  return todayDate
}
const getRemainingTime = (endTime) => {
  // 将日期字符串转换为统一的格式（例如 ISO 格式）

  const formattedDate2 = endTime.replace(/-/g, '/')

  // 创建 Date 对象
  const date1 = new Date(getTime())
  const date2 = new Date(formattedDate2)
  console.log(getTime())
  console.log(endTime)

  // 计算时间戳差异
  const timeDiff = Math.abs(date2.getTime() - date1.getTime())

  // 将时间差异转换为天数
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

  return daysDiff
}
function padLeft(number) {
  return number < 10 ? '0' + number : number
}

onUnmounted(() => {
  console.log('跳转')
  clearTimeout(timer.value)
  timer.value = ''
  for (const timerElement of intervalId.value) {
    clearTimeout(timerElement)
  }
  intervalId.value = []
})
const disableIs = (status) => {
  if (status == '3') {
    return true
  } else return false
}
const getDoing = async () => {
  timeStore.finish = '前往评价'
  timeStore.cancel = '申请退款'
  const res = await userDoingService(userStore.userId)
  orders.value = res.data.data
}
const getFinish = async () => {
  timeStore.finish = '前往评价'
  timeStore.cancel = '删除订单'
  const res = await userFinishService(userStore.userId)
  orders.value = res.data.data
}

const getUnPay = async () => {
  timeStore.finish = '前往支付'
  timeStore.cancel = '取消订单'
  console.log('现在是未支付')
  const res = await userUnPayService(userStore.userId)
  orders.value = res.data.data
  orders.value.forEach((order) => {
    // 创建 Date 对象
    const date1 = new Date(getTime())
    const date2 = new Date(order.orderCreateTime)
    // 计算时间间隔（单位：毫秒）
    var timeDiff = date1.getTime() - date2.getTime()
    // 如果时间间隔超过15分钟，将订单状态设置为已过期
    if (timeDiff > 15 * 60 * 1000) {
      order.orderCountdown = ''
      location.reload()
      console.log(order)
    } else {
      // 否则，计算倒计时并更新订单状态
      var secondsDiff = Math.floor((15 * 60 * 1000 - timeDiff) / 1000)
      var minutes = Math.floor(secondsDiff / 60)
      var seconds = secondsDiff % 60
      // 更新订单状态和倒计时信息
      $('.orderStatus').eq(0).text('待支付')
      order.orderCountDown =
        padLeft(minutes) + ':' + padLeft(seconds) + '后订单自动取消'
      // 启动倒计时定时器
      intervalId.value.push(
        setInterval(function () {
          secondsDiff--
          if (secondsDiff <= 0) {
            clearInterval(intervalId.value.pop()) // 清除定时器
            order.orderCountdown = ''
            location.reload()
          } else {
            minutes = Math.floor(secondsDiff / 60)
            seconds = secondsDiff % 60
            order.orderCountDown =
              padLeft(minutes) + ':' + padLeft(seconds) + '后订单自动取消'
          }
        }, 1000)
      )
    }
  })
}
const judgeOrder = (activeTab) => {
  if (activeTab == '待支付') {
    getUnPay()
  } else if (activeTab == '进行中') {
    getDoing()
  } else {
    getFinish()
  }
}
judgeOrder(timeStore.activeTab)

watchEffect(() => {
  // 在变化时执行回调函数
  console.log('响应式变量发生变化:', timeStore.activeTab)
  // 这里可以执行你的回调函数，并立即获取新的值
  judgeOrder(timeStore.activeTab)
})
const defineCancel = async (order) => {
  if (timeStore.activeTab == '待支付') {
    await userCancelOrderService(order.orderSkuId)
    console.log(unique.value)
    unique.value[0].click()
    ElMessage.success('订单取消成功')
    clearTimeout(timer.value)
    timer.value = ''
    timer.value = setTimeout(() => {
      location.reload()
    }, 1000)
  } else if (timeStore.activeTab == '进行中') {
    if (order.orderStatus == '-2') {
      ElMessage.error('您已申请，官方小二正在快马加鞭处理...')
      unique.value[0].click()
    } else {
      await userReturnService(order)
      unique.value[0].click()
      ElMessage.success('退款申请成功，正在等待官方同意...')
      clearTimeout(timer.value)
      timer.value = ''
      timer.value = setTimeout(() => {
        location.reload()
      }, 1000)
    }
  } else {
    await userDeleteService(order)
    unique.value[0].click()
    ElMessage.success('订单删除成功')
    clearTimeout(timer.value)
    timer.value = ''
    timer.value = setTimeout(() => {
      location.reload()
    }, 1000)
  }
}
const getStatus = (index, status) => {
  if (status == '-3') {
    return '已退款'
  } else if (status == '-2') {
    return '退款中'
  } else if (status == '-1') {
    return '已取消'
  } else if (status == '0') {
    return '待支付'
  } else if (status == '1') {
    return '进行中'
  } else if (status == '2') {
    return '已完成'
  } else if (status == '3') {
    return '已评价'
  }
}

//前往支付
const goPay = (order) => {
  timeStore.order = order
  router.push('/pay')
}

//前往评价
const goComment = async (order) => {
  //查询特定房子信息
  const res = await houseCertainService(order)
  timeStore.house = res.data.data
  router.push('/house/channel')
}
//如果待支付，后面的也就是取消订单，那就是确认取消， 如果是进行中，后面的就是申请退款；
const finishOrder = async (order) => {
  if (timeStore.activeTab == '待支付') {
    goPay(order)
  } else if (timeStore.activeTab == '进行中') {
    ElMessage.warning('只有等订单完成后才能评价哦')
  } else {
    goComment(order)
  }
}
</script>
<style scoped>
.row {
  margin: 0;
  padding: 0;
}
.order-inner {
  padding: 0;
}

.warn-time {
  font-size: 0.9rem;
  color: red;
}

.card {
  margin-bottom: 1rem;
}
.order-frame {
  color: rgb(178, 178, 178);
  padding: 2rem;
  margin-top: 3rem;
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
.remain-time {
  align-self: self-start;
  justify-self: end;
  color: rgb(156, 63, 63);
  font-family: 'YouYuan';
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
  align-items: end;
  padding: 0;
  color: rgba(150, 150, 148, 0.503);
}

.desc-detail {
  color: rgba(149, 150, 150, 0.592);
}

.money {
  color: rgba(128, 128, 113, 0.534);
}
.pay {
  display: flex;
  width: 12.5rem;
  padding: 0;
}
button {
  padding: 0.3rem;
  background-color: rgba(0, 128, 0, 0.647);
  color: white;
  border: rgb(173, 166, 166) solid 1px;
  border-radius: 0.3rem;
}
.cancelButton {
  background-color: rgba(255, 0, 0, 0.575);
}
.button-click {
  margin: 1rem;
  padding: 0;
}
.give-up {
  background-color: red;
}
</style>
<script setup></script>
