<template>
  <div class="divider"></div>
  <div class="container">
    <div class="card choose shadow-lg mb-5 bg-white rounded">
      <div class="container header">
        <div class="row">
          <div class="col-md-2 outer">云烛の二手房</div>
          <div class="col-md-10 bottom"><dropDown></dropDown></div>
        </div>
        <div class="row new-house-description">
          踩惯了红地毯，会梦见石板路,你会在订房那一刻突然释然 万家灯火
          终于有属于自己的一盏
        </div>
        <div class="row demo">
          <div class="split"></div>
        </div>
        <div class="row option opt">
          <div class="col-md-1 head">大小(方米):</div>
          <div class="col-md-10 bottom">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox1"
                :value="50"
                v-model="selectedOption1"
                @click="continueClick"
                name="redioOptions1"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >50以下</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions1"
                v-model="selectedOption1"
                @click="continueClick"
                :value="70"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >50~70</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox3"
                @click="continueClick"
                v-model="selectedOption1"
                name="redioOptions1"
                :value="90"
              />
              <label class="form-check-label" for="inlineCheckbox3"
                >70~90</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox4"
                name="redioOptions1"
                @click="continueClick"
                v-model="selectedOption1"
                :value="120"
              />
              <label class="form-check-label" for="inlineCheckbox4"
                >90~120</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox5"
                name="redioOptions1"
                @click="continueClick"
                :value="150"
                v-model="selectedOption1"
              />
              <label class="form-check-label" for="inlineCheckbox5"
                >120~150</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox6"
                name="redioOptions1"
                @click="continueClick"
                v-model="selectedOption1"
                :value="200"
              />
              <label class="form-check-label" for="inlineCheckbox6"
                >150~200</label
              >
            </div>
          </div>
        </div>

        <div class="row option opt">
          <div class="col-md-1 head">总价(万):</div>
          <div class="col-md-11 bottom">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="enlineCheckbox1"
                @click="continueClick"
                v-model="selectedOption2"
                name="redioOptions2"
                :value="100"
              />
              <label class="form-check-label" for="enlineCheckbox1"
                >100以下</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="enlineCheckbox2"
                @click="continueClick"
                v-model="selectedOption2"
                name="redioOptions2"
                :value="150"
              />
              <label class="form-check-label" for="enlineCheckbox2"
                >100~150</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="enlineCheckbox3"
                name="redioOptions2"
                @click="continueClick"
                v-model="selectedOption2"
                :value="200"
              />
              <label class="form-check-label" for="enlineCheckbox3"
                >150~200</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="enlineCheckbox4"
                name="redioOptions2"
                @click="continueClick"
                v-model="selectedOption2"
                :value="250"
              />
              <label class="form-check-label" for="enlineCheckbox4"
                >200~250</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                @click="continueClick"
                v-model="selectedOption2"
                id="enlineCheckbox5"
                name="redioOptions2"
                :value="300"
              />
              <label class="form-check-label" for="enlineCheckbox5"
                >250~300</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="redioOptions2"
                type="radio"
                @click="continueClick"
                v-model="selectedOption2"
                id="enlineCheckbox6"
                :value="500"
              />
              <label class="form-check-label" for="enlineCheckbox6"
                >300~500</label
              >
            </div>
          </div>
        </div>
        <div class="row option opt">
          <div class="col-md-1 head">户型(居):</div>
          <div class="col-md-11 bottom">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="anlineCheckbox1"
                name="redioOptions3"
                v-model="selectedOption3"
                @click="continueClick"
                :value="1"
              />
              <label class="form-check-label" for="anlineCheckbox1">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="anlineCheckbox2"
                @click="continueClick"
                name="redioOptions3"
                v-model="selectedOption3"
                :value="2"
              />
              <label class="form-check-label" for="anlineCheckbox2">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                @click="continueClick"
                id="anlineCheckbox3"
                v-model="selectedOption3"
                name="redioOptions3"
                :value="3"
              />
              <label class="form-check-label" for="anlineCheckbox3">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="anlineCheckbox4"
                v-model="selectedOption3"
                :value="4"
                @click="continueClick"
                name="redioOptions3"
              />
              <label class="form-check-label" for="anlineCheckbox4">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="anlineCheckbox5"
                v-model="selectedOption3"
                :value="5"
                @click="continueClick"
                name="redioOptions3"
              />
              <label class="form-check-label" for="anlineCheckbox5">5</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="anlineCheckbox6"
                v-model="selectedOption3"
                name="redioOptions3"
                @click="continueClick"
                :value="6"
              />
              <label class="form-check-label" for="anlineCheckbox6">5+</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container show-goods shadow-lg mb-5 bg-white rounded">
    <div
      class="container"
      v-for="house in houses.slice(0, h)"
      :key="house.skuId"
      @click="clickHouse(house)"
    >
      <div class="row goods-frame">
        <div class="col-md-4 img-show">
          <img class="imgSize" :src="house.housePic" :alt="house.houseName" />
        </div>
        <div class="col-md-4">
          <div class="container">
            <div class="row goods-detail-upper">
              <div class="col-md-7 name-frame">
                <div class="name-goods goods-detail">{{ house.houseName }}</div>
              </div>

              <div class="col-md-1 pill-frame">
                <span class="badge bg-dark pill">{{ house.houseType }}</span>
              </div>
              <div class="col-md-1 pill-frame">
                <span class="badge bg-success pill">在售</span>
              </div>
            </div>
            <div class="row goods-detail">
              <div class="i-frame col-md-1">
                <i class="iconfont icon-weizhi pic"></i>
              </div>

              <div class="site-goods goods-detail col-md-4 not-important">
                {{ house.housePosition }}
              </div>
            </div>
            <div class="row goods-detail">
              <div class="i-frame col-md-1">
                <i class="col-md-1 iconfont pic icon-shouye"></i>
              </div>
              <div
                class="description-goods goods-detail col-md-9 not-important"
              >
                户型:{{ house.unitType }}室 建面 {{ house.houseSize }}(方米)
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 comp-des">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4 comp-des">
                      <div class="badge bg-light inner">低单价</div>
                    </div>

                    <div class="col-md-4 comp-des">
                      <div class="badge bg-light inner">低总价</div>
                    </div>
                    <div class="col-md-4 comp-des">
                      <div class="badge bg-light inner">3天内无理由退款</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 price-frame">
          <div class="price-goods">{{ house.housePrice }}万元</div>
        </div>
      </div>
      <div class="split-copy"></div>
    </div>
    <div
      v-if="h < houses.length"
      class="row justify-content-center more"
      @click="clickMore"
    >
      点击查看更多
    </div>
    <div v-else class="row justify-content-center noMore bg-yellow">
      没有更多了
    </div>
  </div>
</template>
<script setup>
import dropDown from '../../components/drop-down.vue'
import { houseDetailService, selectedOptionService } from '@/api/house'
import { ref, onUnmounted } from 'vue'
import { debounce } from 'lodash'
import { useTimeStore } from '@/stores/index'
import { useRouter } from 'vue-router'
const selectedOption1 = ref(0)
const selectedOption2 = ref(0)
const selectedOption3 = ref(0)
const timeStore = useTimeStore()
const houses = ref([])
const h = ref(8)
const init = async () => {
  const res = await houseDetailService()
  houses.value = res.data.data
}
const router = useRouter()
onUnmounted(() => {
  // 移除组件时，取消定时器
  continueClick.cancel()
})
const clickSelected = async () => {
  console.log(
    selectedOption1.value,
    selectedOption2.value,
    selectedOption3.value
  )
  const res = await selectedOptionService(
    selectedOption1.value,
    selectedOption2.value,
    selectedOption3.value
  )

  houses.value = res.data.data
}
const clickHouse = (value) => {
  router.push('/house/channel')
  // console.log(value)
  timeStore.house = value
}
const clickMore = () => {
  h.value += 8
}
const continueClick = debounce(clickSelected, 500)
init()
</script>
<style scoped>
/* 分割条和筛选框 */
.divider {
  height: 6rem;
}
.choose {
  padding: 1rem;
}
.head {
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0;
}
.bottom {
  padding: 0;
}
.split {
  height: 0.2vh;
  background-color: beige;
  width: 100%;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.option {
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
}
.outer {
  font-size: 1.3rem;
  font-weight: 700;
  font-family: 'YouYuan';
}

/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: '阿里妈妈刀隶体 Regular';
  font-weight: 400;
  src:
    url('//at.alicdn.com/wf/webfont/ZFKh9pHaLBHf/T5OFdKgYTeiG.woff2')
      format('woff2'),
    url('//at.alicdn.com/wf/webfont/ZFKh9pHaLBHf/ivbPs33Vhflj.woff')
      format('woff');
  font-display: swap;
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
.noMore {
  font-size: 0.9rem;
  color: rgb(167, 161, 161);
  font-weight: 900;
  font-family: 'YouYuan';
}
.new-house-description {
  margin-top: 1rem;
  font-family: '阿里妈妈刀隶体 Regular';
  font-size: 1.1rem;
  color: rgb(183, 185, 188);
}
/* 商品展示区 */

.show-goods {
  box-sizing: border-box;
  padding: 3.5rem;
}
.goods-detail {
  font-size: 0.7rem;
}

.name-goods {
  font-size: 1.2rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.not-important {
  color: rgb(167, 171, 173);
  padding: 0;
}
.pill {
  /* height: 2rem;
    line-height: 2rem;
    */
  /* 徽章大小不好调节，和父元素直接相关 */

  padding: 0.3rem;
  white-space: pre-wrap;
}
.pill-frame {
  padding: 0.3rem;
  margin: 0;
}
.pic {
  padding: 0;
}
.imgSize {
  width: 17rem;
  height: 11rem;
}
.i-frame {
  line-height: 1rem;
  margin-right: 0.4rem;
}
.goods-detail {
  margin-bottom: 0.2rem;
}
.goods-detail-upper {
  margin-bottom: 0.5rem;
}

.comp-des {
  height: 2rem;
  line-height: 2rem;
  padding: 0;
}
.inner {
  color: rgb(179, 175, 175);
  font-size: 0.6rem;
  font-weight: 500;
}
.price-frame {
  display: flex;
  justify-content: center;
}
.price-goods {
  color: red;
  font-size: 1.5rem;
  font-family: 'YouYuan';
}

.split-copy {
  height: 0.2vh;
  background-color: beige;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
