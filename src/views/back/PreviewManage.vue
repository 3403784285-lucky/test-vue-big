<template>
  <div class="container">
    <div style="margin-top: 20px; margin-bottom: 20px; display: flex; justify-content: center;">
      <el-radio-group v-model="radio2" fill="black" @change="changeSelect">
        <el-radio-button label="未支付" value="0" />
        <el-radio-button label="已支付" value="1" />
        <el-radio-button label="已完成" value="2" />
        <el-radio-button label="退款中" value="-2" />
        <el-radio-button label="已退款" value="-3" />
        <el-radio-button label="已取消" value="-1" />
      </el-radio-group>
    </div>
    <div class="card manage-frame">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
        </div>
        <div class="split"></div>
        <el-tabs v-if="previews.length > 0">
          <div class="row" v-for="preview in previews" :key="preview.orderSkuId">
            <div class="img-frame col-md-1">
              <img class="img-fluid" :src="preview.housePic" alt="房屋图片" />
            </div>
            <div class="name col-md-2">{{ preview.orderSkuId }} {{ preview.nickname }} {{ preview.userId }}</div>
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
                {{ changeName(preview.status) }}
              </button>
            </div>
            <div class="col-md-1">
              <button type="button" class="agree rounded-2">指派</button>
            </div>
            <div class="split"></div>
          </div>
        </el-tabs>
        <el-empty v-else description="无数据" class="no-records">
        </el-empty>
      </div>
    </div>
    <nav aria-label="Page navigation example" class="test">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true" @click="prePage">上一页</a>
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
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog about-return">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">提示</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ changeContent(temp) }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary cancel" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn bg-dark text-white" @click="dealWithPreview(temp)">确定</button>
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
  clarifyOrderService,
  previewReturnService,
  houseCertainService
} from '@/api/house'
import { ElMessage } from 'element-plus'

const radio2 = ref(-1)
const router = useRouter()
let previews = ref([])
let timeStore = useTimeStore()
const temp = ref({
  orderSkuId: null,
  userId: null,
  orderCreateTime: null,
  status: null,
  description: null
})
const page = ref(1)
const totalPage = ref(1)

const changeSelect = async (e) => {
  page.value = 1
  previews.value = [];
  totalPage.value = 1;
  await fetchData(e)
}

const fetchData = async (status) => {
  try {
    const res = await clarifyOrderService(page.value, 5, status)
    console.log('Full response:', res)
    if (res.data && res.data.data) {
      const data = res.data.data;
      previews.value = data.records || [];
      totalPage.value = data.pages || 1;
      console.log('Data:', data)
      console.log('Previews:', previews.value)
      console.log('Total Pages:', totalPage.value)
    } else {
      console.error('Unexpected response structure:', res.data)
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}


const getValue =async (preview) => {
  temp.value = preview


  console.log('点击了')
}

const dealWithPreview = (preview) => {
  console.log('66666preview', preview)
  if (preview.status == -2) {
    agreeReturn(preview)
    /*preview.status = -3*/
    $('.cancel')[0].click()
  } else {
    seeHouse(preview)
  }
}

const init = async () => {
  await fetchData(-1)
}

const changeName = (status) => {
  if (status == -2) {
    return '退款'
  } else {
    return '查看'
  }
}

const changeContent = (preview) => {
  if (preview.status == -2) {
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

const prePage = async () => {
  if (page.value > 1) {
    page.value--
    await fetchData(radio2.value)
  }
}

const agreeReturn = async (preview) => {
  console.log('previewReturnService', preview)
  await previewReturnService(preview)
  ElMessage.success('退款成功')
}

const seeHouse = async (preview) => {
  console.log('houseCertainService', preview)
  const res = await houseCertainService(preview.skuId)
  console.log('张培灵',res.data)
  timeStore.house = res.data.data
  console.log(JSON.stringify(res)+"666")
  router.push('/house/channel')
}

const nextPage = async () => {
  if (page.value < totalPage.value) {
    page.value++
    await fetchData(radio2.value)
  }
}
</script>

<style scoped>
.manage-frame {
  padding: 2rem;

  height: 66.6vh;

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
