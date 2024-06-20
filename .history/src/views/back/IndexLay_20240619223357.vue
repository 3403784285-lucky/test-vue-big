<template>
  <el-container>
    
      <el-main >
        <el-row justify="space-between">
          <el-col :span="6">
            <el-card>
              <div>今日未支付订单</div>
              <div>￥1234</div>
            </el-card>
          </el-col>
          <el-col :span="5">
            <el-card>
              <div>今日支付订单</div>
              <div>￥210</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div>本月已支付订单</div>
              <div>￥1234</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div>本月未支付订单</div>
              <div>￥210</div>
            </el-card>
          </el-col>
        </el-row>
        <el-row  class="charts-row" justify="space-between">
          <el-col :span="24">
            <el-card>
              <div class="chart-container" id="line-chart"></div>
            </el-card>
            <el-card>
              <div class="chart-container" id="bar-chart"></div>
            </el-card>
          </el-col>
          
        </el-row>
        <el-row justify="space-between">
          <el-col :span="11" >
            <el-card>
              <div class="chart-container" id="pie-chart"></div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'


// 指定图表的配置项和数据
var option1 = {
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:"10%"
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        color: '#5470C6',
        width: 4,
        type: 'dashed'
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
};
var option2 = {
  legend: {
    top: 'bottom',
    show:false
  },
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:"10%"
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
};
var option3 = {
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:"10%"
  },
  title: {
    text: 'Funnel'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },

  legend: {
    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    
  },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' },
        { value: 80, name: 'Click' },
        { value: 100, name: 'Show' }
      ]
    }
  ]
};
// var option4 = {
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'none'
//     },
//     formatter: function (params) {
//       return params[0].name + ': ' + params[0].value;
//     }
//   },
//   xAxis: {
//     data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行'],
//     axisTick: { show: false },
//     axisLine: { show: false },
//     axisLabel: {
//       color: '#e54035'
//     }
//   },
//   yAxis: {
//     splitLine: { show: false },
//     axisTick: { show: false },
//     axisLine: { show: false },
//     axisLabel: { show: false }
//   },
//   color: ['#e54035'],
//   series: [
//     {
//       name: 'hill',
//       type: 'pictorialBar',
//       barCategoryGap: '-130%',
//       // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
//       symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
//       itemStyle: {
//         opacity: 0.5
//       },
//       emphasis: {
//         itemStyle: {
//           opacity: 1
//         }
//       },
//       data: [123, 60, 25, 18, 12, 9, 2, 1],
//       z: 10
//     },
//     {
//       name: 'glyph',
//       type: 'pictorialBar',
//       barGap: '-100%',
//       symbolPosition: 'end',
//       symbolSize: 50,
//       symbolOffset: [0, '-120%'],
//       data: [
//         {
//           value: 123,
//           symbol: pathSymbols.reindeer,
//           symbolSize: [60, 60]
//         },
//         {
//           value: 60,
//           symbol: pathSymbols.rocket,
//           symbolSize: [50, 60]
//         },
//         {
//           value: 25,
//           symbol: pathSymbols.plane,
//           symbolSize: [65, 35]
//         },
//         {
//           value: 18,
//           symbol: pathSymbols.train,
//           symbolSize: [50, 30]
//         },
//         {
//           value: 12,
//           symbol: pathSymbols.ship,
//           symbolSize: [50, 35]
//         },
//         {
//           value: 9,
//           symbol: pathSymbols.car,
//           symbolSize: [40, 30]
//         },
//         {
//           value: 2,
//           symbol: pathSymbols.run,
//           symbolSize: [40, 50]
//         },
//         {
//           value: 1,
//           symbol: pathSymbols.walk,
//           symbolSize: [40, 50]
//         }
//       ]
//     }
//   ]
// };




const initLineChart = () => {
  const chart = echarts.init(document.getElementById('line-chart'))
 
  chart.setOption(option1)
}

const initBarChart = () => {
  const chart = echarts.init(document.getElementById('bar-chart'))

  chart.setOption(option2)
}

const initPieChart = () => {
  const chart = echarts.init(document.getElementById('pie-chart'))

  chart.setOption(option3)
}
const initCharts = () => {
  initLineChart()
  initBarChart()
  initPieChart()
}
// onMounted(() => {
//   initCharts()
// })
</script>

<style scoped>
*{
  padding: 0;
}
.el-container {
  height: 86vh;
  overflow: overlay;
}
.user-info {
  text-align: center;
  margin-top: 20px;
}
.charts-row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.chart-container {

  height: 207.3px;
}
</style>
