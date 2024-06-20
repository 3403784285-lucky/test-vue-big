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
                        @click="clickPreview(house.skuId)"
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
                                <p>{{message.value}}</p>
                                <div class="row preview-frame" v-if="flagJudge">
                                  <input
                                    type="radio"
                                    class="btn-check testId clickTest"
                                    name="options-outlined"
                                    id="btn-check-2-outlined1"
                                    autocomplete="off"
                                    :disabled="isDisabled1(time[0].id)"
                                    v-model="selectedOption1"
                                    @click="clickOne"
                                    :value="time[0].id"
                                  />
                                  <label
                                    class="btn btn-outline-secondary"
                                    for="btn-check-2-outlined1"
                                    :style="[
                                      {
                                        backgroundColor: isDisabled1(time[0].id)
                                          ? 'white'
                                          : ''
                                      },
                                      {
                                        color: isDisabled1(time[0].id)
                                          ? 'rgba(184, 187, 189, 0.592)'
                                          : 'black'
                                      }
                                    ]"
                                    >{{ time[0].houseTimeType }}</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check testId clickTest"
                                    name="options-outlined"
                                    id="btn-check-2-outlined2"
                                    v-model="selectedOption1"
                                    autocomplete="off"
                                    :disabled="isDisabled1(time[1].id)"
                                    @click="clickOne"
                                    :value="time[1].id"
                                  />
                                  <label
                                    class="btn btn-outline-secondary"
                                    for="btn-check-2-outlined2"
                                    :style="[
                                      {
                                        backgroundColor: isDisabled1(time[1].id)
                                          ? 'white'
                                          : ''
                                      },
                                      {
                                        color: isDisabled1(time[1].id)
                                          ? 'rgba(184, 187, 189, 0.592)'
                                          : 'black'
                                      }
                                    ]"
                                    >{{ time[1].houseTimeType }}</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check testId clickTest"
                                    name="options-outlined"
                                    id="btn-check-2-outlined3"
                                    v-model="selectedOption1"
                                    autocomplete="off"
                                    :disabled="isDisabled1(time[2].id)"
                                    @click="clickOne"
                                    :value="time[2].id"
                                  />
                                  <label
                                    class="btn btn-outline-secondary"
                                    for="btn-check-2-outlined3"
                                    :style="[
                                      {
                                        backgroundColor: isDisabled1(time[2].id)
                                          ? 'white'
                                          : ''
                                      },
                                      {
                                        color: isDisabled1(time[2].id)
                                          ? 'rgba(184, 187, 189, 0.592)'
                                          : 'black'
                                      }
                                    ]"
                                    >{{ time[2].houseTimeType }}</label
                                  >
                                </div>
                                <div class="pre-opt row" v-if="flagJudge">
                                  <div class="col-md-3">
                                    <input
                                      type="radio"
                                      class="btn-check clickTest"
                                      name="options"
                                      v-model="selectedOption2"
                                      id="option1"
                                      autocomplete="off"
                                      :disabled="
                                        isDisabled2(day[0].houseOrderId)
                                      "
                                      :value="day[0].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option1"
                                      :style="[
                                        {
                                          backgroundColor: isDisabled2(
                                            day[0].houseOrderId
                                          )
                                            ? '#FFFFFF'
                                            : '',
                                          color: isDisabled2(
                                            day[0].houseOrderId
                                          )
                                            ? 'rgba(184, 187, 189, 0.592)'
                                            : 'black'
                                        }
                                      ]"
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
                                      :disabled="
                                        isDisabled2(day[1].houseOrderId)
                                      "
                                      autocomplete="off"
                                      :value="day[1].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option2"
                                      :style="[
                                        {
                                          backgroundColor: isDisabled2(
                                            day[1].houseOrderId
                                          )
                                            ? 'white'
                                            : '',
                                          color: isDisabled2(
                                            isDisabled2(day[1].houseOrderId)
                                          )
                                            ? 'rgba(184, 187, 189, 0.592)'
                                            : 'black'
                                        }
                                      ]"
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
                                      :disabled="
                                        isDisabled2(day[2].houseOrderId)
                                      "
                                      :value="day[2].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option3"
                                      :style="[
                                        {
                                          backgroundColor: isDisabled2(
                                            day[2].houseOrderId
                                          )
                                            ? 'white'
                                            : ''
                                        },
                                        {
                                          color: isDisabled2(
                                            day[2].houseOrderId
                                          )
                                            ? 'rgba(184, 187, 189, 0.592)'
                                            : 'black'
                                        }
                                      ]"
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
                                      :disabled="
                                        isDisabled2(day[3].houseOrderId)
                                      "
                                      autocomplete="off"
                                      :value="day[3].houseOrderId"
                                      @click="clickTwo"
                                    />
                                    <label
                                      class="btn btn-light one"
                                      for="option4"
                                      :style="[
                                        {
                                          backgroundColor: isDisabled2(
                                            day[3].houseOrderId
                                          )
                                            ? 'white'
                                            : ''
                                        },
                                        {
                                          color: isDisabled2(
                                            day[3].houseOrderId
                                          )
                                            ? 'rgba(184, 187, 189, 0.592)'
                                            : 'black'
                                        }
                                      ]"
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
                                class="btn btn-secondary cancel-preview"
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
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary uniqueButton"
      data-bs-toggle="modal"
      data-bs-target="#uniqueModal"
    >
      Launch demo modal
    </button>
    <button
      type="button"
      id="yun"
      class="btn btn-primary uniqueButton"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="uniqueModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">温馨提示</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            检测到您有其他订单在同一时段可能会产生您的行程冲突，确定要继续吗
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="rePreview"
            >
              重新预约
            </button>
            <button
              type="button"
              class="btn bg-dark text-light"
              @click="continueDo"
            >
              继续操作
            </button>
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
                    :src="commentt[0].userPic"
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
                        :src="comment.userPic"
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
import { userAskOrderService } from '@/api/user'
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
import {ElMessage} from "element-plus";
const timeStore = useTimeStore()
const userStore = useUserStore()
const router = useRouter()
const selectedOption1 = ref(null)
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
const rePreview = () => {
  $('#yun').click()
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

const day = ref([])
const desc2 = ref('')
const inputComment = ref()
const selectedOption2 = ref(null)
const time = ref([])
const flagJudge = ref(false)
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

  console.log(
      '这是================================' + JSON.stringify(temp.value)
  )
  const res = await houseDeclareCommentService(temp.value)

  if (res.data.code === 200 && res.data.message === 'OK') {
    temp.value = res.data.data
    temp.value.nickname = userStore.name
    nestedArray.value.push([temp.value])
    inputComment.value.value = ''
    ElMessage.success('评论发布成功')
  } else {
    ElMessage.error('评论发布失败,请先购买哦亲')
  }
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
  console.log(
    '这是================================' + JSON.stringify(temp.value)
  )
  let hName = temp.value.nickname
  const res = await houseDeclareCommentService(temp.value)
  temp.value = res.data.data
  temp.value.nickname = userStore.name
  temp.value.receiverName = hName
  console.log(
    '这是================================' + JSON.stringify(temp.value)
  )
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
let startTime = ''
let endTime = ''
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

function extractTimeFromDate(dateString) {
  // 将日期时间字符串转换为Date对象
  const dateObject = new Date(dateString)

  // 从Date对象中提取小时和分钟，并用padStart确保它们是两位数
  const hours = dateObject.getHours().toString().padStart(2, '0')
  const minutes = dateObject.getMinutes().toString().padStart(2, '0')

  // 返回格式化后的时分字符串
  return `${hours}:${minutes}`
}

function compareTimeStringsMax(timeString1, timeString2) {
  // 从时分字符串中提取小时和分钟，并转换为数字
  const [hours1, minutes1] = timeString1.split(':').map(Number)
  const [hours2, minutes2] = timeString2.split(':').map(Number)
  // 比较小时和分钟，返回相应的结果字符串
  if (hours1 < hours2 || (hours1 === hours2 && minutes1 < minutes2)) {
    return timeString2
  } else {
    return timeString1
  }
}
function compareTimeStringsMin(timeString1, timeString2) {
  // 从时分字符串中提取小时和分钟，并转换为数字
  const [hours1, minutes1] = timeString1.split(':').map(Number)
  const [hours2, minutes2] = timeString2.split(':').map(Number)
  // 比较小时和分钟，返回相应的结果字符串
  if (hours1 < hours2 || (hours1 === hours2 && minutes1 < minutes2)) {
    return timeString1
  } else {
    return timeString2
  }
}
function compareTimeStrings(timeString1, timeString2) {
  // 从时分字符串中提取小时和分钟，并转换为数字
  const [hours1, minutes1] = timeString1.split(':').map(Number)
  const [hours2, minutes2] = timeString2.split(':').map(Number)
  // 比较小时和分钟，返回相应的结果字符串
  if (hours1 > hours2 || (hours1 === hours2 && minutes1 > minutes2)) {
    return 1
  } else {
    return -1
  }
}
const continueDo = async () => {
  const res = await insertPreviewService(order)
  order.orderSkuId = res.data.data.orderSkuId
  timeStore.order = order
  console.log(res.data)
  router.replace('/pay')
}
function getDaysDifference(dateString1, dateString2) {
  //感觉这里有问题
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
  orderOverTime: null,
  description: '',
  skuId: house.value.skuId,
  totalPrice: 0.1,
  orderCountDown: ''
  //第二个选项选择开始时间
})
const timeLength = ref(0)
let orderJudge

const clickPreview = async (skuId) => {
  const res = await judgeOrderService(skuId)
  orderJudge.value = res.data.data
  console.log(res.data)
}

const getTimeFromRange = (timeRange) => {
  const [startStr, endStr] = timeRange.split('~')
  startTime = startStr
  endTime = endStr
}
let disabledOptions1
let disabledOptions2
let disabledOptions1Copy
let disabledOptions2Copy

const variable = ref(1)
let message = reactive({
  value:''
})
const init = async () => {
  console.log(house.value.skuId)
  const bes = await houseManageTimeService(house.value.skuId)
  const ses = await houseOrderTimeService(house.value.skuId)
  time.value = bes.data.data
  day.value = ses.data.data
  console.log(
    JSON.stringify(bes.data.data) + '--->' + JSON.stringify(ses.data.data)
  )
  // 检查 time.value[0].id 是否存在
  if (time.value[0] && time.value[0].id) {
    console.log(time.value[0].id)
  } else {
    message.value = '该房源目前不支持预约哦！'
  }
  disabledOptions1 = reactive({
    [String(time.value[0].id)]: false,
    [String(time.value[1].id)]: false,
    [String(time.value[2].id)]: false
  })
  disabledOptions2 = reactive({
    [String(day.value[0].houseOrderId)]: false,
    [String(day.value[1].houseOrderId)]: false,
    [String(day.value[2].houseOrderId)]: false,
    [String(day.value[3].houseOrderId)]: false
  })
  disabledOptions1Copy = reactive({
    [String(time.value[0].id)]: false,
    [String(time.value[1].id)]: false,
    [String(time.value[2].id)]: false
  })
  disabledOptions2Copy = reactive({
    [String(day.value[0].houseOrderId)]: false,
    [String(day.value[1].houseOrderId)]: false,
    [String(day.value[2].houseOrderId)]: false,
    [String(day.value[3].houseOrderId)]: false
  })
  console.log(disabledOptions1['1'])

  const res = await previewSearchService(house.value.skuId)
  const ase = await houseCommentService(house.value.skuId)
  comments.value = ase.data.data
  console.log(comments.value)
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
  order.totalPrice = previews.value[0].reservePrice
  flagJudge.value = true
}
init()

const previewOrder = async () => {
  if (selectedOption1.value == null || selectedOption2.value == null) {
    ElMessage.error('必选选项为空')
  } else {
    order.orderEndTime = getAfterDate()
    console.log(order)
    let orderEndTime
    let orderStartTime
    order.description =
      $('.name-title').text() + '预约时间:' + desc1.value + '-->' + desc2.value
    console.log(order.description)
    console.log(variable.value + '___________________' + timeLength.value)
    const res1 = await userAskOrderService(userStore.userId)
    const opp = time.value.find((obj) => obj.id == variable.value)
    console.log(opp + '测试对象')
    getTimeFromRange(opp.houseTimeType)
    for (const option of res1.data.data) {
      orderStartTime = extractTimeFromDate(option.orderEndTime)
      orderEndTime = extractTimeFromDate(option.orderOverTime)
      if (
        compareTimeStrings(
          compareTimeStringsMin(orderStartTime, startTime),
          compareTimeStringsMax(orderEndTime, endTime)
        ) == -1 &&
        getDaysDifference(getTime(), option.orderEndTime) == timeLength.value
      ) {
        $('.cancel-preview')[0].click()
        $('.uniqueButton')[0].click()
        break
      }
    }
    $('.cancel-preview')[0].click()
    const res = await insertPreviewService(order)
    order.orderSkuId = res.data.data.orderSkuId
    timeStore.order = order
    console.log(res.data)
    router.replace('/pay')
  }
}

const clickOne = (e) => {
  {
    variable.value = e.target.value
    let ooj = time.value.find((obj) => obj.id == e.target.value)
    getTimeFromRange(ooj.houseTimeType)
    let orderStartTime
    let orderEndTime
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
      for (let dd of day.value) {
        orderStartTime = extractTimeFromDate(option.orderEndTime)
        orderEndTime = extractTimeFromDate(option.orderOverTime)
        console.log(
          getDaysDifference(getTime(), option.orderEndTime) +
            '====>' +
            compareTimeStringsMax(orderEndTime, endTime)
        )
        if (
          compareTimeStrings(
            compareTimeStringsMin(orderStartTime, startTime),
            compareTimeStringsMax(orderEndTime, endTime)
          ) == -1 &&
          getDaysDifference(getTime(), option.orderEndTime) == dd.houseOrderTime
        ) {
          disabledOptions2[dd.houseOrderId] = true
          if (selectedOption2.value == dd.houseOrderId) {
            selectedOption2.value = null
          }
          console.log(dd.houseOrderTime + '被禁用了')
          // 获取对应值的单选框对象
        }
      }
    }
  }
}
const clickTwo = (e) => {
  {
    timeLength.value = day.value.find(
      (obj) => obj.houseOrderId == e.target.value
    ).houseOrderTime
    let orderStartTime
    let orderEndTime
    let ooj = day.value.find((obj) => obj.houseOrderId == e.target.value)
    console.log('现在的是天数' + timeLength.value)
    Object.assign(disabledOptions2, disabledOptions2Copy)
    Object.assign(disabledOptions1, disabledOptions1Copy)
    desc2.value = e.target.nextElementSibling.innerText
    console.log(desc2.value)
    for (const option of orderJudge) {
      for (let tt of time.value) {
        orderStartTime = extractTimeFromDate(option.orderEndTime)
        orderEndTime = extractTimeFromDate(option.orderOverTime)
        getTimeFromRange(tt.houseTimeType)
        if (
          compareTimeStrings(
            compareTimeStringsMin(orderStartTime, startTime),
            compareTimeStringsMax(orderEndTime, endTime)
          ) == -1 &&
          getDaysDifference(getTime(), option.orderEndTime) ==
            ooj.houseOrderTime
        ) {
          if (selectedOption1.value == tt.id) {
            selectedOption1.value = null
          }
          disabledOptions1[tt.id] = true
          console.log(tt.id + '被禁用了')

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
.uniqueButton {
  display: none;
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
