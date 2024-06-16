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
                value="option1"
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
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >50~70</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions1"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >70~90</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions1"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >90~120</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions1"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >120~150</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox3"
                name="redioOptions1"
                value="option3"
              />
              <label class="form-check-label" for="inlineCheckbox3"
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
                id="inlineCheckbox1"
                name="redioOptions2"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >100以下</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions3"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >100~150</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions3"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >150~200</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions3"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >200~250</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions3"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >250~300</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="redioOptions3"
                type="radio"
                id="inlineCheckbox3"
                value="option3"
              />
              <label class="form-check-label" for="inlineCheckbox3"
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
                id="inlineCheckbox1"
                name="redioOptions2"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                name="redioOptions2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                value="option2"
                name="redioOptions2"
              />
              <label class="form-check-label" for="inlineCheckbox2">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                value="option2"
                name="redioOptions2"
              />
              <label class="form-check-label" for="inlineCheckbox2">5</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox3"
                name="redioOptions2"
                value="option3"
              />
              <label class="form-check-label" for="inlineCheckbox3">5+</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container show-goods shadow-lg mb-5 bg-white rounded">
    <div class="container">
      <div class="row goods-frame">
        <div class="col-md-4 img-show">
          <img
            class="img-fluid"
            src="https://th.bing.com/th/id/R.5fceac89ff92b2fa9e29b6e17dea78fb?rik=A0KgYUZ3w1LWfw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50075%2f7668.jpg_wh860.jpg&ehk=am2Ua08n7u9m3TLVEqyI0AcL%2fmDsDh7Wj8nZyRf%2f4qY%3d&risl=&pid=ImgRaw&r=0"
            alt="檀香府"
          />
        </div>
        <div class="col-md-4">
          <div class="container">
            <div class="row goods-detail-upper">
              <div class="col-md-4 name-frame">
                <div class="name-goods goods-detail">檀香府</div>
              </div>

              <div class="col-md-2 pill">
                <span class="badge bg-dark">别墅</span>
              </div>
              <div class="col-md-2 pill">
                <span class="badge bg-success">在售</span>
              </div>
            </div>
            <div class="row goods-detail">
              <div class="i-frame col-md-1">
                <i class="iconfont icon-weizhi pic"></i>
              </div>

              <div class="site-goods goods-detail col-md-4 not-important">
                萌坛大街交叉口
              </div>
            </div>
            <div class="row goods-detail">
              <div class="i-frame col-md-1">
                <i class="col-md-1 iconfont pic icon-shouye"></i>
              </div>
              <div
                class="description-goods goods-detail col-md-9 not-important"
              >
                户型:三室 建面 280~300(方米)
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
          <div class="price-goods">1550万元</div>
        </div>
      </div>
    </div>
    <div class="split-copy"></div>
    <div class="container">
      <div class="row goods-frame">
        <div class="col-md-4 img-show">
          <img
            class="img-fluid"
            src="https://th.bing.com/th/id/R.5fceac89ff92b2fa9e29b6e17dea78fb?rik=A0KgYUZ3w1LWfw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50075%2f7668.jpg_wh860.jpg&ehk=am2Ua08n7u9m3TLVEqyI0AcL%2fmDsDh7Wj8nZyRf%2f4qY%3d&risl=&pid=ImgRaw&r=0"
            alt="檀香府"
          />
        </div>
        <div class="col-md-4">
          <div class="container">
            <div class="row goods-detail-upper">
              <div class="col-md-4 name-frame">
                <div class="name-goods goods-detail">檀香府</div>
              </div>

              <div class="col-md-2 pill">
                <span class="badge bg-dark">别墅</span>
              </div>
              <div class="col-md-2 pill">
                <span class="badge bg-success">在售</span>
              </div>
            </div>
            <div class="row goods-detail">
              <div class="i-frame col-md-1">
                <i class="iconfont icon-weizhi pic"></i>
              </div>

              <div class="site-goods goods-detail col-md-4 not-important">
                萌坛大街交叉口
              </div>
            </div>
            <div class="row goods-detail">
              <div class="i-frame col-md-1">
                <i class="col-md-1 iconfont pic icon-shouye"></i>
              </div>
              <div
                class="description-goods goods-detail col-md-9 not-important"
              >
                户型:三室 建面 280~300(方米)
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
          <div class="price-goods">1550万元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import dropDown from '../../components/drop-down.vue'
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
  padding: 0;
  width: 2.6rem;
}
.pic {
  padding: 0;
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
.name-frame {
  width: 6rem;
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
