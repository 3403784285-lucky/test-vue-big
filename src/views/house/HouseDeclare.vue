<template>
  <div class="divider"></div>
  <div class="container header-pro">
    <div class="row justify-content-center name-pro">发布出售房源</div>
    <div class="row justify-content-center des-pro">独拥城中央，一墅揽天下</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="container input-frame first">
        <form :model="houseModel">
          <div class="row">
            <div class="col-md-1 label-input">
              <label for="city">所在城市</label>
            </div>
            <div class="col-md-2">
              <input
                type="text"
                id="city"
                class="form-control"
                v-model="houseModel.city"
              />
            </div>
          </div>
          <div class="row"><div class="split"></div></div>
          <div class="row">
            <div class="col-md-1 label-input">
              <label for="field">小区</label>
            </div>
            <div class="col-md-2">
              <input
                type="text"
                id="field"
                class="form-control"
                v-model="houseModel.field"
              />
            </div>
          </div>
          <div class="row"><div class="split"></div></div>
          <div class="row">
            <div class="col-md-1 label-input">
              <label for="position">房屋地址</label>
            </div>
            <div class="col-md-2">
              <input
                type="text"
                id="position"
                class="form-control"
                v-model="houseModel.position"
              />
            </div>
          </div>
          <div class="row"><div class="split"></div></div>
          <div class="row">
            <div class="col-md-1 label-input">
              <label for="expPrice">期望售价</label>
            </div>
            <div class="col-md-4">
              <input
                type="text"
                id="expPrice"
                class="form-control"
                v-model="houseModel.expPrice"
                placeholder="此处只能填数字，否则无效(单位：万元)"
              />
            </div>
          </div>
          <div class="row"><div class="split"></div></div>
          <div class="row">
            <div class="col-md-1 label-input">
              <label for="nickname">称呼</label>
            </div>
            <div class="col-md-2">
              <input
                type="text"
                id="nickname"
                class="form-control"
                v-model="houseModel.nickname"
              />
            </div>
          </div>
          <div class="row"><div class="split"></div></div>
          <div class="row">
            <div class="col-md-1 label-input">
              <label for="email">QQ邮箱</label>
            </div>
            <div class="col-md-3">
              <input
                type="text"
                id="email"
                class="form-control"
                v-model="houseModel.email"
              />
            </div>
          </div>
          <div class="row"><div class="split"></div></div>
          <div class="row">
            <div class="col-md-1 label-input">
              <label for="confirmPassword">验证码</label>
            </div>
            <div class="col-md-2">
              <input
                type="text"
                id="conformPassword"
                class="form-control"
                v-model="houseModel.confirmPassword"
              />
            </div>
            <div class="col-md-2">
              <button
                class="btn bg-light confirmPswd"
                :disabled="flagDis"
                @click.prevent="getConfirm"
              >
                {{ getButtonName() }}
              </button>
            </div>
          </div>
          <div class="row"><div class="split"></div></div>

          <div class="row">
            <div class="introduction">
              您点击“确认发布”后，若您的房源通过初步审核，将会由链家经纪人和您取得联系，并对您的房源进行再次核实，核实无误后将与您建立服务关系。云烛平台仅提供信息展示和网络技术服务。
            </div>
          </div>
          <div class="button-frame">
            <button
              type="button"
              class="btn btn-light declare"
              @click.prevent="declareHouse"
            >
              确认发布
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container sold-fluid">
    <div class="row">
      <div class="col-md-5"></div>
      <div class="col-md-2 des-sold">买房全流程</div>
      <div class="col-md-5"></div>
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 fluid-des">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">发布房源</li>
            <li class="breadcrumb-item">核对房源</li>
            <li class="breadcrumb-item active" aria-current="page">在线销售</li>
            <li class="breadcrumb-item active" aria-current="page">签约出售</li>
          </ol>
        </nav>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore, useCountStore } from '@/stores/index'
import { userConfirmService } from '@/api/user'
import { houseDeclareService } from '@/api/house'
const userStore = useUserStore()
const countStore = useCountStore()
let timer
const flagDis = ref(false)
const getButtonName = () => {
  if (flagDis.value == false) {
    return '获取验证码'
  } else {
    return countStore.count + 's'
  }
}
const getConfirm = async () => {
  if (!timer) {
    flagDis.value = true
    timer = setInterval(() => {
      countStore.count--
      if (countStore.count <= 0) {
        countStore.count = 60
        clearInterval(timer)
        timer = null
        flagDis.value = false
      }
    }, 1000)
  }
  await userConfirmService(houseModel.value.email)
  ElMessage.success('验证码以发送，请注意查收，验证码有效时间为5分钟')
}

onUnmounted(() => {
  clearInterval(timer)
})
const router = useRouter()
const houseModel = ref({
  city: '',
  field: '',
  position: '',
  expPrice: null,
  nickname: '',
  email: userStore.email,
  confirmPassword: '',
  userId: userStore.userId
})
const lightFlag = ref(0)
const declareHouse = async () => {
  for (const key in houseModel.value) {
    lightFlag.value = 0
    if (Object.prototype.hasOwnProperty.call(houseModel.value, key)) {
      // 检查属性的值是否为空或者为空字符串
      if (!houseModel.value[key] || houseModel.value[key] == '') {
        // 属性值为空或者为空字符串，执行相应的提示
        ElMessage.warning(key + '不能为空')
        houseModel.value[key]
        lightFlag.value = 1
        break
        //有大问题
        // 这里可以添加你的提示逻辑，例如显示错误信息、弹窗等
      }
    }
  }
  if (lightFlag.value == 0) {
    const res = await houseDeclareService(houseModel.value)
    console.log(res.data)
    if (res.data.message == 'confirmError') {
      ElMessage.error('验证码错误')
    } else {
      ElMessage.success('发布成功，请耐心等待小云烛的审核...')
      router.push('/')
    }
  }
}
</script>
<style scoped>
.form-control {
  font-size: 0.8rem;
}
.label-input {
  line-height: 2rem;
}
.confirmPswd {
  font-size: 0.6rem;
  line-height: 1.5rem;
}
.header-pro {
  margin-bottom: 2rem;
}
.divider {
  height: 6rem;
}

.name-pro {
  font-size: 1.2rem;
  font-family: 'YouYuan';
  font-weight: 600;
}
.des-pro {
  color: rgb(153, 146, 146);
  font-size: 0.8rem;
}
.split {
  height: 0.02rem;
  background-color: rgb(202, 202, 197);
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.label-input,
.change-city {
  font-size: 0.7rem;
}
.input-frame {
  padding: 1rem;
}
.introduction {
  color: rgb(165, 163, 159);
  font-size: 0.7rem;
  margin-bottom: 1rem;
}
.button-frame {
  display: flex;
  justify-content: end;
}
.declare {
  padding: 0.5rem;
  width: 10rem;
}
.des-sold {
  color: rgb(166, 173, 173);
  font-size: 0.7rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}
.sold-fluid {
  margin-top: 2rem;
  font-family: 'YouYuan';
}
</style>

<script setup></script>
