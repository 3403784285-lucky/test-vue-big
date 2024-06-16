<template>
  <div class="container order-frame">
    <div class="card">
      <div class="container order-inner">
        <div class="row justify-content-between order-desc">
          <div class="col-md-3">
            <div class="orderNum"><strong>房屋编号: 001</strong></div>
          </div>
          <div class="col-md-2 text-end">
            <div class="orderStatus"></div>
          </div>
        </div>
        <div class="container">
          <div class="row house-desc">
            <div class="col-md-4">
              <img
                class="img-frame"
                src="https://ts4.cn.mm.bing.net/th?id=OIP-C.4Oc6bQCOcNx1m_Xh39AvggHaKe&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
              />
            </div>
            <div class="col-md-2 text-break desc-detail">
              西门·红庆祝家庄园房屋3室1厅
            </div>
            <div class="col-md-6 money text-end">
              <i>400万</i>
            </div>
          </div>
        </div>

        <div class="row button-click justify-content-between">
          <span class="col-md-2 time-order align-center">2023-12-31</span>
          <div class="col-md-4 pay">
            <div class="container">
              <div class="row">
                <div class="col-md-6 return text-end">
                  <button class="cancelButton">取消关注</button>
                </div>
                <div class="col-md-6 finish text-end">
                  <button>查看详情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-frame {
  color: rgb(161, 147, 147);
  padding: 3rem;
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
  line-height: 3rem;
  padding: 0;
  color: rgba(150, 150, 148, 0.503);
}

.desc-detail {
  color: rgba(149, 150, 150, 0.592);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.money {
  color: rgba(255, 0, 0, 0.534);
  font-size: 1.5rem;
}
.pay {
  display: flex;
  width: 12.5rem;
  padding: 0;
}
button {
  padding: 0.3rem;
  background-color: green;
  color: white;
  border: rgb(173, 166, 166) solid 1px;
  border-radius: 0.3rem;
}
.cancelButton {
  background-color: red;
}
.button-click {
  margin: 1rem;
}
</style>
<script setup></script>
