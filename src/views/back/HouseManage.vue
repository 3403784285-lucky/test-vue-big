<template>
  <div class="container">
    <div class="card manage-frame">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
        </div>
        <div
          class="row"
          v-for="house in houses"
          :key="house.skuId"
          @click.capture="clickRow(house.skuId)"
        >
          <div class="split"></div>
          <div class="img-frame col-md-1">
            <img class="img-fluid" :src="house.housePic" alt="房子头像" />
          </div>
          <div class="name col-md-2 align-self-center">
            {{ house.houseName }}
          </div>
          <div class="col-md-5 empty"></div>
          <div class="col-md-1 align-self-center edit-copy">
            <button
              type="button"
              class="down rounded-2 edit"
              @click="() => debounceFuncDo(house)"
            >
              {{ changeName(house.houseStatus) }}
            </button>
          </div>

          <div class="col-md-1 align-self-center edit-copy">
            <button
              type="button"
              class="edit rounded-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalHouse"
              @click="tempIs(house)"
            >
              房屋
            </button>
          </div>
          <div class="col-md-1 edit-copy align-self-center">
            <button
              type="button"
              class="edit rounded-2 bg-dark text-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalTime"
              @click.capture="timeIs()"
            >
              时间
            </button>
          </div>
          <div class="col-md-1 edit-copy align-self-center">
            <button
              type="button"
              class="edit rounded-2 bg-success text-white"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalMoney"
              @click.capture="priceIs(house.skuId)"
            >
              价格
            </button>
          </div>
        </div>
        <div class="split"></div>
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
      id="exampleModalHouse"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">编辑房屋</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form :model="temp" id="uploadForm">
              <div class="container edit-frame">
                <div class="row">
                  <div class="col-md-6">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">房屋主人:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.houseOwner"
                            name="houseOwner"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">房屋大小:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.houseSize"
                            name="houseSize"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">房屋类型:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.houseType"
                            name="houseType"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">归属小区:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.spuId"
                            name="spuId"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">价格(万):</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.housePrice"
                            name="housePrice"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">所在地址:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.housePosition"
                            name="housePosition"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">房屋朝向:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.houseOnto"
                            name="houseOnto"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">房屋室厅:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.unitType"
                            name="unitType"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">所在城市:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.houseCity"
                            name="houseCity"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-10">
                          <label for="inp">房屋状态:</label>
                          <input
                            type="text"
                            id="inp"
                            v-model="temp.houseStatus"
                            name="houseStatus"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <img
                      v-if="selectedImage"
                      :src="selectedImage"
                      alt="房屋图片"
                      class="image"
                    />

                    <img
                      v-else
                      :src="temp.housePic"
                      alt="房屋图片"
                      class="image"
                    />
                    <input
                      type="file"
                      name="file"
                      id="fileBind"
                      ref="file"
                      style="display: none"
                      @change="handleFileChange"
                    />
                    <button
                      class="btn bg-light upload-image"
                      @click.prevent="openFileInput"
                    >
                      上传图片
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary notSave"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn bg-dark text-light"
              @click.prevent="editHouse()"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModalMoney"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">编辑预约价格</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form :model="price">
              <div class="container edit-frame">
                <div class="row justify-content-center tips border-bottom">
                  预约价格即为填写预约时分1,2,3分别对应的价格
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inp">预约价格1:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="price.priceOne"
                      name="houseOwner"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inp">预约价格2:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="price.priceTwo"
                      name="houseOwner"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inp">预约价格3:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="price.priceThree"
                      name="houseOwner"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary notSave"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn bg-dark text-light"
              @click.prevent="editPrice()"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModalTime"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">编辑预约时间</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container edit-frame">
              <form :model="timeS">
                <div class="row justify-content-center tips border-bottom">
                  预约时分即为中介带客户看的一天中的时间点（范围）
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inp">预约时分1:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="timeS.timeSmallOne"
                      name="houseOwner"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inp">预约时分2:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="timeS.timeSmallTwo"
                      name="houseOwner"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inp">预约时分3:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="timeS.timeSmallThree"
                      name="houseOwner"
                    />
                  </div>
                </div>
              </form>
              <form :model="timeB">
                <div class="row"></div>
                <div class="row justify-content-center tips border-bottom">
                  预约日期即为中介带客户看的从即日起距离带看日期的天数(以天为单位)
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inp">预约日期1:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="timeB.timeBigOne"
                      name="houseOwner"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inp">预约日期2:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="timeB.timeBigTwo"
                      name="houseOwner"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inp">预约日期3:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="timeB.timeBigThree"
                      name="houseOwner"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inp">预约日期4:</label>
                    <input
                      type="text"
                      id="inp"
                      v-model="timeB.timeBigFour"
                      name="houseOwner"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary notSave"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn bg-dark text-light"
              @click.prevent="editTime(tempSkuId)"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery'
import {
  houseManageService,
  houseTakeOffService,
  houseUploadService,
  houseSaveService,
  houseSaveNoFileService,
  houseMoneyEditService,
  houseBigTimeEditService,
  houseSmallTimeEditService,
  houseInitMoneySerVice,
  houseInitSmallTimeService,
  houseInitBigTimeService
} from '@/api/house'
import { ref } from 'vue'
import _ from 'lodash'
let houses = ref()
let ts = []
let tb = []
let ps
const tempSpuId = ref()
const timeOrisB = ref()
const timeOrisS = ref()
const moneyOris = ref()
const file = ref(null)
const page = ref(1)
const totalPage = ref()
const init = async () => {
  const res = await houseManageService(page.value)
  const tesS = await houseInitSmallTimeService()
  const tesB = await houseInitBigTimeService()
  const mes = await houseInitMoneySerVice()
  timeOrisS.value = tesS.data.data
  timeOrisB.value = tesB.data.data
  moneyOris.value = mes.data.data
  console.log(res.data.data)
  houses.value = res.data.data.records
  console.log(houses.value)
  console.log(moneyOris.value + '价格初始化')
  console.log(timeOrisB.value + '时间初始化小小')
  console.log(timeOrisS.value + '时间初始化大大')
  totalPage.value = res.data.data.pages
}
const changeName = (status) => {
  if (status == 0) {
    console.log('调用1')
    return '上架'
  } else {
    console.log('调用1')
    return '下架'
  }
}
let temp = ref({
  skuId: 0,
  spuId: 0,
  houseOwner: 0,
  houseSize: 0,
  houseName: '',
  houseType: '',
  houseStatus: '',
  housePic: '',
  housePosition: '',
  housePrice: 0,
  houseCity: '',
  houseOnto: '',
  unitType: 0
})
const price = ref({
  priceOne: 0,
  priceTwo: 0,
  priceThree: 0
})
const timeS = ref({
  timeSmallOne: '',
  timeSmallTwo: '',
  timeSmallThree: ''
})
const timeB = ref({
  timeBigOne: '',
  timeBigFour: '',
  timeBigTwo: '',
  timeBigThree: ''
})

const tempIs = (house) => {
  temp.value = house
  console.log(temp.value)
}
const clickRow = (skuId) => {
  tempSkuId.value = skuId
  console.log(skuId + '点击航')
  ts = timeOrisS.value.filter((obj) => obj.houseId == skuId)
  tb = timeOrisB.value.filter((obj) => obj.houseId == skuId)
  console.log(ts + '---->>>>>>>>>>>>>' + tb)
}
init()
//上一页
const prePage = () => {
  if (page.value != 1) {
    page.value--
    init()
  }
}
const tempSkuId = ref()
const timeIs = () => {
  timeB.value = {
    timeBigOne: '',
    timeBigFour: '',
    timeBigTwo: '',
    timeBigThree: ''
  }
  timeS.value = {
    timeSmallOne: '',
    timeSmallTwo: '',
    timeSmallThree: ''
  }
  console.log(
    tb +
      '这是tb----------------------------------------------------------------------------------'
  )

  if (tb.length > 0) {
    const typeArray = tb.map((obj) => obj.houseOrderTime)
    const [timeBigOne, timeBigFour, timeBigTwo, timeBigThree] = typeArray
    timeB.value = { timeBigOne, timeBigFour, timeBigTwo, timeBigThree }
  }
  if (ts.length > 0) {
    const typeArray = ts.map((obj) => obj.houseTimeType)
    const [timeSmallOne, timeSmallTwo, timeSmallThree] = typeArray
    timeS.value = { timeSmallOne, timeSmallTwo, timeSmallThree }
  }
  console.log(timeS.value, timeB.value)
}

const openFileInput = () => {
  $('#fileBind').click()
}
const selectedImage = ref()
const handleFileChange = (event) => {
  // 处理文件选择变化
  const file = event.target.files[0]

  if (file) {
    // 将选择的文件显示在 <img> 元素中
    const reader = new FileReader()
    reader.onload = () => {
      selectedImage.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}
//下一页
const nextPage = () => {
  if (page.value != totalPage.value) {
    page.value++
    init()
  }
}

//编辑房子
const editHouse = async () => {
  const formData = new FormData()

  if (!$('#fileBind')[0].files[0]) {
    console.log('文件为空')
    for (const key in temp.value) {
      if (Object.prototype.hasOwnProperty.call(temp.value, key)) {
        formData.append(key, temp.value[key])
      }
    }
    const response = await houseSaveNoFileService(formData)

    Object.assign(temp.value, response.data.data)

    ElMessage.success('上传成功')
  } else {
    formData.append('file', $('#fileBind')[0].files[0])
    for (const key in temp.value) {
      if (Object.prototype.hasOwnProperty.call(temp.value, key)) {
        formData.append(key, temp.value[key])
        console.log(key, temp.value[key])
      }
    }
    const response = await houseSaveService(formData)
    console.log(response.data)

    if (response.data.code == 200) {
      ElMessage.success('上传成功')

      Object.assign(temp.value, response.data.data)

      console.log(temp.value)
      console.log(houses.value + '结果不会失望')
      // 处理上传成功的逻辑
    } else {
      console.error('上传失败:', response.statusText)
      // 处理上传失败的逻辑
    }
  }

  // 使用 fetch 发送 POST 请求

  $('.notSave')[0].click()
}

//上架房子
const uploadHouse = async (id) => {
  await houseUploadService(id)
}
// 下架房子
const takeOffHouse = async (id) => {
  await houseTakeOffService(id)
}
const doHouse = (house) => {
  if (house.houseStatus == 0) {
    house.houseStatus = '1'
    uploadHouse(house.skuId)
    ElMessage.success('房屋上架成功')
  } else {
    house.houseStatus = '0'
    console.log(house)
    takeOffHouse(house.skuId)
    ElMessage.success('房屋下架成功')
  }
}
//点击价格事件
const priceIs = (skuId) => {
  price.value = {
    priceOne: 0,
    priceTwo: 0,
    priceThree: 0
  }

  ps = moneyOris.value.filter((obj) => obj.skuId == skuId)

  if (ps.length > 0) {
    const typeArray = ps.map((obj) => obj.reservePrice + '')
    const [priceOne, priceTwo, priceThree] = typeArray
    price.value = { priceOne, priceTwo, priceThree }
  }
  console.log(price.value)
}
//编辑价格
const editPrice = async () => {
  price.value.houseId = tempSkuId
  price.value.idCopy = ''
  for (const id of ps) {
    price.value.idCopy += ',' + id.orderGoodsId
  }
  console.log(price.value.idCopy)
  if (ts.length == 0) {
    ElMessage.warning('编辑价格之前请先去编辑对应的预约时间哦')
  } else {
    tempSpuId.value = ''
    for (const id of ts) {
      tempSpuId.value += ',' + id.id
    }
    price.value.spuId = tempSpuId.value

    await houseMoneyEditService(price.value)
    ElMessage.success('上传成功')
  }
}
const editTime = (skuId) => {
  timeS.value.houseId = skuId
  timeB.value.houseId = skuId
  console.log(ts + '这是ts')
  timeS.value.idCopy = ''
  for (const id of ts) {
    timeS.value.idCopy += ',' + id.id
  }
  timeB.value.idCopy = ''
  for (const id of tb) {
    timeB.value.idCopy += ',' + id.houseOrderId
  }

  editBigTime(new Map(Object.entries(timeB.value)))
  editSmallTime(new Map(Object.entries(timeS.value)))
}
//编辑时间
const editBigTime = async () => {
  await houseBigTimeEditService(timeB.value)
}

const editSmallTime = async () => {
  await houseSmallTimeEditService(timeS.value)
}

const debounceFuncDo = _.debounce((house) => doHouse(house), 500, {
  leading: true, // 延长开始后调用
  trailing: false // 延长结束前调用
})
</script>
<style scoped>
.image {
  width: 100%;
  height: 50%;
}

.upload-image {
  margin-top: 1rem;
  margin-left: 2.5rem;
}

.test {
  margin-top: 1rem;
  font-family: 'YouYuan';
}
.row {
  margin-top: 0.5rem;
}
.edit-frame {
  font-size: 0.7rem;
  font-family: 'YouYuan';
}
.page-link {
  color: black;
}
.manage-frame {
  padding: 1rem;
}
.name {
  font-size: 0.9rem;
  font-family: 'YouYuan';
}

.edit-copy {
  padding: 0;
  width: 4rem;
}
.empty {
  width: 30rem;
}
.tips {
  color: rgb(140, 148, 156);
}
.edit {
  width: 3rem;
  height: 1.5rem;
  font-size: 0.7rem;
  background-color: rgba(133, 148, 161, 0.363);
  color: rgb(5, 5, 5);
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
</style>
