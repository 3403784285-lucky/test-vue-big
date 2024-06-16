<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 des-frame">
        <div class="b-frame">
          收款方：<i class="iconfont icon-kekeaiaixiaopenzai-"></i>
          <span class="beneficiary text-dark"> 云烛官方</span>
        </div>
        <div class="time-frame">
          剩余时间：<i class="iconfont icon-jinggao"></i>
          <span class="remain-time text-dark"> {{ order.orderCountDown }}</span>
        </div>

        <div class="card bg-dark text-white">
          <div class="card-body">
            <h5 class="card-title">
              <div class="des">
                <i class="iconfont icon-kekeaiaixiaopenzai-"></i>&nbsp;账户余额:
                {{ money }} 元
              </div>

              <div class="price-frame">
                支付
                <span class="price">{{ order.totalPrice }}</span>
                元
              </div>
            </h5>
            <div class="detect">
              <i class="iconfont icon-icon-spring-pink"></i
              >云烛正在保障您的支付安全...
            </div>

            <!-- 支付信息表单 -->
            <form>
              <!-- 输入信用卡号 -->
              <div class="mb-3">
                <label for="creditCard" class="form-label">支付账号</label>
                <input
                  type="text"
                  class="form-control"
                  id="creditCard"
                  :value="order.userId"
                  disabled
                />
              </div>

              <!-- 输入过期日期 -->
              <div class="row">
                <div class="col-md-10 mb-3">
                  <label for="expirationDate" class="form-label"
                    >支付密码</label
                  >
                  <input
                    type="password"
                    class="form-control pass-in pass"
                    id="expirationDate"
                  />
                  <div class="tip">请输入你的支付密码</div>
                </div>
                <div class="col-md-2 forget">忘记密码？</div>
              </div>

              <!-- 提交按钮 -->
              <button
                @click.prevent="payChoose"
                :disabled="order.orderStatus == -2"
                class="btn btn-secondary pay"
              >
                支付
              </button>
              <button
                type="button"
                class="btn btn-secondary cancel"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                取消
              </button>
              <div
                class="modal text-black"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        暂时放弃
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      您确定放弃此次和云烛小屋邂逅的机会吗？
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        考虑考虑
                      </button>
                      <button
                        type="button"
                        @click="giveUp"
                        class="btn btn-secondary give-up"
                      >
                        放弃
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import $ from 'jquery'
import { userAllowanceService, userPayService } from '../../api/user'
import { useTimeStore } from '../../stores/modules/time'
import { useUserStore } from '../../stores/modules/user'
const timeStore = useTimeStore()
const userStore = useUserStore()
onUnmounted(() => {
  $('.modal-backdrop').remove()
  $('body').removeClass('modal-open')

  for (const timerElement of intervalId.value) {
    clearTimeout(timerElement)
  }
  intervalId.value = []
})

const router = useRouter()
const intervalId = ref([])
const payChoose = async () => {
  console.log(order)
  order.password = $('.pass').eq(0).val()
  const res = await userPayService(order)
  if (res.data.message == 'success') {
    ElMessage.success('支付成功')
    router.push('/house/manage')
  } else if (res.data.message == 'time') {
    ElMessage.warning('该订单已失效，请重新下单吧')
  } else if (res.data.message == 'error') {
    ElMessage.error('密码错误，请重新输入')
  } else if (res.data.message == 'fail') {
    ElMessage.warning('您的余额不足哦')
  }
}
const giveUp = () => {
  router.push('/house/manage')
}
function padLeft(number) {
  return number < 10 ? '0' + number : number
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

const order = timeStore.order
const getCountDown = () => {
  const date1 = new Date(getTime())
  const date2 = new Date(order.orderCreateTime)
  // 计算时间间隔（单位：毫秒）
  var timeDiff = date1.getTime() - date2.getTime()
  // 如果时间间隔超过15分钟，将订单状态设置为已过期
  if (timeDiff > 15 * 60 * 1000) {
    ElMessage.error('该订单已失效')
    order.orderCountDown = '订单已失效'
    order.orderStatus = '-2'
    //禁用
  } else {
    // 否则，计算倒计时并更新订单状态
    var secondsDiff = Math.floor((15 * 60 * 1000 - timeDiff) / 1000)
    var minutes = Math.floor(secondsDiff / 60)
    var seconds = secondsDiff % 60
    console.log(secondsDiff + '这是时间间隔')
    // 更新订单状态和倒计时信息
    order.orderCountDown = padLeft(minutes) + ':' + padLeft(seconds)
    // 启动倒计时定时器
    intervalId.value.push(
      setInterval(function () {
        secondsDiff--
        if (secondsDiff <= 0) {
          clearInterval(intervalId.value.pop()) // 清除定时器
          nextTick(() => {
            ElMessage.error('该订单已失效')
          })

          order.orderCountdown = '订单已失效'
          order.orderStatus = '-2'
        } else {
          minutes = Math.floor(secondsDiff / 60)
          seconds = secondsDiff % 60
          order.orderCountDown = padLeft(minutes) + ':' + padLeft(seconds)
        }
      }, 1000)
    )
  }
}
const money = ref()
getCountDown()
const getRemainMoney = async () => {
  const res = await userAllowanceService(userStore.userId)
  money.value = res.data.data
}
getRemainMoney()
</script>

<style scoped>
/* 自定义样式，可以根据需求进一步定制 */
.des-frame {
  color: rgb(145, 149, 152);
  font-size: 0.8rem;
  margin-top: 2rem;
}
.card {
  margin-top: 1rem;
  box-shadow: rgb(130, 127, 127) 0.1rem 0.2rem 1rem 0.2rem;
}
.card-title {
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  border: white solid 1px;
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin-bottom: 1.2rem;
}
.price {
  color: bisque;
  font-weight: 500;
  font-size: 1.1rem;
}
.detect {
  font-size: 0.9rem;
  color: green;
  margin-bottom: 1rem;
}
body {
  background-color: #fcfcfc36;
  color: #fff;
}
.pass-in {
  margin-bottom: 0.5rem;
}
.tip {
  font-size: 0.7rem;
  color: rgba(190, 200, 209, 0.596);
}
.forget {
  line-height: 6.3rem;
  color: rgba(114, 164, 164, 0.562);
}
.pay {
  width: 6rem;
  background-color: rgba(0, 239, 0, 0.514);
  margin-right: 1rem;
}
.cancel {
  width: 6rem;
}
.give-up {
  background-color: red;
}
</style>
