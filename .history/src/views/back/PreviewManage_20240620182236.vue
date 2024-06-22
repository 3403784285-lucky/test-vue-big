<template>
  <div class="container">
    <div style="margin-top: 20px;margin-bottom: 20px;">
    <el-radio-group v-model="radio2">
      <el-radio-button label="未支付" value="New York" />
      <el-radio-button label="Washington" value="Washington" />
      <el-radio-button label="Los Angeles" value="Los Angeles" />
      <el-radio-button label="Chicago" value="Chicago" />
    </el-radio-group>
  </div>
    <div class="card manage-frame">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
        </div>

        <div class="split"></div>

        <div class="row" v-for="preview in previews" :key="preview.orderSkuId">
          <div class="img-frame col-md-1">
            <img class="img-fluid" :src="preview.housePic" alt="用户头像" />
          </div>
          <div class="name col-md-2">小星星{{ preview.userId }}</div>
          <div class="col-md-6 des-manage">
            {{ preview.description }}
          </div>
          <div class="col-md-1">
            <button
              type="button"
              class="down rounded-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="getValue(preview)"
            >
              {{ changeName(preview.orderStatus) }}
            </button>
          </div>
          <div class="col-md-1">
            <button type="button" class="agree rounded-2">指派</button>
          </div>
          <div class="split"></div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example" class="test">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            @click="prePage"
            >上一页</a
          >
        </li>

        <li class="page-item">
          <a class="page-link" href="#">{{ page }}</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#" @click="nextPage">下一页</a>
        </li>
      </ul>
    </nav>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog about-return">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">提示</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ changeContent(temp) }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary cancel"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn bg-dark text-white"
            @click="dealWithPreview(temp)"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTimeStore } from '@/stores/index'
import $ from 'jquery'

import {
  previewManageService,
  previewReturnService,
  houseCertainService
} from '@/api/house'


const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
const router = useRouter()
let previews = ref()
let timeStore = useTimeStore()
const temp = ref({
  orderSkuId: null,
  userId: null,
  orderSpuId: null,
  orderCreateTime: null,
  orderStatus: null,
  orderBadTime: null,
  orderEndTime: null,
  description: null,
  skuId: null,
  totalPrice: null
})
const page = ref(1)
const totalPage = ref()

const getValue = (preview) => {
  temp.value = preview
  console.log('点击了')
}

const dealWithPreview = (preview) => {
  if (preview.orderStatus == -2) {
    agreeReturn(preview)
    preview.orderStatus = '-3'
    $('.cancel')[0].click()
  } else {
    seeHouse(preview)
  }
}

const init = async () => {
  const res = await previewManageService(page.value)
  console.log(res.data.data)
  previews.value = res.data.data.records
  totalPage.value = res.data.data.pages
}
const changeName = (status) => {
  if (status == -2) {
    return '退款'
  } else {
    return '查看'
  }
}
const changeContent = (preview) => {
  console.log(preview.orderStatus)
  if (preview.orderStatus == -2) {
    return '您确定要同意该订单的退款吗'
  } else {
    return '您即将跳转到房屋详情页面，要继续操作吗？'
  }
}
onUnmounted(() => {
  $('.modal-backdrop').remove()
  $('body').removeClass('modal-open')
})
init()
//上一页
const prePage = () => {
  console.log('上一页')
  if (page.value != 1) {
    page.value--
    init()
  }
}
//同意退款
const agreeReturn = async (preview) => {
  await previewReturnService(preview)

  ElMessage.success('退款成功')
}
const seeHouse = async (preview) => {
  const res = await houseCertainService(preview)
  console.log(res.data)
  timeStore.house = res.data.data
  router.push('/house/channel')
}

//下一页
const nextPage = () => {
  console.log('下一页')
  if (page.value != totalPage.value) {
    page.value++
    init()
  }
}
</script>
<style scoped>
.manage-frame {
  padding: 2rem;
}
.test {
  margin-top: 1rem;
  font-family: 'YouYuan';
}
.page-link {
  color: black;
}
.name {
  font-size: 0.9rem;
  font-family: 'YouYuan';
}
.freeze {
  width: 4rem;
  height: 2rem;
  font-size: 0.7rem;
  background-color: rgb(201, 105, 105);
  color: white;
  border: 0;
  outline: none;
}
.down {
  width: 3rem;
  height: 1.5rem;
  font-size: 0.7rem;
  background-color: rgb(201, 105, 105);
  color: white;
  border: 0;
  outline: none;
}

.agree {
  width: 3rem;
  height: 1.5rem;
  font-size: 0.7rem;
  background-color: rgb(73, 211, 156);
  color: white;
  border: 0;
  outline: none;
}
.split {
  height: 0.02rem;
  background-color: rgb(202, 202, 197);
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.des-manage {
  font-size: 0.7rem;
  color: rgb(150, 155, 160);
}
</style>
