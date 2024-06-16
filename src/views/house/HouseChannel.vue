<template>
  <div class="interval"></div>

  <div class="container">
    <div class="house-name-detail">
      <div class="row justify-content-between name-frame">
        <div class="col-md-10 name-title">
          {{ house.houseName }}
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-light focus" @click="focus">
            关注房源
          </button>
        </div>
      </div>
      <div class="card goods">
        <div class="container">
          <div class="row house-show">
            <div class="col-md-7 house-show-col">
              <div
                id="carouselExampleDark"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <!-- <ol class="carousel-indicators">
                  <li
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                  ></li>
                </ol> -->
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img
                      :src="house.housePic"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://vrlab-image4.ljcdn.com/release/screenshot/auto3d-ZDadddWtU8s5CDOttmg_3G/e18b738efef68a362675367a8e3dedb6/1697870090_0/pc0_cLMtOlhGZ.jpg?imageMogr2/quality/70/thumbnail/1024x"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://vrlab-image4.ljcdn.com/release/screenshot/auto3d-ZDadddWtU8s5CDOttmg_3G/e18b738efef68a362675367a8e3dedb6/1697870090_0/pc0_cLMtOlhGZ.jpg?imageMogr2/quality/70/thumbnail/1024x"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleDark"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleDark"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <div class="interval"></div>
            <div class="col-md-4">
              <div class="house-price">{{ house.housePrice }}万</div>
              <div class="container">
                <div class="house-description row border-end-0">
                  <div class="type-house second-des col-md-4">
                    {{ house.unitType }}室1厅
                  </div>
                  <div class="house-direction second-des col-md-4">
                    {{ house.houseOnto }}
                  </div>
                  <div class="house-scale second-des col-md-4">
                    {{ house.houseSize }}平米
                  </div>
                </div>
                <div class="house-divider"></div>
              </div>
              <div class="container">
                <div class="house-detail">
                  <div class="house-where row">
                    <div class="house-where-title detail title col-md-3">
                      所在区域:
                    </div>
                    <div class="house-where-content detail content col-md-9">
                      {{ house.housePosition }}
                    </div>
                  </div>
                  <div class="house-risk row">
                    <div class="house-risk-title detail title col-md-3">
                      风险提示:
                    </div>
                    <a class="house-risk-content detail content col-md-9"
                      >云烛用户风险提示</a
                    >
                  </div>
                  <div class="house-type row">
                    <div class="house-risk-title detail title col-md-3">
                      建筑类型:
                    </div>
                    <div
                      class="house-risk-content detail content col-md-9 justify-content-start"
                    >
                      商品房
                    </div>
                  </div>
                  <div class="house-do row">
                    <div class="house-risk-title detail title col-md-3">
                      房屋用途:
                    </div>
                    <div
                      class="house-risk-content detail content col-md-9 justify-content-start"
                    >
                      {{ house.houseType }}
                    </div>
                  </div>
                  <div class="row tag">
                    <div class="col-md-3">
                      <div class="icon rounded-1">必看好房</div>
                    </div>
                    <div class="col-md-9 lag rounded-1">
                      云烛如星星,可以照亮你哦
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        type="button"
                        class="btn btn-dark preview"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        @click="clickPreview"
                      >
                        预约带看
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                预约带看
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="container">
                                <div class="row preview-frame">
                                  <input
                                    type="radio"
                                    class="btn-check testId clickTest"
                                    name="options-outlined"
                                    id="btn-check-2-outlined1"
                                    autocomplete="off"
                                    :disabled="isDisabled1('option1Two')"
                                    v-model="selectedOption1"
                                    @click="clickOne"
                                    :value="time[0].id"
                                  />
                                  <label
                                    class="btn btn-outline-secondary"
                                    for="btn-check-2-outlined1"
                                    >{{ time[0].houseTimeType }}</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check testId clickTest"
                                    name="options-outlined"
                                    id="btn-check-2-outlined2"
                                    v-model="selectedOption1"
                                    autocomplete="off"
                                    :disabled="isDisabled1('option1Tree')"
                                    @click="clickOne"
                                    :value="time[1].id"
                                  />
                                  <label
                                    class="btn btn-outline-secondary"
                                    for="btn-check-2-outlined2"
                                    >{{ time[1].houseTimeType }}</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check testId clickTest"
                                    name="options-outlined"
                                    id="btn-check-2-outlined3"
                                    v-model="selectedOption1"
                                    autocomplete="off"
                                    :disabled="isDisabled1('option1One')"
                                    @click="clickOne"
                                    :value="time[2].id"
                                  />
                                  <label
                                    class="btn btn-outline-secondary"
                                    for="btn-check-2-outlined3"
                                    >{{ time[2].houseTimeType }}</label
                                  >
                                </div>
                                <div class="pre-opt row">
                                  <div class="col-md-3">
                                    <input
                                      type="radio"
                                      class="btn-check clickTest"
                                      name="options"
                                      v-model="selectedOption2"
                                      id="option1"
                                      autocomplete="off"
                                      :disabled="isDisabled2('option2One')"
                                      :value="day[0].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option1"
                                      >{{ day[0].houseOrderTime }}天后</label
                                    >
                                  </div>
                                  <div class="col-md-3">
                                    <input
                                      type="radio"
                                      class="btn-check clickTest"
                                      name="options"
                                      v-model="selectedOption2"
                                      id="option2"
                                      :disabled="isDisabled2('option2Two')"
                                      autocomplete="off"
                                      :value="day[1].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option2"
                                      >{{ day[1].houseOrderTime }}天后</label
                                    >
                                  </div>
                                  <div class="col-md-3">
                                    <input
                                      type="radio"
                                      class="btn-check clickTest"
                                      name="options"
                                      id="option3"
                                      v-model="selectedOption2"
                                      autocomplete="off"
                                      :disabled="isDisabled2('option2Three')"
                                      :value="day[2].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option3"
                                      >{{ day[2].houseOrderTime }}天后</label
                                    >
                                  </div>
                                  <div class="col-md-3">
                                    <input
                                      type="radio"
                                      class="btn-check clickTest"
                                      name="options"
                                      v-model="selectedOption2"
                                      id="option4"
                                      :disabled="isDisabled2('option2Four')"
                                      autocomplete="off"
                                      :value="day[3].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option4"
                                      >{{ day[3].houseOrderTime }}天后</label
                                    >
                                  </div>
                                </div>
                                <div class="row preview-price">
                                  价格:
                                  {{ order.totalPrice }}元
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                取消
                              </button>
                              <button
                                type="button"
                                class="btn btn-dark"
                                @click="previewOrder"
                              >
                                预约
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 评论 -->
  <div class="container comment-frame">
    <div class="comment-title">评论</div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control inputCo"
        placeholder="请发布有爱评论哦"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        ref="inputComment"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click="declareComment"
        >
          评论
        </button>
      </div>
    </div>
    <div class="card comment-content-copy">
      <div
        class="container shadow-sm rounded-2"
        v-for="(commentt, index) in nestedArray"
        :key="commentt[0].id"
      >
        <div class="row single-comment-copy" @click="clickComment(commentt)">
          >
          <div class="col-md-2 text-center align-self-center">
            <div class="container">
              <div class="row">
                <div class="col-md-6 nameCommenter">
                  <img
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XnNffgb1NFyj1bxHEXyzsQAAAA?w=210&h=210&c=7&r=0&o=5&dpr=2&pid=1.7"
                    alt="头像"
                    class="commenter rounded-1"
                  />
                </div>
                <div
                  class="col-md-6 align-self-center text-start nameCommenter"
                >
                  <span class="declarer">{{ commentt[0].nickname }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-7 align-self-center comment-content-self"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalReply"
            @click="transferValue(commentt[0])"
          >
            <div>{{ commentt[0].content }}</div>
          </div>
          <div class="col-md-2 align-self-end text-end time-comment-copy">
            {{ commentt[0].createTime }} &nbsp;&nbsp;<i
              class="iconfont icon-huifu"
              @click="changeIndicate(index)"
            ></i>
          </div>
        </div>
        <div
          class="row border reply-comment-copy"
          :style="{ display: indicate[index] ? 'block' : 'none' }"
        >
          <div
            class="container"
            v-for="comment in commentt.slice(1, commentt.length)"
            :key="comment.id"
          >
            <div class="row reply-small" @click="clickComment(comment)">
              <div class="col-md-3 text-center align-self-center">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4 nameCommenter">
                      <img
                        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XnNffgb1NFyj1bxHEXyzsQAAAA?w=210&h=210&c=7&r=0&o=5&dpr=2&pid=1.7"
                        alt="头像"
                        class="commenter rounded-1"
                      />
                    </div>
                    <div
                      class="col-md-3 align-self-center text-start nameCommenter align-self-center"
                    >
                      <span class="declarer">{{ comment.nickname }} </span>
                    </div>
                    <div
                      class="col-md-2 nameCommenter declarer align-self-center"
                    >
                      回复
                    </div>
                    <div
                      class="col-md-3 nameCommenter declarer align-self-center"
                    >
                      <i class="receiver">{{ comment.receiverName }}</i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 align-self-center comment-content-self"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalReply"
                @click="transferValue(comment)"
              >
                <div>{{ comment.content }}</div>
              </div>
              <div class="col-md-2 align-self-end text-end time-comment-copy">
                {{ comment.createTime }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModalReply"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">回复评论</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <textarea
            class="form-control"
            aria-label="With textarea"
            ref="areaReply"
          ></textarea>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary notPut"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn bg-dark text-light"
            @click="replyComment(temp)"
          >
            回复
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useTimeStore, useUserStore } from '@/stores/index'
import {
  previewSearchService,
  insertPreviewService,
  judgeOrderService,
  houseCommentService,
  houseDeclareCommentService,
  houseManageTimeService,
  houseOrderTimeService
} from '@/api/house'
import { onUnmounted } from 'vue'
onUnmounted(() => {
  $('.modal-backdrop').remove()
  $('body').removeClass('modal-open')
})
import {
  userFocusService,
  userSearchFocusService,
  userFocusedService
  // userCommentService
} from '@/api/user'
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted } from 'vue'
import $ from 'jquery'
import cloneDeep from 'lodash/cloneDeep'
const timeStore = useTimeStore()
const userStore = useUserStore()
const router = useRouter()
const selectedOption1 = ref('')
const desc1 = ref('')
const comments = ref()
const areaReply = ref()
const transferValue = (comment) => {
  const clonedObject = cloneDeep(comment)
  temp.value = clonedObject
}
const indicate = ref([])
const clickComment = (comment) => {
  if (Array.isArray(comment)) {
    copy.value = comment[0]
    areaReply.value.placeholder = '回复' + comment[0].nickname
  } else {
    copy.value = comment
    areaReply.value.placeholder = '回复' + comment.nickname
  }
}
const changeIndicate = (index) => {
  if (indicate.value[index] == false) {
    indicate.value[index] = true
  } else {
    indicate.value[index] = false
  }
}
const nestedArray = ref()
const getCommentWay = (comments) => {
  nestedArray.value = comments.reduce((accumulator, currentObject) => {
    const parentId = currentObject.parentId

    if (parentId == '') {
      // Parent object with parentId as empty string
      accumulator.push([currentObject])
    } else {
      // Find the parent array based on parentId

      const parentArray = accumulator.find(
        (arr) => arr[0].commentId == parentId
      )
      parentArray.push(currentObject)
    }

    return accumulator
  }, [])

  console.log(nestedArray.value)
}

const desc2 = ref('')
const inputComment = ref()
const selectedOption2 = ref('')
let disabledOptions1 = reactive({
  option1One: false,
  option1Two: false,
  option1Three: false
})
let disabledOptions2 = reactive({
  option2One: false,
  option2Two: false,
  option2Three: false,
  option2Four: false
})
const copy = ref({
  commentId: null,
  userId: null,
  parentId: '',
  content: null,
  createTime: null,
  houseId: null,
  nickname: null,
  receiverId: null
})

const declareComment = async () => {
  temp.value.userId = userStore.userId
  temp.value.parentId = ''
  temp.value.createTime = getTime()
  temp.value.houseId = house.value.skuId
  temp.value.content = inputComment.value.value
  temp.value.receiverId = 0
  const res = await houseDeclareCommentService(temp.value)
  temp.value = res.data.data
  nestedArray.value.push([temp.value])
  inputComment.value.value = ''
  ElMessage.success('评论发布成功')
}
const replyComment = async (comment) => {
  temp.value.userId = userStore.userId
  if (comment.parentId == '') {
    console.log('它的父亲为零')
    temp.value.parentId = comment.commentId
  } else {
    temp.value.parentId = comment.parentId
  }
  temp.value.createTime = getTime()
  temp.value.houseId = house.value.skuId
  temp.value.content = areaReply.value.value
  temp.value.receiverId = comment.commentId
  const res = await houseDeclareCommentService(temp.value)
  temp.value = res.data.data
  if (comment.parentId != '') {
    console.log('这是打印-->' + comment.parentId)
    const parentArray = nestedArray.value.find(
      (arr) => arr[0].commentId == comment.parentId
    )
    console.log(parentArray)
    console.log(nestedArray.value)
    parentArray.push(temp.value)
  } else {
    console.log('为什么加入')
    nestedArray.value.push([temp.value])
  }
  console.log(temp.value)
  $('.notPut')[0].click()
  areaReply.value.value = ''

  ElMessage.success('评论回复成功')
}
const disabledOptions1Copy = reactive({
  option1One: false,
  option1Two: false,
  option1Three: false
})
const disabledOptions2Copy = reactive({
  option2One: false,
  option2Two: false,
  option2Three: false,
  option2Four: false
})

const isDisabled1 = (option) => {
  // Return the disabled status for the given option
  return disabledOptions1[option]
}
const isDisabled2 = (option) => {
  // Return the disabled status for the given option
  return disabledOptions2[option]
}
const temp = ref({
  commentId: null,
  userId: null,
  parentId: null,
  content: null,
  createTime: null,
  nickname: null,
  houseId: null,
  receiverId: null
})

const disabledValues1 = reactive({
  option1One: 1,
  option1Two: 2,
  option1Three: 3
})
const disabledValues2 = reactive({
  option2One: 1,
  option2Two: 2,
  option2Three: 3,
  option2Four: 4
})

const house = ref([])
house.value = timeStore.house
const previews = ref([])
const getAfterTime = () => {
  //1.获取当前日期
  var date = new Date()
  //2. 获取当前分钟
  var min = date.getMinutes()
  //3. 设置当前时间+15分钟：把当前分钟数+15后的值重新设置为date对象的分钟数
  date.setMinutes(min + 15)
  //4. 测试
  return date.toLocaleString()
}

const getAfterDate = () => {
  //1.获取当前日期
  let date = new Date()
  console.log('测试前' + timeLength.value)
  date.setDate(date.getDate() + parseInt(timeLength.value, 10))
  console.log(timeLength.value + '测试一下')

  //4. 测试
  console.log(timeLength.value)
  return date.toLocaleString()
}

function getDaysDifference(dateString1, dateString2) {
  // 将日期字符串转换为统一的格式（例如 ISO 格式）
  const formattedDate1 = dateString1.replace(/-/g, '/')
  const formattedDate2 = dateString2.replace(/-/g, '/')

  // 创建 Date 对象
  const date1 = new Date(formattedDate1)
  const date2 = new Date(formattedDate2)

  // 计算时间戳差异
  const timeDiff = Math.abs(date2.getTime() - date1.getTime())

  // 将时间差异转换为天数
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

  return daysDiff
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
const time = ref([])
const day = ref([])
const order = reactive({
  //主人id
  userId: userStore.userId,
  orderStatus: 0,
  orderSkuId: 0,
  //第一个选项选择时间长短
  orderSpuId: 0,
  orderCreateTime: getTime(),
  orderBadTime: getAfterTime(),
  orderEndTime: null,
  description: '',
  skuId: house.value.skuId,
  totalPrice: 0.1,
  orderCountDown: ''
  //第二个选项选择开始时间
})
const timeLength = ref(0)
let orderJudge
const clickPreview = async () => {
  const res = await judgeOrderService(order)
  orderJudge = res.data.data
  console.log(res.data)
}
const variable = ref(2)
const init = async () => {
  console.log(house.value.skuId)
  const bes = await houseManageTimeService(house.value.skuId)
  const ses = await houseOrderTimeService(house.value.skuId)
  time.value = bes.data.data
  day.value = ses.data.data
  console.log(
    JSON.stringify(bes.data.data) + '--->' + JSON.stringify(ses.data.data)
  )

  const res = await previewSearchService(house.value.skuId)
  const ase = await houseCommentService(house.value.skuId)
  comments.value = ase.data.data
  getCommentWay(comments.value)
  console.log(ase.data.data)
  for (const h of nestedArray.value) {
    for (let i = 1; i < h.length; i++) {
      const objectZ = h.find((obj) => obj.commentId == h[i].receiverId)
      console.log(objectZ + '--->' + h[i])
      h[i].receiverName = objectZ.nickname
    }
  }

  previews.value = res.data.data
  console.log(variable.value + '被点击的------------》')
  order.totalPrice = previews.value.find(
    (obj) => obj.orderSpuId == variable.value
  ).reservePrice
}
init()
const previewOrder = async () => {
  if (order.orderSpuId == 0 || timeLength.value == 0) {
    ElMessage.error('必选选项为空')
  } else {
    order.orderEndTime = getAfterDate()
    console.log(order)
    order.description =
      $('.name-title').text() + '预约时间:' + desc1.value + '-->' + desc2.value
    console.log(order.description)
    const res = await insertPreviewService(order)
    order.orderSkuId = res.data.data.orderSkuId
    timeStore.order = order
    console.log(res.data)
    router.push('/pay')
  }
}
const clickOne = (e) => {
  {
    variable.value = e.target.value
    order.totalPrice = previews.value.find(
      (obj) => obj.orderSpuId == variable.value
    ).reservePrice
    order.timeLength = e.target.value
    order.orderSpuId = e.target.value
    desc1.value = e.target.nextElementSibling.innerText
    console.log(desc1.value)
    Object.assign(disabledOptions2, disabledOptions2Copy)
    Object.assign(disabledOptions1, disabledOptions1Copy)
    for (const option of orderJudge) {
      //看到这里了
      // 判断某个属性是否等于某个值
      for (let [key, value] of Object.entries(disabledValues2)) {
        if (
          option.orderSpuId == order.orderSpuId &&
          getDaysDifference(getTime(), option.orderEndTime) == value
        ) {
          disabledOptions2[key] = true
          console.log(key + '被禁用了')

          // 获取对应值的单选框对象
        }
      }
    }
  }
}
const clickTwo = (e) => {
  {
    timeLength.value = e.target.value
    Object.assign(disabledOptions2, disabledOptions2Copy)
    Object.assign(disabledOptions1, disabledOptions1Copy)
    desc2.value = e.target.nextElementSibling.innerText
    console.log(desc2.value)

    for (const option of orderJudge) {
      for (let [key, value] of Object.entries(disabledValues1)) {
        if (
          getDaysDifference(getTime(), option.orderEndTime) ==
            timeLength.value &&
          option.orderSpuId == value
        ) {
          disabledOptions1[key] = true
          console.log(key + '被禁用了')

          // 获取对应值的单选框对象
        }
      }
    }
  }
}
onMounted(() => {
  initFocus()
})
const focus = (e) => {
  e = e || window.e
  if (e.currentTarget.getAttribute('class').includes('focused')) {
    e.currentTarget.classList.remove('focused')
    userFocusedService(userStore.userId, house.value.skuId)
    ElMessage.success('已取消关注')
    e.currentTarget.innerText = '关注房源'
  } else {
    userFocusService(userStore.userId, house.value.skuId)
    e.currentTarget.classList.add('focused')
    ElMessage.success('关注成功')
    e.currentTarget.innerText = '已关注房源'
  }
}
const initFocus = async () => {
  //查询对应的用户和房源的关系
  //查询对应的用户和房源的关
  const res = await userSearchFocusService(userStore.userId, house.value.skuId)
  console.log(res.data)
  if (res.data.message == 'success') {
    $('.focus')[0].classList.add('focused')
    $('.focus')[0].innerText = '已关注房源'
  } else {
    console.log('未关注')
  }
}
</script>
<style scoped>
#exampleModalLabel {
  font-family: 'YouYuan';
}
#carouselExampleDark {
  height: 60vh;
}
#carouselExampleDark .carousel-inner > .carousel-item > img {
  display: block;
  width: 100%;
  height: 60vh;
}
.receiver {
  color: rgba(184, 187, 189, 0.592);
}
.time-comment-copy {
  color: rgb(155, 161, 167);
  font-size: 0.8rem;
  padding: 0;
}

.comment-frame {
  font-family: 'YouYuan';
  font-size: 0.8rem;
}
.reply-small {
  margin: 0.4rem;
}
.nameCommenter {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0;
}
.reply-comment-copy {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.comment-content-copy {
  padding: 1rem;
}
.comment-content-self {
  padding: 1rem;
}
.declarer {
  font-size: 0.6rem;
}
.house-price {
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(176, 46, 46);
  margin-top: 2vh;
  margin-left: 1vw;
  margin-bottom: 2vh;
}
.single-comment-copy {
  padding: 0.5rem;
  margin-top: 0.2rem;
  height: 6rem;
}
.interval {
  height: 15vh;
}
.commenter {
  width: 3rem;
  height: 3rem;
}
.tag {
  font-size: 0.8rem;

  margin-bottom: 1.5rem;
}
.icon {
  background-color: rgb(201, 43, 43);
  color: rgb(255, 255, 255);
  padding: 0.1rem;
}

.lag {
  color: brown;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: aliceblue;
}
.house-detail {
  margin-top: 5vh;
}
.house-do {
  margin-bottom: 2vh;
}
.title {
  color: rgb(160, 164, 164);
  font-size: 0.8rem;
}
.content {
  font-size: 0.8rem;
}
.name-frame {
  margin-bottom: 8vh;
}
.house-show-col {
  padding: 0;
}
.detail {
  height: 4vh;
  margin-top: 1vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.name-title {
  width: 20rem;
  font-family: 'Times New Roman';
  font-weight: 600;
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 7vh;
}
.second-des {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 2vh;
}
.interval {
  width: 2vw;
}
.house-divider {
  width: 100%;
  height: 0.1vh;
  margin-bottom: 3vh;
  background-color: rgb(209, 208, 208);
}
.preview {
  width: 100%;
}
/* 评论块 */
.goods {
  margin-bottom: 3vh;
}
.comment-title {
  font-weight: 900;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
}
/* 弹出框 */
.btn-outline-secondary {
  font-size: 0.7rem;
}
.pre-opt {
  margin-top: 2rem;
}
.one {
  font-size: 0.7rem;
}
#button-addon2 {
  font-size: 1rem;
}
.preview-price {
  color: red;
  margin-top: 1rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  justify-content: end;
}
</style>
<script setup></script>
