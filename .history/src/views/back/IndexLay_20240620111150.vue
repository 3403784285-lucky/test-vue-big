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
        <div class="charts-row" style="display:flex;justify-content: space-between; ">
          
            <el-card>
              <div class="chart-container" id="line-chart"></div>
            </el-card>
         
         
            <el-card>
              <div class="chart-container" id="bar-chart"></div>
            </el-card>
         
          </div>
          <div class="" style="display:flex;justify-content: space-between; ">
          
          <el-card>
            <div class="chart-container" id="pie-chart"></div>
          </el-card>
       
       
          <el-card>
            <div class="chart-container" id="both-chart"></div>
          </el-card>
       
        </div>
       
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
    top:"24%"
  },
 
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  title: {
    text: '用户当日支付订单数',
  
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
  title: {
    text: '用户当日各类订单占比'
  },

  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 90],
      center: ['57%', '50%'],
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
    text: '用关注房源类型占比'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },

  legend: {
    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
    top:40,
    
  },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 90,
      bottom: 5,
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

var option4 = {
  grid:{ 
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:"19%"
  },
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  title:{
    text:'近5日未支付订单数量'
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%']
  },
  visualMap: {
    type: 'piecewise',
    show: false,
    dimension: 0,
    seriesIndex: 0,
    pieces: [
      {
        gt: 1,
        lt: 3,
        color: 'rgba(0, 0, 180, 0.4)'
      },
      {
        gt: 5,
        lt: 7,
        color: 'rgba(0, 0, 180, 0.4)'
      }
    ]
  },
  series: [
    {
      type: 'line',
      smooth: 0.6,
  
      symbol: 'none',
      lineStyle: {
        color: '#5470C6',
        width: 5
      },
      markLine: {
        symbol: ['none', 'none'],
        label: { show: false },
        data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
      },
      areaStyle: {},
      data: [
        ['2019-10-10', 200],
        ['2019-10-11', 560],
        ['2019-10-12', 750],
        ['2019-10-13', 580],
        ['2019-10-14', 250],
        ['2019-10-15', 300],
        ['2019-10-16', 450],
        ['2019-10-17', 300],
        ['2019-10-18', 100]
      ]
    }
  ]
};




const initLineChart = () => {
  const chart = echarts.init(document.getElementById('line-chart'))
 
  chart.setOption(option1)
}

const initBarChart = () => {
  const chart = echarts.init(document.getElementById('bar-chart'))

  chart.setOption(option2)
}

const initBothChart = () => {
  const chart = echarts.init(document.getElementById('both-chart'))

  chart.setOption(option4)
}

const initPieChart = () => {
  const chart = echarts.init(document.getElementById('pie-chart'))

  chart.setOption(option3)
}
const initCharts = () => {
  initLineChart()
  initBarChart()
  initPieChart()
  initBothChart()
}
onMounted(() => {
  initCharts()
})
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
  width: 550px;
}
</style>
